# tabs 多标签页

1. 使用 keep-alive 组件缓存路由
1. 配置路由是否进行缓存，可以使用 route.meta.cached
1. 在路由守卫中保存访问过的路由记录，在界面中使用 tabs 控件展示多页标签
1. 使用 v-if="!isRefreshing" 的方式刷新当前路由
1. 刷新其他标签页路由时，先跳转后刷新
1. keep-alive 缓存的路由组件只会在初次调用 onMounted 和 onActivated，切换时只调用 onActivated

## 配置共享变量

启用标签页时，缓存路由组件，否则只缓存当前路由组件

```javascript
// ~/store/router.js
import { defineStore } from 'pinia';

export default defineStore('router', {
  state: () => {
    return {
      isRefreshing: false,
      routes: [],
    };
  },
  actions: {
    init() {
      console.log('router store init');
    },
    add(route) {
      if (!this.routes.find((o) => o.fullPath === route.fullPath)) {
        this.routes.push(route);
      } else {
        const index = this.routes.findIndex((o) => o.fullPath === route.fullPath);
        this.routes[index] = route;
      }
    },
  },
});
```

## 配置 keep-alive 组件

keep-alive 组件上写 v-if 会导致缓存无效

```vue
<template>
  <router-view
    v-if="!isRefreshing"
    v-slot="{ Component, route }"
  >
    <component
      :is="Component"
      v-if="!appStore.isUseTabsRouter || !route.meta?.cached"
    />
    <keep-alive>
      <component
        :is="Component"
        v-if="appStore.isUseTabsRouter && route.meta?.cached"
      />
    </keep-alive>
  </router-view>
</template>

<script setup>
import { useRouterStore } from '~/store';
const routerStore = useRouterStore();
const isRefreshing = computed(() => routerStore.isRefreshing);
</script>
```

## 定义 tabs 组件

使用 el-tabs 实现多标签页，使用 el-dropdown 的上下文菜单实现右键操作

```vue
<template>
  <el-tabs
    v-model="model"
    type="border-card"
    class="router-tab w-full sticky top-0"
    @tab-remove="remove"
    @tab-click="onClick"
  >
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
            <svg-icon
              v-if="item.meta.icon"
              :name="item.meta.icon"
            />
            {{ item.meta?.title ?? item.fullPath }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="refresh(index)"><i-ep-refresh />刷新</el-dropdown-item>
              <el-dropdown-item
                :disabled="index === 0"
                @click="removeLeft(index)"
              >
                <i-ep-back />关闭左侧
              </el-dropdown-item>
              <el-dropdown-item
                :disabled="index === routerStore.routes.length - 1"
                @click="removeRight(index)"
              >
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
  const route = routerStore.routes[index];
  if (index !== currentIndex) {
    router.push({ path: route.fullPath });
  }
  routerStore.isRefreshing = true;
  nextTick(() => {
    routerStore.isRefreshing = false;
  });
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
    router.push(context.props.name);
  }
};
</script>
```
