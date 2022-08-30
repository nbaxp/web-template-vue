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
const model = reactive({
  data: null,
  schema: {
    title: '表单示例',
    type: 'object',
    properties: {
      test1: {
        title: 'string[ui=text]',
        type: 'string',
        default: null,
        rules: [
          {
            required: true,
          },
        ],
      },
      test2: {
        title: 'object',
        type: 'object',
        rules: [
          {
            required: true,
          },
        ],
        properties: {
          test21: {
            title: 'object.string1[ui=text]',
            type: 'string',
            default: null,
            rules: [
              {
                required: true,
              },
            ],
          },
          test22: {
            title: 'object.string2[ui=text]',
            type: 'string',
            default: null,
            rules: [
              {
                required: true,
              },
            ],
          },
        },
      },
      test3: {
        title: 'number[ui=select]',
        type: 'number',
        default: null,
        rules: [
          {
            required: true,
          },
        ],
        ui: 'select',
        options: [
          { value: 1, text: 'one' },
          { value: 2, text: 'two' },
          { value: 3, text: 'three' },
        ],
      },
      test4: {
        title: 'array[items.type=string][ui=select]',
        type: 'array',
        default: [],
        items: {
          type: 'string',
        },
        rules: [
          {
            required: true,
          },
        ],
        ui: 'select',
        multiple: true,
        options: [
          { value: 26, text: 'A' },
          { value: 27, text: 'B' },
          { value: 28, text: 'C' },
        ],
      },
      test5: {
        title: 'array[items.tpye=object]',
        type: 'array',
        default: [
          { text: 'one', value: 1 },
          { text: 'two', value: 2 },
        ],
        rules: [
          {
            required: true,
          },
        ],
        items: {
          type: 'object',
          properties: {
            text: {
              title: 'array.object.string[ui=text]',
              type: 'string',
              default: 'text1',
              rules: [
                {
                  required: true,
                },
              ],
            },
            value: {
              title: 'array.object.number[ui=text]',
              type: 'number',
              default: null,
              rules: [
                {
                  required: true,
                },
              ],
            },
          },
        },
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
