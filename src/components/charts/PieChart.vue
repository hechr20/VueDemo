<template>
  <v-chart :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  props: {
    option: {
    }
  }
};
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>