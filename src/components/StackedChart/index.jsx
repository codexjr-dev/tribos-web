import styles from "./styles.module.css";

import { useEffect, useState } from "react";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar } from "react-chartjs-2";
import { getSum } from "../../util/utils";

export const StackedChart = ({ data }) => {
  const [state, setState] = useState({
    labels: ["Tipo"],
    datasets: [
      {
        label: "Imposto",
        data: [data[0].value],
        backgroundColor: ["#9F3AE0"],
      },
      {
        label: "Venda Cacique",
        data: [data[1].value],
        backgroundColor: ["#CC33B1"],
      },
      {
        label: "Venda Tribo Master",
        data: [data[2].value],
        backgroundColor: ["#3911AD"],
      },
    ],
  });

  const getStats = () => {
    let result = [];
    data.forEach((element) => {
      if (element) {
        result.push(element.value);
      }
    });
    return result;
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    fontStyle: "Inter",
    layout: {
      padding: 0,
    },
    scales: {
      x: {
        ticks: {
          display: false,
          max: getSum(getStats()),
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        stacked: true,
      },
      y: {
        ticks: {
          display: false,
          font: {
            size: 16,
            family: "Inter",
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        display: true,
        color: "#FFFFFF",
        anchor: "end",
        align: "start",
        offset: 10,
        formatter: function (value, context) {
          if(value == 0) return ""
          else return `R$ ${value}`;
        },
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 16,
            },
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <Bar options={options} plugins={[ChartDataLabels]} data={state} />
    </div>
  );
};
