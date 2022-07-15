import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const DataChart = ({ data }) => {
  const [state, setState] = useState({
    labels: data.map(monthData => monthData.month),
    datasets: [
      {
        label: `Quantidade de usuários`,
        data: data.map(monthData => monthData.stats),
        backgroundColor: ["#9142C5"],
        tension: 0.4,
        fill: false,
        borderColor: "#C48EF4",
        radius: 6,
      },
    ],
  });

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

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <Line data={state} options={options} />
    </div>
  );
};
export default DataChart;
