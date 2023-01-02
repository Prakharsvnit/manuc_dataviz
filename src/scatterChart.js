import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { scatterChartData } from "./displayData";
import styles from "./css/charts.module.css";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    x: {
      title: {
        display: true,
        align: "end",
        text: "Color Intensity",
      },
    },
    y: {
      title: {
        display: true,
        align: "end",
        text: "Hue",
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Scatter Plot",
    },
    legend: {
      display: true,
      labels: {
        color: "#2DCDDF",
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: "Wine Data",
      data: scatterChartData,
      backgroundColor: "#2DCDDF",
    },
  ],
};

const scatterChart = () => {
  return (
    <div className={styles.charts}>
      <Scatter options={options} data={data} />;
    </div>
  );
};

export default scatterChart;
