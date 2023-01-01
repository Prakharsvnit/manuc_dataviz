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

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Scatter Plot",
    },
  },
};

const data = {
  datasets: [
    {
      label: "Wine Data",
      data: scatterChartData,
      backgroundColor: "#2196f3",
    },
  ],
};

const scatterChart = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Scatter options={options} data={data} />;
    </div>
  );
};

export default scatterChart;
