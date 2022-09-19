import schema from 'async-validator';

const defaultMessages = {
  required: '%s是必填项',
};
Object.assign(schema.messages, defaultMessages);
const { messages } = schema;

function format(template, ...args) {
  const formatRegExp = /%[sdj%]/g;
  return template.replace(formatRegExp, (match, index) => {
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

export { format, messages };
