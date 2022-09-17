<template>
  <template v-if="disabled">
    <template v-if="schema.multiple">
      <el-tag
        v-for="item in getCascaderDisplay"
        :key="item"
        class="mr-2"
      >
        {{ item }}
      </el-tag>
    </template>
    <el-tag v-else>{{ getCascaderDisplay }}</el-tag>
  </template>
  <el-cascader
    v-else
    v-model="cascaderModel"
    :options="selectOptions"
    :props="{ multiple: !!schema.multiple, checkStrictly: !!schema.checkStrictly }"
    clearable
    @change="onCascaderChange"
  />
</template>

<script setup>
import { watchEffect } from 'vue';

import cache from '~/cache';
import request from '~/request';
import { findPath } from '~/utils';

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
const cascaderModel = ref([]);

const getCascaderDisplay = computed(() => {
  if (props.schema.multiple) {
    return model[props.prop].map((o) =>
      findPath(selectOptions.value, (n) => n.value === o)
        .map((i) => i.label)
        .join(' / '),
    );
  }
  return findPath(selectOptions.value, (n) => n.value === model[props.prop])
    .map((o) => o.label)
    .join(' / ');
});

watchEffect(() => {
  if (model[props.prop]) {
    if (props.schema.multiple) {
      cascaderModel.value = model[props.prop].map((o) =>
        findPath(selectOptions.value, (n) => n.value === o).map((i) => i.value),
      );
    } else {
      cascaderModel.value = findPath(selectOptions.value, (n) => n.value === model[props.prop]).map((o) => o.value);
    }
  } else {
    cascaderModel.value = [];
  }
});

const onCascaderChange = (values) => {
  if (props.schema.multiple) {
    model[props.prop] = values.map((o) => o[o.length - 1]);
  } else {
    model[props.prop] = values ? values[values.length - 1] : null;
  }
};

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
//
onMounted(async () => {
  if (props.schema.url && !props.schema.parent) {
    const { url } = props.schema;
    selectOptions.value = await getOptions(url);
  }
});
</script>
