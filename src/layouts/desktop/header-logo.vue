<template>
  <router-link to="/" class="block">
    <el-space>
      <el-image src="/logo.svg" class="logo" />
      <h1 v-if="!appStore.menuCollapse" class="p-0 m-0 text-lg">{{ appStore.name }}</h1>
    </el-space>
  </router-link>
</template>

<script setup>
import { useAppStore } from '~/store/index.js';

const appStore = useAppStore();
</script>

<style scoped>
.logo {
  height: 2em;
}

h1 {
  font-size: 18px;
  color: var(--el-color-primary);
  line-height: 1.5em;
}
</style>
