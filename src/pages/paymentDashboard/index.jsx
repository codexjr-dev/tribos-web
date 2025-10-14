import { useEffect, useState, useCallback } from "react";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import ConfigIcon from "../../assets/icons/config-icon.svg";
import { generalFinances } from "../../data/Data";
import { ButtonChain } from "../../components/ButtonChain";
import { StackedChart } from "../../components/StackedChart";
import * as api from "../../services/api";
import Loading from "../../components/Loading";
import { PaymentDetails } from "../../components/PaymentDetails";
import { typeLabels, intervalLabels } from "../../util/options";
import { useNavigate } from "react-router-dom";
import { PaymentList } from "../../components/PaymentList";
import styles from "./styles.module.css";
import { mapIntervalOptionToList } from "../../data/Data";
import logo from "../../assets/images/logo-pequeno.svg";

export const PaymentDashboard = () => {
  console.log('PaymentDashboard renderizado');

  const [showDetailsActive, setShowDetailsActive] = useState(false);
  const [triboDetails, setTriboDetails] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [financeChart, setFinanceChart] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [announcements, setAnnouncements] = useState([])
  const [dates, setDates] = useState(null)
  const [error, setError] = useState(null)

  const handleShowDetails = (element) => {
    setShowDetailsActive(!showDetailsActive);
    setTriboDetails(element);
  };

  const navigate = useNavigate();

  const close = () => {
    if (showDetailsActive) {
      setShowDetailsActive(false);
    }
  };

  //SELECTED TYPE
  // 0 - FEED
  // 1 - Cacique
  // 2 - Tribo Master

  const getChartValues = useCallback(async () => {
    try {
      switch (selectedInterval) {
        case 0: {
          let result = await api.getFinancesPerDay(selectedType);
          return result;
        }
        case 1: {
          let result = await api.getFinancesPerMonth(selectedType);
          return result;
        }
        case 2: {
          let result = await api.getFinancesPerWeek(selectedType);
          return result;
        }
        default:
          return null
      }
    } catch (error) {
      console.error("Error fetching chart values:", error);
      setError(error);
      throw error;
    }
  }, [selectedInterval, selectedType]);

  const searchFinanceByDate = useCallback(async () => {
    console.log("=== searchFinanceByDate ===");
    console.log("selectedInterval:", selectedInterval);
    console.log("dates:", dates);

    try {
      if (selectedInterval !== 3) {
        if (selectedInterval < intervalLabels.length) {
          console.log("Buscando dados para intervalo:", selectedInterval);
          setFinanceChart(null);
          setError(null);
          
          const result = await getChartValues();
          
          if (!result) {
            throw new Error("Resposta vazia da API");
          }

          console.log("Resultado completo:", result);
          
          // ✅ CORREÇÃO 3: Validar estrutura dos dados
          const data = result.data || result;
          
          if (data.finances) {
            setFinanceChart(data.finances);
          } else {
            console.error("data.finances está undefined");
            setFinanceChart(null);
          }
          
          if (data.announcements) {
            setAnnouncements(data.announcements);
          } else {
            console.warn("data.announcements está undefined");
            setAnnouncements([]);
          }
        }
      } else {
        if (dates) {
          console.log("Buscando com datas customizadas:", dates);
          setFinanceChart(null);
          setError(null);
          
          var data = await api.getGeneralFinancesByDate(dates, selectedType);
          
          if (data.finances) {
            setFinanceChart(data.finances);
          } else {
            console.error("data.finances está undefined");
            setFinanceChart(null);
          }
          
          if (data.announcements) {
            setAnnouncements(data.announcements);
          } else {
            setAnnouncements([]);
          }
        } else {
          console.warn("Intervalo 3 selecionado mas sem datas");
        }
      }
    } catch (error) {
      console.error("Erro em searchFinanceByDate:", error);
      setError(error.message);
      setFinanceChart(null);
      setAnnouncements([]);
    }
  }, [selectedInterval, selectedType, dates, getChartValues]);

  useEffect(() => {
    console.log("UseEffect disparado");
    console.log("selectedInterval:", selectedInterval);
    console.log("selectedType:", selectedType);
    console.log("dates:", dates);
    searchFinanceByDate();
  }, [selectedInterval, selectedType, dates, searchFinanceByDate]);

  return (
    <>
      {showDetailsActive ? (
        <div className={styles.modalContainer}>
          <PaymentDetails handleClose={close} details={triboDetails} />
        </div>
      ) : null}
      <div className={styles.container}>
        <header>
          <div onClick={() => navigate(-1)}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Pagamentos </h2>
          </div>
          <img 
            src={logo} 
            alt="Logo"
            onClick={() => navigate("/dashboard/users/day")}
            style={{cursor: 'pointer', width: '112px'}}
          />
        </header>
        <div className={styles.buttonsHeader}>
          <img
            src={ConfigIcon}
            alt="Ajustar"
            onClick={() => navigate("/payment/table")}
          />
          <ButtonChain
            labels={intervalLabels}
            searchDates
            searchFinanceByDate={searchFinanceByDate}
            selected={setSelectedInterval}
            setDatas={setDates}
          />
        </div>
        <main>
          <div className={styles.generalInfo}>
            {!financeChart ? (
              <Loading />
            ) : (
              <>
                <h2>Visão Geral</h2>
                <p id={styles.amount}>R$ {financeChart.total}</p>
                <div className={styles.chart}>
                  <StackedChart data={financeChart.finances} />
                </div>
              </>
            )}
          </div>
          <div className={styles.paymentList}>
            <div className={styles.tableHeader}>
              <div className={styles.buttons}>
                <h2>Listagem</h2>
                <ButtonChain labels={typeLabels} selected={setSelectedType} />
              </div>
            </div>
            <PaymentList
              type={selectedType}
              handleShowDetails={handleShowDetails}
              ads={announcements}
            />
          </div>
        </main>
      </div>
    </>
  );
};
