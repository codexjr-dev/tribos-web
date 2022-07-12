import styles from "./styles.module.css";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import ConfigIcon from "../../assets/icons/config-icon.svg";
import { paymentListData } from "../../data/Data";
import { useState } from "react";
import { ButtonChain } from "../../components/ButtonChain";

export const PaymentDashboard = () => {
  const intervalLabels = [
    {
      id: 0,
      name: "Dia",
    },
    {
      id: 1,
      name: "Mês",
    },
    {
      id: 2,
      name: "Ano",
    },
  ];

  const typeLabels = [
    {
      id: 0,
      name: "Venda Cacique",
    },
    {
      id: 1,
      name: "Venda Tribo Master",
    },
  ];

  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Pagamentos </h2>
        </div>
      </header>
      <div className={styles.buttonsHeader}>
        <img src={ConfigIcon} />
        <ButtonChain labels={intervalLabels} />
      </div>
      <main>
        <div className={styles.generalInfo}>
          <h2>Visão Geral</h2>
          <p id={styles.amount}>R$ 2754.75</p>
          <div className={styles.graph}>
            <p>Imposto</p>
            <p>Cacique</p>
            <p>Tribo Master</p>
          </div>
        </div>
        <div className={styles.paymentList}>
          <div className={styles.tableHeader}>
            <h2>Listagem</h2>
            <div className={styles.buttons}>
              <ButtonChain labels={typeLabels} />
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
                {paymentListData.map((element) => {
                  return (
                    <tr id={element.id} className={styles.tableRow}>
                      <td>{element.name}</td>
                      <td>{element.value}</td>
                      <td>{element.tax}</td>
                      <td>{element.common}</td>
                      <td>{element.master}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
