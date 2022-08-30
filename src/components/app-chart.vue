<template>
  <v-chart
    v-if="renderChart"
    :option="option"
    :autoresize="autoresize"
    :style="{ width, height }"
  />
</template>

<script setup>
import {
  BarChart,
  CandlestickChart,
  FunnelChart,
  LineChart,
  ParallelChart,
  PieChart,
  RadarChart,
  ScatterChart,
  TreemapChart,
} from 'echarts/charts';
import {
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

use([
  CanvasRenderer,
  BarChart,
  TreemapChart,
  ParallelChart,
  LineChart,
  PieChart,
  RadarChart,
  FunnelChart,
  ScatterChart,
  CandlestickChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
  ToolboxComponent,
  TitleComponent,
]);

defineProps({
  option: {
    type: Object,
    default() {
      return {};
    },
  },
  autoresize: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
});
const renderChart = ref(false);
nextTick(() => {
  renderChart.value = true;
});
</script>
