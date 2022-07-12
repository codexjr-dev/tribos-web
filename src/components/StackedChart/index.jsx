import styles from './styles.module.css';

import { Bar } from 'react-chartjs-2';

export const StackedChart = ({ chartData }) => {
    
    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            // stacked: true,
          },
        },
      };
    
    return (
        <div className={styles.container}>
            <Bar options={options} data={chartData} />
        </div>
    )
}