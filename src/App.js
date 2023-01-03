import BarChart from "./barChart";
import ScatterChart from "./scatterChart";
import styles from "./css/charts.module.css";

const App = () => {
  return (
    <div id="main">
      <div className={styles.charts}>
        <BarChart />
        <ScatterChart />
      </div>
    </div>
  );
};

export default App;
