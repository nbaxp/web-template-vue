<template>
  <template v-for="route in items">
    <template v-if="!route.meta?.hide">
      <template v-if="route.children">
        <el-sub-menu
          v-if="showSubMenu(route)"
          :key="path + ':' + userStore.currentRole + ':' + route.path"
          :index="path + '/' + route.path"
        >
          <template #title>
            <template v-if="route.meta?.icon">
              <svg-icon :name="route.meta.icon" />
            </template>
            <span style="margin-right: 25px">{{ route.meta?.title ?? route.path }}</span>
          </template>
          <menu-item
            :path="path + '/' + route.path"
            :items="route.children"
          />
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item
          v-if="showMenuItem(route)"
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
</template>

<script setup>
import SvgIcon from '~/components/svg-icon.vue';
import { useUserStore } from '~/store';

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

const userStore = useUserStore();

const showMenuItem = (route) => {
  if (route.meta?.requiresAuth) {
    if (!userStore.token) {
      return false;
    }
    if (route.meta?.permission && !userStore.hasPermission(route.meta?.permission)) {
      return false;
    }
  }
  return true;
};

const showSubMenu = (route) => {
  return route.children.length && route.children.some((item) => showMenuItem(item));
};
</script>
