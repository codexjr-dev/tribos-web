import { useState, useEffect } from "react";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

import logo from "../../assets/images/logo-pequeno.svg";

import styles from "./styles.module.css";
import Select from "../../components/Select";

import { ChartData, getLastSixMonthStatistics } from "../../data/Data";
import { useNavigate } from "react-router-dom";

import { typeOptions, intervalOptions } from "../../util/options";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState("users");
  const [selectedInterval, setSelectedInterval] = useState("month");

  const [statistics, setStatistics] = useState([]);

  const navigate = useNavigate();

  const handleCheckDetails = () => {
    navigate(`/details/${selectedType}/${selectedInterval}`);
  };

  useEffect(() => {
    async function loadData() {
      setStatistics(await getLastSixMonthStatistics(selectedType));
    }

    loadData();
  }, [selectedType, selectedInterval]);

  return (
    <div className={styles.container}>
      <header className={styles.logoContainer}>
        <img src={logo} alt="Logo Tribos" />
      </header>
      <main className={styles.infoContainer}>
        <div className={styles.chartContainer}>
          <div className={styles.chartSelect}>
            <Select
              fieldName="type"
              optionsList={typeOptions}
              setValue={setSelectedType}
              value={selectedType}
            />
            <Select
              fieldName="interval"
              optionsList={intervalOptions}
              setValue={setSelectedInterval}
              value={selectedInterval}
            />
          </div>
          <button onClick={() => console.log(statistics)}>Requisição</button>
          {statistics.length === 0 ? <span>Carregando</span> : <DataChart data={statistics} />}
          <p onClick={handleCheckDetails}>Ver mais...</p>
        </div>
        <nav className={styles.reportedProblemsContainer}>
          <ReportedProblems />
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
