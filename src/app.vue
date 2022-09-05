<template>
  <template v-if="isMobile()">
    <van-config-provider :theme="isDark ? 'dark' : 'light'">
      <router-view />
    </van-config-provider>
  </template>
  <template v-else>
    <el-config-provider
      :size="size"
      :button="{ autoInsertSpace: true }"
      :locale="zhCn"
    >
      <router-view />
    </el-config-provider>
  </template>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

import { useAppStore } from './store';
import { isMobile } from './utils';

const appStore = useAppStore();

const size = computed(() => appStore.size);
const isDark = computed(() => appStore.isDark);

watchEffect(() => {
  const darkClass = 'dark';
  const toDark = () => document.documentElement.classList.add(darkClass);
  const toLight = () => document.documentElement.classList.remove(darkClass);
  const isDarkNow = useMediaQuery('(prefers-color-scheme: dark)');

  if (appStore.mode === 'auto') {
    isDarkNow.value ? toDark() : toLight();
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
