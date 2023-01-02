import chartData from "./WineData.json";

//calculate data from json file for scatter chart,bar chart to be displayed

export const scatterChartData = chartData.map((obj) => {
  return {
    x: obj["Color intensity"],
    y: obj["Hue"],
  };
});

const arrayofAlcohol = [];
let totalMalicAcidObj = {};

chartData.forEach((item) => {
  if (!arrayofAlcohol.includes(item.Alcohol)) {
    arrayofAlcohol.push(item.Alcohol);
    totalMalicAcidObj = {
      ...totalMalicAcidObj,
      [item.Alcohol]: { total: item["Malic Acid"], length: 1 },
    };
  } else {
    totalMalicAcidObj = {
      ...totalMalicAcidObj,
      [item.Alcohol]: {
        total: totalMalicAcidObj[item.Alcohol].total + item["Malic Acid"],
        length: totalMalicAcidObj[item.Alcohol].length + 1,
      },
    };
  }
});

const totalAverageArr = [];

Object.values(totalMalicAcidObj).forEach((item) => {
  let average = item.total / item.length;
  totalAverageArr.push(average);
});

export { totalAverageArr, arrayofAlcohol };
