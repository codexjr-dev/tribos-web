import styles from "./styles.module.css";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import ConfigIcon from "../../assets/icons/config-icon.svg";
import { generalFinances, paymentListData } from "../../data/Data";
import { ButtonChain } from "../../components/ButtonChain";
import { StackedChart } from "../../components/StackedChart";

import { typeLabels, intervalLabels } from "../../util/options";
import { useNavigate } from "react-router-dom";
import { PaymentDetails } from "../../components/paymentDetails";
import { useState } from "react";
import { useEffect } from "react";
import { findAllCacique, findAllMaster, findAllFeed } from "../../services/api";

export const PaymentDashboard = () => {
  const [showDetailsActive, setShowDetailsActive] = useState(false);
  const [triboDetails, setTriboDetails] = useState(null);
  const [salesList, setSalesList] = useState([]);
  const [selectedType, setSelectedType] = useState(1);

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

  useEffect(() => {
    async function loadAll() {
      selectedType === 1
        ? setSalesList(await findAllCacique())
        : setSalesList(await findAllMaster());

      // const finder = await findAllFeed();
      // console.log(finder);
    }

    loadAll();
    console.log(salesList);
  }, [selectedType]);

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
            <div className={styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                    <th>Nome Tribo</th>
                    <th>Valor total</th>
                    <th>Imposto</th>
                    <th>Cacique</th>
                    <th>Tribo Master</th>
                  </tr>
                </thead>
                <tbody>
                  {salesList.map((element) => {
                    return (
                      <tr
                        key={element._id}
                        id={element._id}
                        className={element.caciquePaid ? styles.almostPaidRow : styles.normalRow}
                        onClick={() => handleShowDetails(element)}
                      >
                        <td>{element.tribo.name}</td>
                        <td>{`R$ ${Number(element.price).toFixed(2)}`}</td>
                        <td>{`R$ ${Number(element.price * 0.2).toFixed(2)}`}</td>
                        <td>{`R$ ${Number(element.caciquePart).toFixed(2)}`}</td>
                        <td>{`R$ ${Number(element.price * 0.8 - element.caciquePart).toFixed(2)}`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
