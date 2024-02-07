import { useState, useEffect } from "react";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

import logo from "../../assets/images/logo-pequeno.svg";

import styles from "./styles.module.css";
import Select from "../../components/Select";

import moneyIcon from "../../assets/icons/money-icon.svg";

import { getStatistics, getStatisticsByDateRange } from "../../data/Data";
import { useNavigate, useParams } from "react-router-dom";

import { typeOptions, intervalOptions } from "../../util/options";
import { mapLabelToValueType } from "../../util/utils";
import { NavigateButton } from "../../components/NavigateButton";
import { globalMessage } from "../../services/api";
import { ButtonChain } from "../../components/ButtonChain";
import { intervalLabels } from "../../util/options";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState("users");
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [statistics, setStatistics] = useState([]);
  const [value, setValue] = useState("");
  const [dates, setDates] = useState([]);
  const params = useParams();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value === "") return;
    globalMessage(value);
    setValue("");
  };

  const intervalToCalendarWord = (interval) =>
    interval === 0 ? "day" : interval === 1 ? "month" : "week";

  const intervalWordToCalendar = (interval) =>
    interval === "day" ? 0 : interval === "month" ? 1 : 2;

  const navigate = useNavigate();

  const handleInterval = (interval) => {
    let selected = intervalToCalendarWord(interval);

    navigate(`/dashboard/${selectedType}/${selected}`);
    setSelectedInterval(interval);
  };

  const handleSelectedType = (type) => {
    navigate(`/dashboard/${type}/${intervalToCalendarWord(selectedInterval)}`);
    setSelectedType(type)
  }

  const handleCheckDetails = () => {
    let selected = intervalToCalendarWord(selectedInterval);

    navigate(`/details/${selectedType}/${selected}`);
  };

  const searchBetweenDates = async (dates) => {
    const newStatistics = await getStatisticsByDateRange(selectedType, dates);
    setStatistics(newStatistics);
  };

  useEffect(() => {
    async function loadData() {
      if (selectedInterval < intervalLabels.length) {
        if (params.interval && params.selectedType) {
          const newStatistics = await getStatistics(
            params.interval,
            params.selectedType
          );
          let interval = intervalWordToCalendar(params.interval);
          setSelectedInterval(interval);
          setSelectedType(params.selectedType)
          setStatistics(newStatistics);
        } else {
          let selected = intervalToCalendarWord(selectedInterval);
          const newStatistics = await getStatistics(selected, selectedType);
          setStatistics(newStatistics);
        }
      }
    }

    loadData();
  }, [selectedInterval, params?.interval, selectedType, params.selectedType, setStatistics]);

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
              setValue={handleSelectedType}
              value={selectedType}
              className={styles.test}
            />
            <ButtonChain
              labels={intervalLabels}
              searchDates
              selected={handleInterval}
              searchFinanceByDate={searchBetweenDates}
              intervalIndex={intervalWordToCalendar(params.interval)}
            ></ButtonChain>
          </div>
          <DataChart
            key={selectedType} // Forçar re-render
            data={statistics}
            selected={mapLabelToValueType(selectedType)}
          />
          <p onClick={handleCheckDetails}>Ver mais...</p>
        </div>
        <nav className={styles.asideContainer}>
          <div className={styles.paymentButtonContainer}>
            <h2>Tribos</h2>
            <NavigateButton name="Tribos" srcIcon={logo} navigateTo="tribos" />
          </div>
          <div className={styles.paymentButtonContainer}>
            <h2>Controle Financeiro</h2>
            <NavigateButton
              name="Pagamentos"
              srcIcon={moneyIcon}
              navigateTo="payment"
            />
          </div>
          <ReportedProblems />
          <ReportedProblems navigateTo={"manageUsers"} title={"Gerenciar Usúarios"} navigateName={"Banir e enviar mensagens"}/>
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
