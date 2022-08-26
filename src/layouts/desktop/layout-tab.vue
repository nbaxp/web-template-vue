<template>
  <el-tabs v-model="model" type="border-card" class="router-tab" @tab-remove="remove" @tab-click="onClick">
    <el-tab-pane
      v-for="(item, index) in routerStore.routes"
      :key="item.fullPath"
      v-model="item.fullPath"
      :name="item.fullPath"
      :closable="routerStore.routes.length > 1"
    >
      <template #label>
        <el-dropdown
          :ref="(el) => setRef(index, el)"
          class="h-full"
          trigger="contextmenu"
          @visible-change="showContextMenu(index, $event)"
        >
          <span class="inline-flex items-center">
            <svg-icon v-if="item.meta.icon" :name="item.meta.icon" />
            {{ item.meta?.title ?? item.fullPath }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="refresh(index)"><i-ep-refresh />刷新</el-dropdown-item>
              <el-dropdown-item :disabled="index === 0" @click="removeLeft(index)">
                <i-ep-back />关闭左侧
              </el-dropdown-item>
              <el-dropdown-item :disabled="index === routerStore.routes.length - 1" @click="removeRight(index)">
                <i-ep-right />关闭右侧
              </el-dropdown-item>
              <el-dropdown-item
                :disabled="index === 0 && index === routerStore.routes.length - 1"
                @click="removeOthers(index)"
              >
                <i-ep-switch />关闭其他
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { nextTick } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';

import SvgIcon from '~/components/svg-icon.vue';
import { useRouterStore } from '~/store';

const itemRefs = ref([]);
const routerStore = useRouterStore();
const currentRoute = useRoute();
const router = useRouter();
const model = ref(currentRoute.fullPath);

onBeforeRouteUpdate((to) => {
  model.value = to.fullPath;
});

const setRef = (index, el) => {
  if (el) {
    itemRefs.value[index] = el;
  } else {
    itemRefs.value.splice(index, 1);
  }
};
const showContextMenu = (index, show) => {
  if (show) {
    itemRefs.value.forEach((item, i) => {
      if (i !== index) {
        item?.handleClose();
      }
    });
  }
};

const refresh = (index) => {
  const currentIndex = routerStore.routes.findIndex((o) => o.fullPath === currentRoute.fullPath);
  if (index !== currentIndex) {
    const route = routerStore.routes[index];
    if (route.meta.cached) {
      routerStore.excludes = [route.fullPath];
    }
    router.push({ path: route.fullPath });
  } else {
    routerStore.isRefreshing = true;
    nextTick(() => {
      routerStore.isRefreshing = false;
    });
  }
};

const remove = (name) => {
  if (routerStore.routes.length > 1) {
    const index = routerStore.routes.findIndex((o) => o.fullPath === name);
    const currentIndex = routerStore.routes.findIndex((o) => o.fullPath === currentRoute.fullPath);
    routerStore.routes.splice(index, 1);
    if (index === currentIndex) {
      if (routerStore.routes[index]) {
        router.push(routerStore.routes[index]);
      } else {
        router.push(routerStore.routes[index - 1]);
      }
    }
  }
};

const removeLeft = (index) => {
  const currentIndex = routerStore.routes.findIndex((o) => o.fullPath === currentRoute.fullPath);
  const route = routerStore.routes[index];
  routerStore.routes.splice(0, index);
  if (currentIndex < index) {
    router.push(route);
  }
};

const removeRight = (index) => {
  const currentIndex = routerStore.routes.findIndex((o) => o.fullPath === currentRoute.fullPath);
  routerStore.routes.splice(index + 1, routerStore.routes.length - index);
  if (currentIndex > index) {
    router.push(routerStore.routes[index]);
  }
};

const removeOthers = (index) => {
  removeRight(index);
  removeLeft(index);
  if (routerStore.routes[0].fullPath !== currentRoute.fullPath) {
    router.push(routerStore.routes[0]);
  }
};

const onClick = (context) => {
  if (!context.active) {
    const route = routerStore.routes.find((o) => o.fullPath === context.props.name);
    router.push(route);
  }
};
</script>
