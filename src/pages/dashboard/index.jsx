import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo-pequeno.svg";
import moneyIcon from "../../assets/icons/money-icon.svg";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";
import Select from "../../components/Select";
import { NavigateButton } from "../../components/NavigateButton";

import { getStatistics } from "../../data/Data";
import { typeOptions, intervalOptions } from "../../util/options";
import { mapLabelToValueType } from "../../util/aux";

import styles from "./styles.module.css";

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
      setStatistics(await getStatistics(selectedInterval, selectedType));
    }

    loadData();
  }, [selectedInterval, selectedType]);

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
          <DataChart
            data={statistics}
            selected={mapLabelToValueType(selectedType)}
          />
          <p onClick={handleCheckDetails}>Ver mais...</p>
        </div>
        <nav className={styles.asideContainer}>
          <div className={styles.paymentButtonContainer}>
            <h2>Controle Financeiro</h2>
            <NavigateButton
              name="Pagamentos"
              srcIcon={moneyIcon}
              navigateTo="payment"
            />
          </div>
          <ReportedProblems />
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
