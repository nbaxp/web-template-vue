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
        <span>Button 封装（loading）</span>
      </div>
    </template>
    <app-button
      type="primary"
      @click="onClick1"
      >emit + callback 实现方式</app-button
    >
    <app-button
      ref="buttonRef"
      type="primary"
      @click="onClick2"
      >ref + expose 实现方式</app-button
    >
  </el-card>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>CKEditor 5 封装（upload）</span>
      </div>
    </template>
    <app-editor
      v-model="editorModel"
      upload-url="upload"
    />
  </el-card>
  <el-card class="m-2">
    <template #header>
      <div class="card-header">
        <span>vue-echarts 封装</span>
      </div>
    </template>
    <app-chart :option="echartOptions" />
  </el-card>
</template>
<script setup>
import AppChart from '~/components/app-chart.vue';
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
const echartOptions = {
  title: {
    text: '基础折线图',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};
//
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
