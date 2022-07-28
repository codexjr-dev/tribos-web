import { useEffect, useState } from "react";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";

import InfoCard from "../../components/InfoCard";
import { getSum, mapLabelToValueType } from "../../util/aux";

import styles from "./styles.module.css";
import { formatInfo } from "../../util/aux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DataChart from "../../components/Chart";

import { getStatistics } from "../../data/Data";
import { MapIconToLabel } from "./detailsData";
import { getAmountStatistics } from "../../services/api";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [statistics, setStatistics] = useState([]);
  const [amountStatistics, setAmount] = useState(0);
  const [newStats, setNewStats] = useState(0);

  useEffect(() => {
    async function loadData() {
      setStatistics(await getStatistics(params.interval, params.type));
      setAmount(await getAmountStatistics(params.type));
    }

    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <div onClick={() => navigate("/dashboard")}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> {`${mapLabelToValueType(params.type)} - ${mapLabelToValueType(params.interval)}`} </h2>
        </div>
      </header>
      <main>
        <div className={styles.chartContainer}>
          <DataChart
            data={statistics}
            selected={mapLabelToValueType(params.type)}
          />
        </div>
        <div className={styles.detailsContainer}>
          <InfoCard
            title={`${params.type === "users" ? "Novos" : "Novas"} ${mapLabelToValueType(params.type)}`}
            iconSrc={MapIconToLabel(params.type, "gain")}
            data={newStats}
          />
          <InfoCard
            title={`Total ${mapLabelToValueType(params.type)}`}
            iconSrc={MapIconToLabel(params.type, "total")}
            data={amountStatistics}
          />
          <InfoCard
            title={`${mapLabelToValueType(params.type)} ${params.type === "users" ? "perdidos" : "perdidas"}`}
            iconSrc={MapIconToLabel(params.type, "lost")}
            data={0}
          />
        </div>
      </main>
    </div>
  );
};
export default Details;
