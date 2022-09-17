<template>
  <div class="flex justify-center items-center w-full h-full">
    <el-result
      icon="error"
      title="404"
      sub-title="未找到"
    >
      <template #extra>
        <router-link to="/"><el-button type="primary">返回首页</el-button></router-link>
      </template>
    </el-result>
  </div>
</template>
