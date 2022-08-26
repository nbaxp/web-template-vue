<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
      <router-link :to="item.path">{{ item.meta?.title }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
