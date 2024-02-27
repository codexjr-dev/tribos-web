import { useEffect, useState } from "react";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";

import InfoCard from "../../components/InfoCard";
import { mapLabelToValueType } from "../../util/utils";

import styles from "./styles.module.css";
import { formatInfo } from "../../util/utils";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DataChart from "../../components/Chart";

import { getNewStatistics, getStatistics } from "../../data/Data";
import { MapIconToLabel } from "../../util/utils";
import { getAmountStatistics, getCountByMonth } from "../../services/api";
import { useLocation } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dates = queryParams.get("date");

  const [statistics, setStatistics] = useState([]);
  const [amountStatistics, setAmount] = useState(0);
  const [newStats, setNewStats] = useState(0);
  const [monthStatistics, setMonthStatistics] = useState([]);

  useEffect(() => {
    async function loadData() {
      setStatistics(await getStatistics(params.interval, params.type));
      setAmount(await getAmountStatistics(params.type));
      setNewStats(await getNewStatistics(params.interval, params.type));
      setMonthStatistics(await getCountByMonth(params.type));
    }

    loadData();
  }, [params.interval, params.type]);

  const [chartData, setChartData] = useState(statistics);

  return (
    <div className={styles.container}>
      <header>
        <div
          onClick={() =>
            navigate(
              `/dashboard/${params.type}/${params.interval}?date=${dates}`
            )
          }
        >
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
            data={chartData}
            selected={mapLabelToValueType(params.type)}
          />
        </div>
        <div className={styles.detailsContainer}>
          <button
            style={{ border: "none" }}
            onClick={() => {
              setChartData(statistics);
            }}
          >
            <InfoCard
              title={`${
                params.type === "users" ? "Novos" : "Novas"
              } ${mapLabelToValueType(params.type)}`}
              iconSrc={MapIconToLabel(params.type, "gain")}
              data={newStats}
            />
          </button>
          <button
            style={{ border: "none" }}
            onClick={() => {
              setChartData(monthStatistics);
            }}
          >
            <InfoCard
              title={`Total ${mapLabelToValueType(params.type)}`}
              iconSrc={MapIconToLabel(params.type, "total")}
              data={amountStatistics}
            />
          </button>
        </div>
      </main>
    </div>
  );
};
export default Details;
