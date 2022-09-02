<template>
  <template v-if="isMobile()">
    <van-config-provider :theme="isDark ? 'dark' : 'light'">
      <router-view />
    </van-config-provider>
  </template>
  <template v-else>
    <el-config-provider
      :size="size"
      :auto-insert-space="autoInsertSpace"
      :locale="zhCn"
    >
      <router-view />
    </el-config-provider>
  </template>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import log from 'loglevel';

import { useAppStore } from './store';
import { isMobile } from './utils';

const appStore = useAppStore();

const autoInsertSpace = ref(true);
const size = computed(() => appStore.size);
const isDark = computed(() => appStore.isDark);

watchEffect(() => {
  log.setLevel(appStore.loglevel);
  log.info('set log level');
});

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
