<template>
  <el-row>
    <el-col>
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
        class="mt-2"
      >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
        >
          <h3
            text="2xl"
            justify="center"
          >
            {{ item }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>自定义 Button 按钮</span>
      </div>
    </template>
    <app-button
      type="primary"
      @click="onClick1"
      >emit callback</app-button
    >
    <app-button
      ref="buttonRef"
      type="primary"
      @click="onClick2"
      >ref expose</app-button
    >
  </el-card>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>CKEditor 5</span>
      </div>
    </template>
    <app-editor
      v-model="editorModel"
      upload-url="http://localhost:8011/file/upload"
    />
    <div>{{ editorModel }}</div>
  </el-card>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>组件封装</span>
      </div>
    </template>
    <app-demo v-model="customModel" />
    <div>{{ customModel }}</div>
  </el-card>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>测试</span>
      </div>
    </template>
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      label-width="120px"
    >
      <el-form-item
        prop="test"
        label="test"
      >
        <app-demo
          v-model="formModel.test"
          type="datetime"
        /><el-tag>formModel.test:{{ formModel }}</el-tag>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="() => formRef.validate()"
          >Create</el-button
        >
        <el-button @click="() => formRef.resetFields()">Reset</el-button></el-form-item
      >
    </el-form>
    <div>{{ customModel }}</div>
  </el-card>
</template>
<script setup>
import AppDemo from '~/components/app-demo.vue';
import AppEditor from '~/components/app-editor.vue';
import { sleep } from '~/utils';

const buttonRef = ref(null);
const onClick1 = async (callback) => {
  await sleep(5);
  callback();
};
const onClick2 = async () => {
  await sleep(5);
  buttonRef.value.enable();
};
//
const editorModel = ref('');
//
const customModel = ref(null);
//
const formRef = ref(null);
const formModel = reactive({
  test: null,
});
const formRules = {
  test: [{ required: true, message: '必填项', trigger: 'change' }],
};
</script>
<style scoped>
.el-carousel__item h3 {
  margin: 0;
  color: #475669;
  line-height: 200px;
  text-align: center;
  opacity: 0.75;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
