<template>
  <template v-if="disabled">{{ getDate() }}</template>
  <el-date-picker
    v-else
    v-bind="$attrs"
    v-model="viewModel"
    :type="type"
    :start-placeholder="schema.startPlaceholder ?? '开始'"
    :end-placeholder="schema.endPlaceholder ?? '结束'"
    :unlink-panels="!!schema.unlinkPanels"
    :disabled-date="disabledDate"
    clearable
  />
</template>

<script setup>
import { importFunction } from '~/utils';

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
const type = props.schema.input ?? props.schema.type;
//
const getDate = () => {
  if (type === 'date') {
    return new Date(model[props.prop]).toLocaleDateString();
  }
  if (type === 'datetime') {
    return new Date(model[props.prop]).toLocaleString();
  }
  if (type === 'daterange') {
    return `${new Date(model[props.prop]).toLocaleDateString()} - ${new Date(
      model[props.schema.end],
    ).toLocaleDateString()}`;
  }
  // datetimerange
  return `${new Date(model[props.prop]).toLocaleString()} - ${new Date(model[props.schema.end]).toLocaleString()}`;
};
//
const viewModel = computed({
  get() {
    if (type === 'daterange' || type === 'datetimerange') {
      if (model[props.prop] && model[props.schema.end]) {
        return [new Date(model[props.prop]), new Date(model[props.schema.end])];
      }
      return [];
    }
    return model[props.prop] ? new Date(model[props.prop]) : null;
  },
  set(values) {
    if (Array.isArray(values)) {
      const [start = null, end = null] = values ?? [];
      model[props.prop] = start.toISOString();
      model[props.schema.end] = end.toISOString();
    } else {
      model[props.prop] = values ? values.toISOString() : null;
    }
  },
});
//
let disabledDate = () => false;
onMounted(async () => {
  disabledDate = await importFunction(props.schema.disabledDate ?? '()=>false');
});
</script>
