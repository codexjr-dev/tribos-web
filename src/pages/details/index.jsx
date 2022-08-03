import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";

import InfoCard from "../../components/InfoCard";
import DataChart from "../../components/Chart";

import { getNewStatistics, getStatistics } from "../../data/Data";
import { MapIconToLabel } from "../../util/aux";
import { mapLabelToValueType } from "../../util/aux";

import { getAmountStatistics } from "../../services/api";

import styles from "./styles.module.css";

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
      setNewStats(await getNewStatistics(params.interval, params.type));
    }

    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <div onClick={() => navigate("/dashboard")}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2>
            {`${mapLabelToValueType(params.type)} - ${mapLabelToValueType(
              params.interval
            )}`}
          </h2>
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
            title={`${
              params.type === "users" ? "Novos" : "Novas"
            } ${mapLabelToValueType(params.type)}`}
            iconSrc={MapIconToLabel(params.type, "gain")}
            data={newStats}
          />
          <InfoCard
            title={`Total ${mapLabelToValueType(params.type)}`}
            iconSrc={MapIconToLabel(params.type, "total")}
            data={amountStatistics}
          />
        </div>
      </main>
    </div>
  );
};
export default Details;
