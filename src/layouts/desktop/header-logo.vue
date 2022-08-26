<template>
  <router-link to="/" class="block" :class="{ aside: hasAside, collapse: appStore.menuCollapse }">
    <el-space>
      <img src="/logo.svg" class="logo" />
      <h1 v-if="!appStore.menuCollapse" class="p-0 m-0 text-lg">{{ appStore.name }}</h1>
    </el-space>
  </router-link>
</template>

<script setup>
import { useAppStore } from '~/store/index.js';

defineProps({
  hasAside: {
    type: Boolean,
    default: false,
  },
});

const appStore = useAppStore();
</script>

<style scoped>
.logo {
  max-height: 2em;
}

h1 {
  color: var(--el-color-primary);
  font-size: 18px;
  line-height: 1.5em;
}
</style>
