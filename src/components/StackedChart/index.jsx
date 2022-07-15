import styles from "./styles.module.css";

import { Bar } from "react-chartjs-2";

export const StackedChart = ({ chartData }) => {
  // const options = {
  //   indexAxis: "y",
  //   scales: {
  //     x: {
  //       stacked: true,
  //       suggestedMax: 100,
  //     },
  //     y: {
  //       ticks: {
  //         min: 0,
  //         max: 100,
  //       },
  //       stacked: true,
  //     },
  //   },
  //   elements: {
  //     bar: {
  //       borderWidth: 2,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       position: "bottom",
  //     },
  //   },
  //   responsive: true,
  //   fontStyle: "Inter",
  //   layout: {
  //     padding: 20,
  //   },
  // };

  const options = {
    responsive: true,
    indexAxis: "y",
    fontStyle: "Inter",
    layout: {
      padding: 20,
    },
    scales: {
      x: {
        ticks: {
          display: false,
          max: 100,
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        ticks: {
          display: false,
          max: 100,
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "top"
      },
      tooltip: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.container}>
      <Bar options={options} data={chartData} />
    </div>
  );
};
