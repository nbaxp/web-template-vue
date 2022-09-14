<template>
  <div class="between">
    <div class="between">
      <header-logo :has-aside="hasAside" />
      <div
        v-if="hasAside"
        class="center"
      >
        <el-icon
          :size="18"
          class="cursor-pointer"
          @click="toggleMenu"
        >
          <i-ep-expand v-if="appStore.menuCollapse" />
          <i-ep-fold v-else />
        </el-icon>
      </div>
      <el-menu
        mode="horizontal"
        :default-active="$route.matched[0].path"
        :ellipsis="false"
        router
      >
        <template v-for="route in $router.options.routes">
          <el-menu-item
            v-if="!route.meta?.hide"
            :key="route.path"
            :index="route.path"
          >
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
      <el-space>
        <template v-if="userStore.token">
          <el-dropdown class="cursor-pointer">
            <el-space>
              <el-icon :size="18"
                ><img
                  :src="userStore.avatar"
                  class="h-full"
              /></el-icon>
              <span>{{ userStore.name }}</span>
              <el-icon>
                <i-ep-arrow-down />
              </el-icon>
            </el-space>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link to="/account">
                    <el-icon> <i-ep-user /> </el-icon>个人中心
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item
                  divided
                  @click="confirmLogout"
                >
                  <el-icon> <i-ep-switch-button /> </el-icon>退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown
            v-if="appStore.roleSwitchable && userStore.currentRole"
            class="cursor-pointer"
            @command="onRoleChange"
          >
            <el-space>
              <span>{{ userStore.roles.find((o) => o.number === userStore.currentRole)?.name }}</span>
              <el-icon>
                <i-ep-arrow-down />
              </el-icon>
            </el-space>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in userStore.roles"
                  :key="item.number"
                  :command="item.number"
                  >{{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <template v-else>
          <el-space :size="20">
            <el-link type="info">
              <router-link
                class="router-link"
                :to="{ path: '/login', query: { redirect: $route.fullPath } }"
              >
                登录
              </router-link>
            </el-link>
            <el-link type="info">
              <router-link
                class="router-link"
                to="/register"
                >注册</router-link
              >
            </el-link>
          </el-space>
        </template>
        <el-icon
          :size="18"
          class="cursor-pointer"
          @click="setting.toggle()"
        >
          <i-ep-setting />
        </el-icon>
      </el-space>
    </div>
  </div>
  <el-drawer
    v-model="setting.show"
    title="页面配置"
    append-to-body
    destroy-on-close
    size="auto"
  >
    <header-settings />
  </el-drawer>
</template>

<script setup>
import 'element-plus/dist/index.css';

import { ElMessage, ElMessageBox } from 'element-plus';

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
    this.show = !this.show;
  },
});

const appStore = useAppStore();
const userStore = useUserStore();
const currentRoute = useRoute();
const router = useRouter();

const toggleMenu = () => (appStore.menuCollapse = !appStore.menuCollapse);
const onRoleChange = (command) => {
  userStore.currentRole = command;
  if (currentRoute.meta?.requiresAuth && !userStore.hasPermission(currentRoute.meta?.permission)) {
    router.push('/403');
  }
};

const confirmLogout = async () => {
  try {
    await ElMessageBox.confirm('确认退出？', '提示', { type: 'warning' });
    await userStore.logout();
    ElMessage({
      type: 'success',
      message: '退出成功',
    });
    router.push('/login');
  } catch (error) {
    console.log(error);
    ElMessage({
      type: 'info',
      message: '退出取消',
    });
  }
};
</script>
