<template>
  <app-list v-model="model" />
</template>

<script setup>
import AppList from '~/components/app-list.vue';

const rules = [
  {
    required: true,
    message: '必填项',
  },
];

const options = [
  { value: 'value1', label: 'option1', children: [{ value: 'value1.1', label: 'options1.1' }] },
  { value: 'value2', label: 'option2' },
  { value: 'value3', label: 'option3' },
];

const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      input: 'hidden',
    },
    createdAt: {
      type: 'string',
      title: '创建时间',
      input: 'datetime',
      hideForEdit: true,
    },
    modifiedAt: {
      type: 'string',
      title: '修改时间',
      input: 'datetime',
      hideForEdit: true,
    },
    rowVersion: {
      type: 'string',
      input: 'hidden',
    },
    color: {
      title: 'Color',
      type: 'string',
      input: 'color',
      rules,
      sortable: 'custom',
    },
    colorRgba: {
      title: 'RGBA Color',
      type: 'string',
      input: 'color',
      showAlpha: true,
      rules,
    },
    editor: {
      title: 'editor',
      type: 'string',
      input: 'editor',
      rules,
    },
    input: {
      title: '字符串',
      type: 'string',
      rules,
    },
    number: {
      title: '数字',
      type: 'number',
      precision: 2,
      step: 0.5,
      min: 0,
      max: 10,
      rules,
    },
    numberSlider: {
      title: '滑动输入',
      type: 'number',
      input: 'slider',
    },
    numberRate: {
      title: '评分',
      type: 'number',
      input: 'rate',
      max: 6,
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
    },
    booleanSwitch: {
      title: '开关',
      type: 'boolean',
      input: 'switch',
    },
    radioGroup: {
      title: '单选框',
      type: 'string',
      input: 'radio-group',
      options,
      rules,
    },
    checkBoxGroup: {
      title: '复选框多选',
      type: 'array',
      items: {
        type: 'string',
      },
      input: 'checkbox-group',
      options,
      rules,
    },
    transfer: {
      title: '穿梭框多选',
      type: 'array',
      items: {
        type: 'string',
      },
      input: 'transfer',
      options,
      rules,
    },
    select: {
      title: '单选',
      type: 'string',
      input: 'select',
      options,
      rules,
    },
    selectMultiple: {
      title: '多选',
      type: 'array',
      items: {
        type: 'string',
      },
      input: 'select',
      multiple: true,
      options,
      rules,
    },
    selectLazy1: {
      title: '单选懒加载',
      type: 'string',
      input: 'select',
      url: 'lazy/select1',
      rules,
    },
    selectLazy2: {
      title: '单选级联2',
      type: 'string',
      input: 'select',
      url: 'lazy/select2',
      parent: 'selectLazy1',
      rules,
    },
    selectLazy3: {
      title: '单选级联3',
      type: 'string',
      input: 'select',
      url: 'lazy/select3',
      parent: 'selectLazy2',
      rules,
    },
    cascader: {
      title: '级联',
      type: 'string',
      items: {
        type: 'string',
      },
      input: 'cascader',
      checkStrictly: true,
      options,
      rules,
    },
    cascaderMultiple: {
      title: '级联多选',
      type: 'array',
      items: {
        type: 'string',
      },
      input: 'cascader',
      checkStrictly: true,
      multiple: true,
      options,
      rules,
    },
    date: {
      title: '日期',
      type: 'string',
      input: 'date',
      rules,
    },
    datetime: {
      title: '日期时间',
      type: 'string',
      input: 'datetime',
      disabledDate: (value) => value < new Date(),
      rules,
    },
    start: {
      title: '日期范围',
      type: 'string',
      items: {
        type: 'string',
      },
      input: 'daterange',
      end: 'end',
      disabledDate: '(value)=>value<new Date()',
      rules,
    },
    end: {
      title: 'string[datetime]',
      type: 'string',
      input: 'hidden',
      rules,
    },
    startDatetime: {
      title: '日期时间范围',
      type: 'string',
      items: {
        type: 'string',
      },
      input: 'datetimerange',
      end: 'endDatetime',
      disabledDate: '(value)=>value<new Date()',
      rules,
    },
    endDatetime: {
      title: 'string[datetime]',
      type: 'string',
      input: 'hidden',
      rules,
    },
    file: {
      title: '文件',
      type: 'string',
      input: 'file',
      action: 'upload',
      rules,
    },
    fileMultiple: {
      title: '文件多选',
      type: 'array',
      items: { type: 'string' },
      input: 'file',
      action: 'upload',
      multiple: true,
      accept: '.jpg,.png',
      rules,
    },
    image: {
      title: '图片',
      type: 'string',
      input: 'image',
      accept: '.jpg,.png',
      action: 'upload',
      rules,
    },
    imageMultiple: {
      title: '图片多选',
      type: 'array',
      items: { type: 'string' },
      input: 'image',
      accept: '.jpg,.png',
      action: '/api/upload',
      multiple: true,
      rules,
    },
  },
};

const queryModel = {
  action: 'list',
  method: 'get',
  inline: true,
  disableValidation: true,
  schema,
};
const listModel = {
  data: [],
  schema,
};
const detailModel = {
  data: null,
  schema,
};
const createModel = {
  data: null,
  schema,
};
const updateModel = {
  data: {},
  schema,
};

const model = reactive({
  queryModel,
  listModel,
  detailModel,
  createModel,
  updateModel,
});
</script>
