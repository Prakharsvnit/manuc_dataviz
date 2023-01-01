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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Wine Data",
      data: [100, 20, 50, 40, 60, 80, 30],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const barChart = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default barChart;
