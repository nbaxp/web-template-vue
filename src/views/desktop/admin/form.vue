<template>
  <div class="center">
    <app-form
      ref="formRef"
      v-model="model"
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

import AppForm from '~/components/app-form.vue';

const formRef = ref(null);

const rules = [
  {
    required: true,
    message: '必填项',
  },
];

const options = [
  { value: 'value1', label: 'option1' },
  { value: 'value2', label: 'option2' },
  { value: 'value3', label: 'option3' },
];

let i = 0;

const prop = () => `prop${(i += 1)}`;

const model = reactive({
  data: null,
  schema: {
    type: 'object',
    properties: {
      [prop()]: {
        title: 'string[color]',
        type: 'string',
        input: 'color',
        showAlpha: true,
        rules,
      },
      [prop()]: {
        title: 'string=>el-input',
        type: 'string',
        rules,
      },
      [prop()]: {
        title: 'number=>el-input-number',
        type: 'number',
        precision: 2,
        step: 0.5,
        min: 0,
        max: 10,
        rules,
      },
      [prop()]: {
        title: 'number=>el-slider',
        type: 'number',
        input: 'slider',
      },
      [prop()]: {
        title: 'number=>el-rate',
        type: 'number',
        input: 'rate',
        max: 6,
      },
      [prop()]: {
        title: 'boolean=>el-checkbox',
        type: 'boolean',
      },
      [prop()]: {
        title: 'boolean[switch]',
        type: 'boolean',
        input: 'switch',
      },
      [prop()]: {
        title: 'string[radio-group]',
        type: 'string',
        input: 'radio-group',
        options,
        rules,
      },
      [prop()]: {
        title: 'array[checkbox-group]',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'checkbox-group',
        options,
        rules,
      },
      [prop()]: {
        title: 'array[transfer]',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'transfer',
        options,
        rules,
      },
      [prop()]: {
        title: 'string[select]',
        type: 'string',
        input: 'select',
        options,
        rules,
      },
      [prop()]: {
        title: 'string[select][multiple]',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'select',
        multiple: true,
        options,
        rules,
      },
      [prop()]: {
        title: 'string[cascader]',
        type: 'string',
        items: {
          type: 'string',
        },
        input: 'cascader',
        options,
        rules,
      },
      [prop()]: {
        title: 'string[cascader][multiple]',
        type: 'array',
        items: {
          type: 'string',
        },
        input: 'cascader',
        multiple: true,
        options,
        rules,
      },
      [prop()]: {
        title: 'string[date]',
        type: 'string',
        input: 'date',
        rules,
      },
      [prop()]: {
        title: 'string[datetime]',
        type: 'string',
        input: 'datetime',
        rules,
      },
      start: {
        title: 'string[daterange]',
        type: 'array',
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
      [prop()]: {
        title: 'string[image]',
        type: 'string',
        input: 'image',
        rules,
      },
      [prop()]: {
        title: 'array[image][multiple]',
        type: 'array',
        items: { type: 'string' },
        input: 'image',
        multiple: true,
        accept: '.jpg,.png',
        rules,
      },
      [prop()]: {
        title: 'object',
        type: 'object',
        rules,
        properties: {
          [prop()]: {
            title: 'object.string1[ui=text]',
            type: 'string',
            rules,
          },
          [prop()]: {
            title: 'object.string2[ui=text]',
            type: 'string',
            rules,
          },
        },
      },
      [prop()]: {
        title: 'array[items.tpye=object]',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            text: {
              title: 'array.object.string[ui=text]',
              type: 'string',
              default: 'text1',
              rules,
            },
            value: {
              title: 'array.object.number[ui=text]',
              type: 'number',
              default: null,
              rules,
            },
          },
        },
        default: [
          { text: 'one', value: 1 },
          { text: 'two', value: 2 },
        ],
        rules,
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
