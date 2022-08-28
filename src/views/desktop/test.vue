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
import AppForm from '~/components/app-form.vue';

const formRef = ref(null);
const model = reactive({
  data: null,
  schema: {
    title: 'test',
    type: 'object',
    properties: {
      test1: {
        title: 'test1',
        type: 'string',
        default: null,
        rules: [
          {
            required: true,
          },
        ],
      },
      test2: {
        title: 'test2',
        type: 'object',
        rules: [
          {
            required: true,
          },
        ],
        properties: {
          test21: {
            title: 'test21',
            type: 'string',
            default: null,
            rules: [
              {
                required: true,
              },
            ],
          },
          test22: {
            title: 'test22',
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
        title: 'test3',
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
        title: 'test4',
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
        title: 'test5',
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
              title: 'text',
              type: 'string',
              default: 'text1',
              rules: [
                {
                  required: true,
                },
              ],
            },
            value: {
              title: 'value',
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
    const valid = await formRef.value.validate();
    alert(valid);
    console.log('data:');
    console.log(model.data);
  } catch (error) {
    console.error(error);
  }
};
</script>
