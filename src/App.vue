<template>
  <van-config-provider v-if="isMobile()" :theme="appStore.isDark ? 'dark' : 'light'" :size="appStore.size">
    <router-view />
  </van-config-provider>
  <el-config-provider v-else :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

import { useAppStore } from './store';
import { isMobile } from './utils';

const appStore = useAppStore();

const isDark = useMediaQuery('(prefers-color-scheme: dark)');

watchEffect(() => {
  const darkClass = 'dark';
  const toDark = () => document.documentElement.classList.add(darkClass);
  const toLight = () => document.documentElement.classList.remove(darkClass);

  if (appStore.mode === 'auto') {
    isDark.value ? toDark() : toLight();
  } else if (appStore.mode === 'dark') {
    toDark();
  } else if (appStore.mode === 'light') {
    toLight();
  }
});

watchEffect(() => {
  document.documentElement.style.setProperty('--el-color-primary', appStore.themeColor);
});
</script>
