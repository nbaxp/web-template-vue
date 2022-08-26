<template>
  <el-container class="h-full">
    <el-header>
      <layout-header />
    </el-header>
    <el-container class="body h-full">
      <el-aside width="auto">
        <el-scrollbar>
          <el-menu :collapse="appStore.menuCollapse" :default-active="$route.path" router>
            <menu-item :path="$route.matched[0].path" :items="$route.matched[0].children" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container class="main">
        <el-scrollbar>
          <layout-tab />
          <el-main class="el-main">
            <layout-breadcrumb v-if="appStore.showBreadcrumb" />
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" v-if="$route.meta.cached" :key="$route.fullPath" />
              </keep-alive>
              <component :is="Component" v-if="!$route.meta.cached" />
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
import { useAppStore } from '~/store';

import LayoutBreadcrumb from './layout-breadcrumb.vue';
import LayoutFooter from './layout-footer.vue';
import LayoutHeader from './layout-header.vue';
import LayoutTab from './layout-tab.vue';
import MenuItem from './menu-item.vue';

const appStore = useAppStore();
</script>

<style scoped>
.body {
  padding-top: 60px;
}
</style>
