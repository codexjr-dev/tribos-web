import { useState } from "react";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import ConfigIcon from "../../assets/icons/config-icon.svg";
import { generalFinances } from "../../data/Data";
import { ButtonChain } from "../../components/ButtonChain";
import { StackedChart } from "../../components/StackedChart";

import { PaymentDetails } from "../../components/PaymentDetails";

import { typeLabels, intervalLabels } from "../../util/options";
import { useNavigate } from "react-router-dom";

import { PaymentList } from "../../components/PaymentList";

import styles from "./styles.module.css";

export const PaymentDashboard = () => {
  const [showDetailsActive, setShowDetailsActive] = useState(false);
  const [triboDetails, setTriboDetails] = useState(null);
  const [selectedType, setSelectedType] = useState(0);

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

  return (
    <>
      {showDetailsActive ? (
        <div className={styles.modalContainer}>
          <PaymentDetails handleClose={close} details={triboDetails} />
        </div>
      ) : null}
      <div className={styles.container}>
        <header>
          <div onClick={() => navigate("/dashboard")}>
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
          <ButtonChain labels={intervalLabels} />
        </div>
        <main>
          <div className={styles.generalInfo}>
            <h2>Visão Geral</h2>
            <p id={styles.amount}>R$ 2754.75</p>
            <div className={styles.chart}>
              <StackedChart data={generalFinances} />
            </div>
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
            />
          </div>
        </main>
      </div>
    </>
  );
};
