<template>
  <div class="center">
    <app-form
      ref="formRef"
      v-model="model"
      mode="create"
    >
      <template #footer>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit"
            >submit</el-button
          >
        </el-form-item>
      </template>
    </app-form>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';

import AppForm from '~/components/form/app-form.vue';

const formRef = ref(null);

const getRules = () =>
  JSON.parse(
    JSON.stringify([
      {
        required: true,
      },
    ]),
  );

const options = [
  { value: 'value1', label: 'option1', children: [{ value: 'value1.1', label: 'options1.1' }] },
  { value: 'value2', label: 'option2' },
  { value: 'value3', label: 'option3' },
];

const model = reactive({
  data: null,
  schema: {
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
        rules: getRules(),
      },
      colorRgba: {
        title: 'RGBA Color',
        type: 'string',
        input: 'color',
        showAlpha: true,
        rules: getRules(),
      },
      editor: {
        title: 'editor',
        type: 'string',
        input: 'editor',
        rules: getRules(),
      },
      input1: {
        title: '字符串1',
        type: 'string',
        rules: [{ required: true }, { len: 2 }],
      },
      input2: {
        title: '字符串2',
        type: 'string',
        rules: { validator: 'compare', compare: 'input1' },
      },
      input3: {
        title: '字符串3',
        type: 'string',
        rules: { type: 'date' },
      },
      remote1: {
        title: '远程验证1',
        type: 'string',
        rules: { validator: 'remote', url: 'valid/test1', message: '%s 远程验证失败' },
      },
      remote2: {
        title: '远程验证2',
        type: 'string',
        rules: { validator: 'remote', url: 'valid/test2' },
      },
      remote3: {
        title: '远程验证3',
        type: 'string',
        rules: { validator: 'remote', url: 'valid/test3', message: '%s 远程验证失败' },
      },
      remote4: {
        title: '远程验证4',
        type: 'string',
        rules: { validator: 'remote', url: 'valid/test4' },
      },
      number: {
        title: '数字',
        type: 'number',
        precision: 2,
        step: 0.5,
        min: 0,
        max: 100,
        rules: getRules(),
      },
      numberSlider: {
        title: '滑动输入',
        type: 'number',
        input: 'slider',
        rules: { type: 'number', len: 10 },
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
        rules: { validator: 'true', message: '%s必须选中' },
      },
      booleanSwitch: {
        title: '开关',
        type: 'boolean',
        input: 'switch',
        rules: { validator: 'true' },
      },
      radioGroup: {
        title: '单选框',
        type: 'string',
        input: 'radio-group',
        options,
        rules: getRules(),
      },
      checkBoxGroup: {
        title: '复选框多选',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'checkbox-group',
        options,
      },
      transfer: {
        title: '穿梭框多选',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'transfer',
        options,
        rules: getRules(),
      },
      select: {
        title: '单选',
        type: 'string',
        input: 'select',
        options,
        rules: getRules(),
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
        rules: { len: 1 },
      },
      selectLazy1: {
        title: '单选懒加载',
        type: 'string',
        input: 'select',
        url: 'lazy/select1',
        rules: getRules(),
      },
      selectLazy2: {
        title: '单选级联2',
        type: 'string',
        input: 'select',
        url: 'lazy/select2',
        parent: 'selectLazy1',
        rules: getRules(),
      },
      selectLazy3: {
        title: '单选级联3',
        type: 'string',
        input: 'select',
        url: 'lazy/select3',
        parent: 'selectLazy2',
        rules: getRules(),
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
        rules: getRules(),
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
        rules: getRules(),
      },
      date: {
        title: '日期',
        type: 'string',
        input: 'date',
        rules: { type: 'date' },
      },
      datetime: {
        title: '日期时间',
        type: 'string',
        input: 'datetime',
        disabledDate: (value) => value < new Date(),
        rules: getRules(),
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
        rules: getRules(),
      },
      end: {
        title: 'string[datetime]',
        type: 'string',
        input: 'hidden',
        rules: getRules(),
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
        rules: getRules(),
      },
      endDatetime: {
        title: 'string[datetime]',
        type: 'string',
        input: 'hidden',
        rules: getRules(),
      },
      file: {
        title: '文件',
        type: 'string',
        input: 'file',
        action: 'upload',
        rules: getRules(),
      },
      fileMultiple: {
        title: '文件多选',
        type: 'array',
        items: { type: 'string' },
        input: 'file',
        action: 'upload',
        multiple: true,
        accept: '.jpg,.png',
        rules: getRules(),
      },
      image: {
        title: '图片',
        type: 'string',
        input: 'image',
        accept: '.jpg,.png',
        action: 'upload',
        rules: getRules(),
      },
      imageMultiple: {
        title: '图片多选',
        type: 'array',
        items: { type: 'string' },
        input: 'image',
        accept: '.jpg,.png',
        action: '/api/upload',
        multiple: true,
        rules: getRules(),
      },
      objectProp: {
        title: '嵌套对象',
        type: 'object',
        properties: {
          prop1: {
            title: '字段1',
            type: 'string',
            rules: getRules(),
          },
          prop2: {
            title: '字段2',
            type: 'string',
            rules: getRules(),
          },
        },
      },
      arrayProp: {
        title: '数组对象',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            text: {
              title: '字段1',
              type: 'string',
              default: 'text1',
              rules: getRules(),
            },
            value: {
              title: '字段2',
              type: 'number',
              default: null,
              rules: getRules(),
            },
          },
        },
        default: [
          { text: 'one', value: 1 },
          { text: 'two', value: 2 },
        ],
        rules: getRules,
      },
    },
  },
});
//
const submit = async () => {
  try {
    await formRef.value.validate();
    ElMessage.success('验证成功');
    console.log('data:');
    console.log(model.data);
  } catch (error) {
    console.error(error);
    ElMessage.error('验证失败');
  }
};
</script>
