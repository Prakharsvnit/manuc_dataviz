import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { scatterChartData } from "./displayData";

echarts.use([
  ScatterChart,
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
  xAxis: [
    {
      name: "Color Intensity",
    },
  ],
  yAxis: [
    {
      name: "Hue",
    },
  ],
  series: [
    {
      symbolSize: 10,
      data: scatterChartData,
      type: "scatter",
    },
  ],
};

const scatterChart = () => {
  return (
    <>
      <ReactEChartsCore echarts={echarts} option={option} />
    </>
  );
};

export default scatterChart;
