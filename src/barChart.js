import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./css/charts.module.css";
import { totalAverageArr, arrayofAlcohol } from "./displayData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    x: {
      title: {
        display: true,
        align: "end",
        text: "Alcohol",
      },
    },
    y: {
      title: {
        display: true,
        align: "end",
        text: "Malic Acid",
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Bar Chart",
    },
    legend: {
      display: true,
      labels: {
        color: "#2DCDDF",
      },
    },
  },
};

const labels = arrayofAlcohol;

const data = {
  labels,
  datasets: [
    {
      label: "Wine Data",
      data: totalAverageArr,
      backgroundColor: "#2DCDDF",
    },
  ],
};

const barChart = () => {
  return (
    <div className={styles.charts}>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default barChart;
