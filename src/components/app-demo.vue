<template>
  <el-date-picker
    v-bind="$attrs"
    v-model="model"
  />
</template>
<script setup>
// 方式一：
// computed get 实现子组件数据依赖父组件数据
// computed set 实现调用父组件更新数据
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);
const model = computed({
  get() {
    return props.modelValue ? new Date(props.modelValue) : null;
  },
  set(value) {
    emit('update:modelValue', value ? value.toISOString() : null);
  },
});
</script>
<!-- <script setup>
// 方式二：
// watch modelValue 同步父组件数据到子组件
// watch model 调用父组件更新数据
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);
const model = ref(null);
watch(
  () => props.modelValue,
  () => {
    model.value = props.modelValue ? new Date(props.modelValue) : null;
  },
);
watch(model, (value) => {
  emit('update:modelValue', value ? value.toISOString() : null);
});
</script> -->
<!-- <script setup>
// 方式三：
// watchEffect 同步父组件数据到子组件
// watch model 调用父组件更新数据
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);
const model = ref(null);
watchEffect(() => {
  model.value = props.modelValue ? new Date(props.modelValue) : null;
});
watch(model, (value) => {
  emit('update:modelValue', value ? value.toISOString() : null);
});
</script> -->
