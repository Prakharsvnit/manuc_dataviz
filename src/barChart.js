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
import { totalAverageArr, arrayofAlcohol } from "./displayData";
import styles from "./css/charts.module.css";

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
      <ReactEChartsCore
        echarts={echarts}
        style={{ width: "100%", height: "100%" }}
        option={option}
      />
    </div>
  );
};

export default barChart;
