import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

import { Chart as ChartJS } from "chart.js/auto";

import styles from "./styles.module.css";

const DataChart = ({ data, selected }) => {
  const getStats = () => {
    let result = [];
    data.map((element) => {
      result.push(element.stats);
    });

    return result;
  };

  const [state, setState] = useState({
    labels: data.map(
      (monthData) =>
        monthData.label[0].toUpperCase() + monthData.label.substr(1)
    ),
    datasets: [
      {
        label: `Quantidade de ${selected}`,
        data: getStats(),
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
              : isNaN(this.getLabelForValue(value))
              ? this.getLabelForValue(value).slice(0, 3)
              : this.getLabelForValue(value);
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
          // autoSkip: true,
          stepSize: 5,
          beginAtZero: true,
          min: 0,
          type: "linear",
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
    getStats();
    setState({
      labels: data.map(
        (monthData) =>
          monthData.label[0].toUpperCase() + monthData.label.substr(1)
      ),
      datasets: [
        {
          label: `Quantidade de ${selected}`,
          data: getStats(),
          backgroundColor: ["#9142C5"],
          tension: 0.4,
          fill: false,
          borderColor: "#C48EF4",
          radius: 6,
        },
      ],
    });
  }, [data, selected]);

  return (
    <div className={styles.container}>
      <Line data={state} options={options} />
    </div>
  );
};
export default DataChart;
