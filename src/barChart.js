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
import styles from "./charts.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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

const labels = [1, 2, 3];

const data = {
  labels,
  datasets: [
    {
      label: "Wine Data",
      data: [100, 20, 50],
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
