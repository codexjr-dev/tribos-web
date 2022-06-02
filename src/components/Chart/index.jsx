import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import styles from "./styles.module.css";

const DataChart = ({ chartData }) => {
  const options = {
    responsive: true,
    fontStyle: "Inter",
    layout: {
      padding: 20,
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, _) {
            return window.innerWidth > 1000
              ? this.getLabelForValue(value)
              : this.getLabelForValue(value).slice(0, 3);
          },
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 200,
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 10,
      },
    },
  };

  return (
    <div className={styles.container}>
      <Line data={chartData} options={options} />
    </div>
  );
};
export default DataChart;
