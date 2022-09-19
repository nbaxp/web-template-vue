<template>
  <el-form
    ref="formRef"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0)"
    :inline="model.inline"
    :model="model.data"
    :label-width="model.labelWidth ?? 'auto'"
    :label-suffix="model.labelSufix ?? '：'"
    :label-position="model.labelPosition"
  >
    <slot name="header">
      <h2
        v-if="schema?.title"
        class="text-center"
      >
        {{ schema?.title }}
      </h2>
    </slot>
    <app-form-item
      v-model="model.data"
      :schema="schema"
      :validate="!model.disableValidation"
      :mode="model.mode"
      :errors="errors"
    />
    <slot name="footer">
      <el-form-item>
        <el-button
          :disabled="disabled"
          type="primary"
          @click="submit"
        >
          提交
        </el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>
<script setup>
import log from '~/log';
import request from '~/request';
import { useAppStore } from '~/store';
import { cloneDeep, schemaToModel } from '~/utils';
import { format, messages } from '~/utils/validator.js';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});
const model = reactive(props.modelValue);
const emit = defineEmits(['update:modelValue', 'before', 'after']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
//
const appStore = useAppStore();
const formRef = ref(null);
const loading = ref(false);
const disabled = ref(false);
const errors = ref({});

const schema = reactive(cloneDeep(model.schema ?? { properties: {} }));

// 注意避免for循环中的闭包只有最后一个生效的问题
const updateRules = (instance) => {
  Object.values(instance.properties).forEach((property) => {
    if (property.rules) {
      const rules = Array.isArray(property.rules) ? property.rules : [property.rules];
      Object.values(rules).forEach((rule) => {
        if (rule.required) {
          if (!rule.message) {
            rule.message = messages.required;
          }
          if (rule.message.indexOf('%s') >= 0) {
            rule.message = format(rule.message, property.title);
          }
        }
        console.log(JSON.stringify(property));
      });
    }
    if (property.properties) {
      updateRules(property);
    }
  });
};

updateRules(schema);

if (!model.data) {
  model.data = schemaToModel(schema.properties);
  log.debug('schema => model：');
  log.debug(JSON.stringify(model.data, null, 2));
}

const reset = () => {
  formRef.value.resetFields();
};
const validate = async () => {
  return formRef.value.validate();
};
async function load(data) {
  const url = props.modelValue.action;
  const method = props.modelValue.method ?? 'post';
  const config = {
    url,
    method,
  };
  if (method === 'put' || method === 'delete') {
    if (appStore.useHttpMethodOverride) {
      config.method = 'post';
      config.headers = { 'X-HTTP-Method-Override': method.toUpperCase() };
    }
  }
  if (method === 'get') {
    config.params = data;
  } else {
    config.data = data;
  }
  try {
    const response = await request.request(config);
    const result = response.data?.data ?? response.data;
    return result;
  } catch (e) {
    errors.value = e.response.data.data ?? e.response.data;
    throw e;
  }
}
const submit = async () => {
  try {
    const valid = await validate();
    if (valid) {
      disabled.value = true;
      loading.value = true;
      const data = cloneDeep(model.data);
      emit('before', (val) => {
        Object.assign(data, val);
      });
      const result = await load(data);
      emit('after', result);
    }
  } catch (error) {
    log.error(error);
  } finally {
    disabled.value = false;
    loading.value = false;
  }
};
defineExpose({ reset, validate, submit, load });
</script>
