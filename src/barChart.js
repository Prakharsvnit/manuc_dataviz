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
    <>
      <ReactEChartsCore echarts={echarts} option={option} />
    </>
  );
};

export default barChart;
