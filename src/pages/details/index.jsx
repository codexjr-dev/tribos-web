import { useEffect, useState } from "react";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import logo from "../../assets/images/logo-pequeno.svg";

import InfoCard from "../../components/InfoCard";
import { mapLabelToValueType } from "../../util/utils";

import styles from "./styles.module.css";
import { formatInfo } from "../../util/utils";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DataChart from "../../components/Chart";

import { MapIconToLabel } from "../../util/utils";
import { getAmountStatistics, getCountByMonth, getDetailsInfo, getDetailsByDate } from "../../services/api";
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
      if(dates){
        let datesArr = dates.split("-")
        let { data } = await getDetailsByDate(params.type, datesArr[0].replace(/\//g, "-"), datesArr[1].replace(/\//g, "-"))
        setStatistics(data)
        setNewStats(data[data.length - 1].stats)
      }else{
        let { data }  = await getDetailsInfo(params.interval, params.type)
        setStatistics(data);
        setNewStats(data[data.length - 1].stats)
      }
      setAmount(await getAmountStatistics(params.type)); // PEGA TOTAL
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
            {dates ?  `${mapLabelToValueType(params.type)} - ${dates}`  : `${mapLabelToValueType(params.type)} - ${mapLabelToValueType(
              params.interval
            )}`}
          </h2>
        </div>
        <img 
          src={logo} 
          alt="Logo"
          onClick={() => navigate("/dashboard/users/day")}
          style={{cursor: 'pointer', width: '112px'}}
        />
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
