<template>
  <div class="between">
    <div class="between">
      <header-logo />
      <div class="center">
        <el-icon class="cursor-pointer" @click="toggleMenu">
          <i-ep-fold v-if="appStore.menuCollapse" />
          <i-ep-expand v-else />
        </el-icon>
      </div>
      <el-menu mode="horizontal" :default-active="$route.matched[0].path" :ellipsis="false" router>
        <template v-for="route in $router.options.routes">
          <el-menu-item v-if="!route.meta?.hide" :key="route.path" :index="route.path">
            <template #title>
              <el-icon v-if="route.meta.icon">
                <svg-icon :name="route.meta.icon" />
              </el-icon>
              <span>{{ route.meta?.title ?? route.path }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="between">
      <el-icon :size="18" class="cursor-pointer" @click="setting.toggle">
        <i-ep-setting />
      </el-icon>
    </div>
  </div>
  <el-drawer v-model="setting.show" title="页面配置" append-to-body destroy-on-close size="auto">
    <header-settings />
  </el-drawer>
</template>

<script setup>
// import { ElMessage, ElMessageBox } from 'element-plus';
import SvgIcon from '~/components/svg-icon.vue';
import { useAppStore, useUserStore } from '~/store';

import HeaderLogo from './header-logo.vue';
import HeaderSettings from './header-settings.vue';

defineProps({
  hasAside: {
    type: Boolean,
    default: false,
  },
});

const setting = reactive({
  show: false,
  toggle() {
    setting.show = !setting.show;
  },
});

const appStore = useAppStore();
const toggleMenu = () => (appStore.menuCollapse = !appStore.menuCollapse);

// const userStore = useUserStore();

// const confirmLogout = async () => {
//   try {
//     await ElMessageBox.confirm('确认退出？', '提示', { type: 'warning' });
//     await userStore.logout();
//     ElMessage({
//       type: 'success',
//       message: '退出成功',
//     });
//   } catch (error) {
//     console.log(error);
//     ElMessage({
//       type: 'info',
//       message: '退出取消',
//     });
//   }
// };
</script>
