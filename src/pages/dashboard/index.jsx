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
import { getDetailsByDate, getDetailsInfo, globalMessage } from "../../services/api";
import { ChainButton } from "../../components/ChainButton";
import { intervalLabels } from "../../util/options";
import { useLocation } from "react-router-dom";
import { setDate } from "date-fns";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState("users");
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [statistics, setStatistics] = useState([]);
  const [value, setValue] = useState("");
  const [dates, setDates] = useState([]);
  const params = useParams();

  // TO-DO REFATORAR ESSA PAGINA MAS POR ENQUANTO TA FUNCIONANDO


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get("date");

  const getFormatedDate = (date) => {
    setDates(date);
  };

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
    setSelectedType(type);
  };

  const handleCheckDetails = () => {
    let selected = intervalToCalendarWord(selectedInterval);

    
    const regex = /\d{2}\/\d{2}\/\d{4}-\d{2}\/\d{2}\/\d{4}/;
    if(selectedInterval == 3 && regex.test(dates)) navigate(`/details/${selectedType}/${selected}?date=${dates}`);
    else navigate(`/details/${selectedType}/${selected}?date=`)
  };
  
    function formatarData(dataString) {
      var dataOriginal = new Date(dataString);
  
   
      var dia = dataOriginal.getDate();
      var mes = dataOriginal.getMonth() + 1; 
      var ano = dataOriginal.getFullYear();
  

      dia = dia < 10 ? '0' + dia : dia;
      mes = mes < 10 ? '0' + mes : mes;
  

      var dataFormatada = dia + '-' + mes + '-' + ano;
  
      // Retornar a data formatada
      return dataFormatada;
  }

  function criarDataValida(dataString) {
    // Separando a string de data em partes
    var partes = dataString.split("/");
    
    // Obtendo o ano, mês e dia
    var ano = parseInt(partes[2], 10);
    var mes = parseInt(partes[1], 10) - 1; // O mês é base 0, então subtrai 1
    var dia = parseInt(partes[0], 10);
    
    // Criando o objeto Date
    var data = new Date(ano, mes, dia);
    
    // Verificando se a data criada é válida
    if (data.getFullYear() === ano && data.getMonth() === mes && data.getDate() === dia) {
        return data;
    } else {
        return null; // Retornar null se a data não for válida
    }
}
  
  const searchBetweenDates = async (dates) => {

    if (dates[0] && dates[0] instanceof Date){
      const newStatistics = await getDetailsByDate(selectedType, formatarData(dates[0]), formatarData(dates[1]));
      setStatistics(newStatistics.data);
    }else{
      var data1 = date.split("-")[0]
      var data2 = date.split("-")[1]
      const initialDate = criarDataValida(data1)
      const endDate =  criarDataValida(data2)
      const newStatistics = await getDetailsByDate(selectedType, formatarData(initialDate), formatarData(endDate));
      setStatistics(newStatistics.data);
    }

  };


  useEffect(() => {
    async function loadData() {
      if (selectedInterval < intervalLabels.length) {
        if (params.interval && params.selectedType) {
          const newStatistics = await getDetailsInfo(
            params.interval,
            params.selectedType
          );
          let interval = intervalWordToCalendar(params.interval);
          setSelectedInterval(interval);
          setSelectedType(params.selectedType);
          setStatistics(newStatistics.data);
        } else {
          let selected = intervalToCalendarWord(selectedInterval);
          const newStatistics = await getDetailsInfo(selected, selectedType);
          setStatistics(newStatistics.data);
        }
      }
    }
    if(date){
      searchBetweenDates(date)
    }else{
      loadData();
    }
  }, [
    selectedInterval,
    params?.interval,
    selectedType,
    params.selectedType,
    setStatistics,
  ]);

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
            <ChainButton
              labels={intervalLabels}
              searchDates
              selected={handleInterval}
              searchFinanceByDate={searchBetweenDates}
              intervalIndex={intervalWordToCalendar(params.interval)}
              formatedDates={getFormatedDate}
              dateText={date}
            ></ChainButton>
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
          <ReportedProblems
            navigateTo={"manageUsers"}
            title={"Gerenciar Usúarios"}
            navigateName={"Banir e enviar mensagens"}
          />
          <div className={styles.paymentButtonContainer}>
            <h2>Gerenciar Usúario</h2>
            <NavigateButton
              name="Alterar senha"
              srcIcon={logo}
              navigateTo="tribos/change"
            />
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
