import chartData from "./WineData.json";

export const scatterChartData = chartData.map((obj) => {
  return {
    x: obj["Color intensity"],
    y: obj["Hue"],
  };
});
