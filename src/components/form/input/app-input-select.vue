<template>
  <template v-if="disabled">
    <template v-if="schema.multiple">
      <el-tag
        v-for="item in getMultipleSelectDisplay"
        :key="item"
        class="mr-2"
        >{{ item }}</el-tag
      >
    </template>
    <el-tag v-else>{{ getSelectDisplay }}</el-tag>
  </template>
  <el-select
    v-else
    v-model="model[prop]"
    :multiple="!!schema.multiple"
    :disabled="disabled"
    clearable
  >
    <el-option
      v-for="item in selectOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import cache from '~/cache';
import request from '~/request';

defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  model: {
    type: Object,
    default: null,
  },
  prop: {
    type: String,
    default: null,
  },
  schema: {
    type: Object,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const model = reactive(props.model);
const emit = defineEmits(['update:model']);
watch(model, (value) => {
  emit('update:model', value);
});
//
const selectOptions = ref(props.schema.options ?? []);

const getSelectDisplay = computed(() => {
  return selectOptions.value.find((o) => o.value === model[props.prop])?.label;
});

const getMultipleSelectDisplay = computed(() => {
  return selectOptions.value.filter((o) => model[props.prop].find((i) => i === o.value)).map((o) => o.label);
});

const getOptions = async (url) => {
  const data = await navigator.locks.request(url, async () => {
    let result = cache.get(url);
    if (!result) {
      const response = await request.get(url);
      result = response.data.data ?? response.data;
      cache.set(url, result, 60 * 1000);
    }
    return result;
  });
  return data ?? [];
};

if (props.schema.url && props.schema.parent) {
  watchEffect(async () => {
    const parentValue = model[props.schema.parent];
    if (parentValue) {
      const url = `${props.schema.url}?parent=${parentValue}`;
      selectOptions.value = await getOptions(url);
      if (model[props.prop] && !selectOptions.value.some((o) => o.value === model[props.prop])) {
        model[props.prop] = null;
      }
    } else {
      selectOptions.value = [];
      model[props.prop] = null;
    }
  });
}
//
onMounted(async () => {
  if (props.schema.url && !props.schema.parent) {
    const { url } = props.schema;
    selectOptions.value = await getOptions(url);
  }
});
</script>
