<template>
  <el-form
    ref="formRef"
    v-loading="loading"
    :inline="model.inline"
    :model="model.data"
    label-width="auto"
    :label-suffix="model.labelSufix"
  >
    <slot name="header">
      <h2
        v-if="model.schema.title"
        class="text-center"
      >
        {{ model.schema.title }}
      </h2>
    </slot>
    <form-item
      v-model="model.data"
      :schema="model.schema"
    />
    <slot name="footer">
      <el-form-item>
        <el-button
          :disabled="disabled"
          type="primary"
          @click="submit"
          >提交</el-button
        >
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>
<script setup>
import FormItem from '~/components/form-item.vue';
import { schemaToModel } from '~/utils';
import request from '~/utils/request';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});
const model = reactive(props.modelValue);
const emit = defineEmits(['update:modelValue', 'callback']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
//
if (!model.data) {
  model.data = schemaToModel(model.schema.properties);
  console.log('根据 schema 生成 model：');
  console.log(JSON.stringify(model.data, null, 2));
}
const formRef = ref(null);
const loading = ref(false);
const disabled = ref(false);
const reset = () => {
  formRef.value.resetFields();
};
const validate = async () => {
  return formRef.value.validate();
};
const submit = async () => {
  try {
    const valid = await validate();
    if (valid) {
      disabled.value = true;
      loading.value = true;
      const url = props.modelValue.action;
      const method = props.modelValue.method ?? 'post';
      const config = {
        url,
        method,
      };
      const { data } = model;
      if (method === 'get') {
        config.params = data;
      } else if (method === 'post') {
        config.data = data;
      }
      const response = await request.request(config);
      const result = response.data?.data ?? response.data;
      emit('callback', result);
    }
  } catch (error) {
    console.error('error', error);
  } finally {
    disabled.value = false;
    loading.value = false;
  }
};
defineExpose({ reset, validate, submit });
</script>
