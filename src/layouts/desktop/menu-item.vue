<template>
  <template v-for="route in items">
    <template v-if="!route.meta?.hide">
      <el-sub-menu v-if="showSubMenu(route)" :key="path + '/' + route.path" :index="path + '/' + route.path">
        <template #title>
          <template v-if="route.meta?.icon">
            <svg-icon :name="route.meta.icon" />
          </template>
          <span style="margin-right: 25px">{{ route.meta?.title ?? route.path }}</span>
        </template>
        <menu-item :path="path + '/' + route.path" :items="route.children" />
      </el-sub-menu>
      <el-menu-item
        v-else-if="showMenuItem(route)"
        :key="path + '/' + route.path + '#'"
        :index="path + '/' + route.path"
      >
        <template v-if="route.meta?.icon">
          <svg-icon :name="route.meta.icon" />
        </template>
        <template #title>
          <span>{{ route.meta?.title ?? route.path }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup>
import SvgIcon from '~/components/svg-icon.vue';
import { useUserStore } from '~/store';

const userStore = useUserStore();

const showMenuItem = (route) => {
  if (route.meta?.requiresAuth) {
    if (!userStore.token) {
      return false;
    }
    if (route.meta?.role && userStore.isInRole(route.meta?.role)) {
      return false;
    }
  }
  return true;
};

const showSubMenu = (route) => {
  return route.children?.length && route.children.some((item) => showMenuItem(item));
};

defineProps({
  path: {
    type: String,
    default: null,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
