<template>
  <el-button
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0)"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </el-button>
</template>
<script setup>
const emit = defineEmits(['click']);
const loading = ref(false);
const disabled = ref(false);
const disable = () => {
  disabled.value = true;
  loading.value = true;
};
const enable = () => {
  disabled.value = false;
  loading.value = false;
};
const onClick = async () => {
  disable();
  emit('click', () => enable());
};
defineExpose({ disable, enable });
</script>
