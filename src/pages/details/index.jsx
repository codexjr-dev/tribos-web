import { useEffect, useState } from "react";

import { ChartData } from "../../data/Data";

import DataChart from "../../components/Chart";

import UserGainIcon from "../../assets/icons/user-gain-icon.svg";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";

import InfoCard from "../../components/InfoCard";

import styles from "./styles.module.css";
import { formatInfo, getMax, getSum } from "../../util/aux";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  const [data, setData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "Usuários ganhos",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: ["#9142C5"],
        tension: 0.4,
        fill: false,
        borderColor: "#C48EF4",
        radius: 6,
      },
    ],
  });

  useEffect(() => {
    console.log(params.type);
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Usuários - Mês </h2>
        </div>
      </header>
      <main>
        <div className={styles.chartContainer}>
          <DataChart chartData={data} />
        </div>
        <div className={styles.detailsContainer}>
          <InfoCard
            title="Usuários perdidos"
            iconSrc={UserGainIcon}
            data={formatInfo(getMax(data.datasets[0].data))}
          />
          <InfoCard
            title="Total usuários"
            iconSrc={UserGainIcon}
            data={formatInfo(getSum(data.datasets[0].data))}
          />
          <InfoCard
            title="Novos usuários"
            iconSrc={UserGainIcon}
            data={`500`}
          />
        </div>
      </main>
    </div>
  );
};
export default Details;
