<template>
  <el-container class="h-full">
    <el-header>
      <layout-header has-aside />
    </el-header>
    <el-container class="body h-full">
      <el-aside width="auto">
        <el-scrollbar>
          <el-menu
            :collapse="appStore.menuCollapse"
            :default-active="$route.path"
            router
          >
            <menu-item
              :path="path"
              :items="items"
            />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container class="main">
        <el-scrollbar>
          <layout-tabs v-if="appStore.isUseTabsRouter" />
          <el-main
            class="el-main"
            :class="{ tabs: appStore.isUseTabsRouter }"
          >
            <layout-breadcrumb v-if="appStore.showBreadcrumb" />
            <router-view
              v-if="!isRefreshing"
              v-slot="{ Component, route }"
            >
              <component
                :is="Component"
                v-if="!appStore.isUseTabsRouter || !route.meta?.cached"
                :key="route.fullPath"
              />
              <keep-alive>
                <component
                  :is="Component"
                  v-if="appStore.isUseTabsRouter && route.meta?.cached"
                  :key="route.fullPath"
                />
              </keep-alive>
            </router-view>
          </el-main>
          <el-footer>
            <layout-footer />
          </el-footer>
          <el-backtop target=".main > .el-scrollbar > .el-scrollbar__wrap" />
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import { useAppStore, useRouterStore } from '~/store';

import LayoutBreadcrumb from './layout-breadcrumb.vue';
import LayoutFooter from './layout-footer.vue';
import LayoutHeader from './layout-header.vue';
import LayoutTabs from './layout-tabs.vue';
import MenuItem from './menu-item.vue';

const appStore = useAppStore();
const routerStore = useRouterStore();

const isRefreshing = computed(() => routerStore.isRefreshing);
const path = computed(() => useRoute().matched[0].path);
const items = computed(() => useRoute().matched[0].children);
</script>

<style scoped>
.body {
  padding-top: 60px;
}
</style>
