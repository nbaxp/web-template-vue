<template>
  <el-breadcrumb class="mb-3">
    <el-breadcrumb-item
      v-for="item in $route.matched"
      :key="item.path"
    >
      <router-link :to="item.path">
        <div class="center">
          <svg-icon
            v-if="item.meta?.icon"
            :name="item.meta.icon"
          />
          <span>{{ item.meta?.title }}</span>
        </div>
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import SvgIcon from '~/components/svg-icon.vue';
</script>
