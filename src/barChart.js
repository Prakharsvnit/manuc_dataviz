import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import styles from "./css/charts.module.css";
import { totalAverageArr, arrayofAlcohol } from "./displayData";

echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      name: "Alcohol",
      type: "category",
      data: arrayofAlcohol,
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Malic Acid",
    },
  ],
  series: [
    {
      name: "Malic Acid",
      type: "bar",
      barWidth: "60%",
      data: totalAverageArr,
    },
  ],
};

const barChart = () => {
  return (
    <div className={styles.charts}>
      <ReactEChartsCore echarts={echarts} option={option} />
    </div>
  );
};

export default barChart;
