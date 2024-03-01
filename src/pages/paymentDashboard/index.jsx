import { useEffect, useState } from "react";
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

export const PaymentDashboard = () => {
  const [showDetailsActive, setShowDetailsActive] = useState(false);
  const [triboDetails, setTriboDetails] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [financeChart, setFinanceChart] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [announcements, setAnnouncements] = useState([])
  const [dates, setDates] = useState(null)

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

  const getChartValues = async () => {
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
    }
    

  useEffect(() => {
    searchFinanceByDate();
  }, [selectedInterval, selectedType, dates]);

  const searchFinanceByDate = async () => {
    if (selectedInterval != 3) {
      if (selectedInterval < intervalLabels.length) {
        setFinanceChart(null);
        const { data } = await getChartValues()
        setFinanceChart(data.finances);
        setAnnouncements(data.announcements)
      }
    } else {
      setFinanceChart(null);
      var data = await api.getGeneralFinancesByDate(dates, selectedType);
      setFinanceChart(data.finances);
      setAnnouncements(data.announcements)
    }
  };

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
