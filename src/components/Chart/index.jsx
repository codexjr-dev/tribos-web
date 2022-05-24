import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import styles from "./styles.module.css";

const DataChart = ({ chartData }) => {
  const options = {
    responsive: true,
    layout: {
      padding: 20,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 200,
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
    },
  };

  return (
    <div className={styles.container}>
      <Line data={chartData} options={options} />
    </div>
  );
};
export default DataChart;

// export default function LineChart({ chartData, chartOptions }) {
//   return <Line data={chartData} options={chartOptions} />;
// }
