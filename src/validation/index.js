import schema from 'async-validator';

import request from '~/request';

function format(template, ...args) {
  const formatRegExp = /%[sdj%]/g;
  let counter = 0;
  return template.replace(formatRegExp, (match) => {
    const index = counter;
    counter += 1;
    if (match === '%%') {
      return '%';
    }
    if (index > args.length - 1) {
      return match;
    }
    if (match === '%s') {
      return String(args[index]);
    }
    if (match === '%d') {
      return Number(args[index]);
    }
    if (match === '%j') {
      return JSON.stringify(args[index]);
    }
    return match;
  });
}

const messages = {
  default: '%s验证失败',
  required: '%s是必填项',
  enum: '%s必须是%s之一',
  whitespace: '%s不能为空',
  // date: {
  //   format: '%s date %s is invalid for format %s',
  //   parse: '%s date could not be parsed, %s is invalid ',
  //   invalid: '%s date %s is invalid',
  // },
  types: {
    string: '%s不是有效的字符串',
    method: '%s不是有效的函数',
    array: '%s不是有效的数组',
    object: '%s不是有效的对象',
    number: '%s不是有效的数字',
    date: '%s不是有效的日期',
    boolean: '%s不是有效的布尔值',
    integer: '%s不是有效的整数',
    float: '%s不是有效的浮点数',
    regexp: '%s不是有效的正则表达式',
    email: '%s不是有效的邮箱',
    url: '%s不是有效的 url',
    hex: '%s不是有效的十六进制',
  },
  string: {
    len: '%s长度必须是%s',
    min: '%s最小长度为%s',
    max: '%s最大长度为%s',
    range: '%s长度必须在%s和%s之间',
  },
  number: {
    len: '%s必须等于%s',
    min: '%s不小于%s',
    max: '%s不大于%s',
    range: '%s必须在%s和%s之间',
  },
  array: {
    len: '%s的数量必须是%s',
    min: '%s的数量不小于%s',
    max: '%s的数量不大于%s',
    range: '%s的数量必须在%s和%s之间',
  },
  pattern: {
    mismatch: '%s的值 %s 不匹配模式 %s',
  },
  clone: function clone() {
    const cloned = JSON.parse(JSON.stringify(this));
    cloned.clone = this.clone;
    return cloned;
  },
  //
  compare: '%s 和 %s 输入必须一致',
  true: '%s必须选中',
  remote: '%s远程验证失败',
};

const validators = {
  compare(rule, value, callback, source, options) {
    const errors = [];
    if (value && value !== rule.data[rule.compare]) {
      const message = format(options.messages.compare, rule.title, rule.schema.properties[rule.compare].title);
      errors.push(new Error(message));
    }
    callback(errors);
  },
  true(rule, value, callback, source, options) {
    const errors = [];
    if (!value) {
      const message = format(options.messages.true, rule.title);
      errors.push(new Error(message));
    }
    callback(errors);
  },
  remote(rule, value, callback, source, options) {
    const errors = [];
    const message = format(options.messages.remote, rule.title);
    if (!value) {
      callback(errors);
    } else {
      const config = {
        url: rule.url,
        method: rule.method ?? 'get',
      };
      const data = { [rule.field]: value };
      if (config.method === 'get') {
        config.params = data;
      } else {
        config.data = data;
      }
      request
        .request(config)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.code) {
              if (response.data.code !== 200) {
                errors.push(new Error(1 + response.data.message));
              }
            }
          } else {
            errors.push(new Error(2 + response.data));
          }
          callback(errors);
        })
        .catch((o) => {
          errors.push(o.response?.data?.message ?? message ?? o.message);
          callback(errors);
        });
    }
  },
};

const createRules = (parentSchema, property, data) => {
  if (!property.rules) {
    return null;
  }
  const rules = [...(Array.isArray(property.rules) ? property.rules : [property.rules])].map((o) =>
    JSON.parse(JSON.stringify(o)),
  );
  Object.values(rules).forEach((rule) => {
    rule.data = data;
    rule.schema = parentSchema;
    rule.title = rule.title ?? property.title;
    rule.type = property.type;
    if (rule.validator) {
      rule.validator = validators[rule.validator];
    }
    if (!rule.message) {
      if (rule.required) {
        rule.message = format(schema.messages.required, property.title);
      } else if (rule.pattern) {
        rule.message = format(schema.messages.pattern, property.title);
      } else if (property.type === 'string' || property.type === 'number' || property.type === 'array') {
        if (rule.len) {
          rule.message = format(schema.messages[property.type].len, property.title, rule.len);
        } else if (rule.min) {
          rule.message = format(schema.messages[property.type].min, property.title, rule.min);
        } else if (rule.max) {
          rule.message = format(schema.messages[property.type].max, property.title, rule.max);
        } else if (rule.range) {
          rule.message = format(schema.messages[property.type].range, property.title, rule.range);
        }
      }
    }
  });
  return rules;
};

Object.assign(schema.messages, messages);
Object.assign(schema.validators, validators);

export { createRules, format };
