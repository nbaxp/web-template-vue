<template>
  <el-form
    ref="formRef"
    :model="appStore"
    label-width="auto"
  >
    <el-form-item
      prop="appStore.mode"
      label="主题模式"
    >
      <el-select v-model="appStore.mode">
        <template #prefix>
          <el-icon>
            <component :is="themeOptions.find((o) => o.value === appStore.mode).icon" />
          </el-icon>
        </template>
        <template
          v-for="item in themeOptions"
          :key="item.value"
        >
          <el-option
            :value="item.value"
            :label="item.text"
          >
            <el-space>
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.text }}</span>
            </el-space>
          </el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item
      prop="appStore.themeColor"
      label="主题色"
    >
      <el-color-picker v-model="appStore.themeColor" />
    </el-form-item>
    <el-form-item
      prop="appStore.size"
      label="组件大小"
    >
      <el-select v-model="appStore.size">
        <template
          v-for="item in sizeOptions"
          :key="item.value"
        >
          <el-option
            :value="item.value"
            :label="item.text"
          >
            <span>{{ item.text }}</span>
          </el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item
      prop="appStore.locale"
      label="默认语言"
    >
      <el-select v-model="appStore.locale">
        <template
          v-for="item in localeOptions"
          :key="item.value"
        >
          <el-option
            :value="item.value"
            :label="item.text"
          >
            <span>{{ item.text }}</span>
          </el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item
      prop="appStore.showBreadcrumb"
      label="显示面包屑"
    >
      <el-switch v-model="appStore.showBreadcrumb" />
    </el-form-item>
    <el-form-item
      prop="appStore.isUseTabsRouter"
      label="多标签Tab页"
    >
      <el-switch v-model="appStore.isUseTabsRouter" />
    </el-form-item>
    <el-form-item
      prop="appStore.menuCollapse"
      label="折叠菜单"
    >
      <el-switch v-model="appStore.menuCollapse" />
    </el-form-item>
    <el-form-item
      prop="appStore.roleSwitchable"
      label="角色切换"
    >
      <el-switch v-model="appStore.roleSwitchable" />
    </el-form-item>
    <el-form-item
      prop="appStore.loglevel"
      label="日志级别"
    >
      <el-select v-model="appStore.loglevel">
        <template
          v-for="item in logOptions"
          :key="item.value"
        >
          <el-option
            :value="item.value"
            :label="item.text"
          >
            <span>{{ item.text }}</span>
          </el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item
      prop="appStore.useHttpMethodOverride"
      label="X-HTTP-Method-Override"
    >
      <el-switch v-model="appStore.useHttpMethodOverride" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm">恢复默认</el-button>
      <el-button
        type="primary"
        @click="copySettings"
        >复制配置</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
import 'element-plus/es/components/message/style/css';

import { ElMessage } from 'element-plus';

import log from '~/log';
import { useAppStore } from '~/store';
import Moon from '~icons/ep/moon';
import Platform from '~icons/ep/platform';
import Sunny from '~icons/ep/sunny';

const appStore = useAppStore();

const themeOptions = [
  { text: '跟随系统', value: 'auto', icon: Platform },
  { text: '亮色模式', value: 'light', icon: Sunny },
  { text: '暗色模式', value: 'dark', icon: Moon },
];

const sizeOptions = [
  { text: '默认', value: 'default' },
  { text: '小', value: 'small' },
  { text: '大', value: 'large' },
];

const localeOptions = [
  { text: '中文', value: 'zh' },
  { text: 'English', value: 'en' },
];

const logOptions = [
  { text: 'trace', value: 'trace' },
  { text: 'debug', value: 'debug' },
  { text: 'info', value: 'info' },
  { text: 'warn', value: 'warn' },
  { text: 'error', value: 'error' },
];

watch(appStore, (val) => {
  if (appStore.loglevel !== val) {
    log.setLevel(appStore.loglevel);
  }
});

const formRef = ref(null);
const resetForm = () => {
  formRef.value.resetFields();
  appStore.$reset();
};

const { copy } = useClipboard();
const copySettings = async () => {
  const text = JSON.stringify(appStore.$state, null, 2);
  await copy(text);
  ElMessage({
    message: 'config/settings.json',
    type: 'success',
  });
};
</script>
