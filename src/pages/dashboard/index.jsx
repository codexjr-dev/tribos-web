import { useState, useEffect } from "react";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

import logo from "../../assets/images/logo-pequeno.svg";

import styles from "./styles.module.css";
import Select from "../../components/Select";

import moneyIcon from "../../assets/icons/money-icon.svg";

import { getStatistics } from "../../data/Data";
import { useNavigate } from "react-router-dom";

import { typeOptions, intervalOptions } from "../../util/options";
import { mapLabelToValueType } from "../../util/utils";
import { NavigateButton } from "../../components/NavigateButton";
import { globalMessage } from "../../services/api";
import { ButtonChain } from "../../components/ButtonChain"
import { intervalLabels } from "../../util/options";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState("users");
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [statistics, setStatistics] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value === '') return;
    globalMessage(value);
    setValue('');
};



  const navigate = useNavigate();

  const handleCheckDetails = () => {
    navigate(`/details/${selectedType}/${selectedInterval}`);
  };

  useEffect(() => {
    async function loadData() {
      let selected = (selectedInterval === 0) ? "day" : (selectedInterval === 1) ? "month" : "week";
      const newStatistics = await getStatistics(selected, selectedType);
      console.log("New Statistics:", newStatistics);  // Verificação de dados
      setStatistics(newStatistics);
    }

    loadData();
  }, [selectedInterval, selectedType, setStatistics]); 

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
              className={styles.test}
            />
            <ButtonChain labels={intervalLabels} searchDates selected={setSelectedInterval}></ButtonChain>
          </div>
          <DataChart
            key={selectedType}  // Forçar re-render
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
          <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Mensagem global"

      style = {{marginBottom:20, borderRadius:10}}
    />
                <button onClick={handleSubmit}>Enviar</button>

        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
