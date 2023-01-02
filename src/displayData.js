import chartData from "./WineData.json";

//calculate data from json file for scatter chart to be displayed

export const scatterChartData = chartData.map((obj) => {
  return {
    x: obj["Color intensity"],
    y: obj["Hue"],
  };
});
