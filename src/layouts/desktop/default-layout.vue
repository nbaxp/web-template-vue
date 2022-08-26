<template>
  <el-container class="default-layout h-full">
    <el-scrollbar>
      <el-header class="el-header">
        <div class="block-container">
          <layout-header />
        </div>
      </el-header>
      <el-main class="el-main w-full">
        <div class="block-container">
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <div class="block-container">
          <layout-footer />
        </div>
      </el-footer>
      <el-backtop target=".default-layout > .el-scrollbar > .el-scrollbar__wrap" />
    </el-scrollbar>
  </el-container>
</template>

<script setup>
import LayoutFooter from './layout-footer.vue';
import LayoutHeader from './layout-header.vue';
</script>

<style scoped>
.default-layout .el-header {
  padding: 0 calc((100% - 1200px) / 2);
}

.default-layout .el-main {
  padding-top: 60px;
}

.block-container {
  width: 1200px;
  height: 100%;
  margin: auto;
}
</style>
