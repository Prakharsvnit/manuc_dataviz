import chartData from "./data/WineData.json";

//calculate data from json file for scatter chart,bar chart to be displayed

const scatterData = chartData.map((obj) => {
  return {
    x: obj["Color intensity"],
    y: obj["Hue"],
  };
});

const scatterChartData = scatterData.map((obj) => Object.values(obj));

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

export { totalAverageArr, arrayofAlcohol, scatterChartData };
