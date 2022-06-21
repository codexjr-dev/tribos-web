import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { priceTable } from "../../data/Data";
import { formatInfo } from "../../util/aux";

import styles from "./styles.module.css";

export const PaymentTable = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleChangeSelectedButton = (event, actual) => {
    setSelectedButton(Math.abs(actual - 1));
  };

  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Ajustes </h2>
        </div>
      </header>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.headerInfo}>
            <h2>Tabela de valores</h2>
            <span id={styles.editButton}> Editar </span>
          </div>
          <div className={styles.buttons}>
            <button
              id={selectedButton === 0 ? styles.selected : styles.normal}
              onClick={(event) => {
                handleChangeSelectedButton(event, 1);
              }}
            >
              Venda Cacique
            </button>
            <button
              id={selectedButton === 1 ? styles.selected : styles.normal}
              onClick={(event) => {
                handleChangeSelectedButton(event, 0);
              }}
            >
              Venda Tribo Master
            </button>
          </div>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Nº participantes</th>
                  <th>Preço</th>
                  <th>
                    Imposto (<b>{`${20}%`}</b>)
                  </th>
                  <th>
                    Cacique (<b>{`${30}%`}</b>)
                  </th>
                  <th>
                    Tribo Master (<b>{`${70}%`}</b>)
                  </th>
                </tr>
              </thead>

              <tbody>
                {priceTable.map((object) => {
                  return (
                    <tr key={object.id} id={styles.tableRow}>
                      <td>{`Acima de ${formatInfo(object.min)}`}</td>
                      <td>{`R$ ${object.price.toFixed(2)}`}</td>
                      <td>{`R$ ${object.tax.toFixed(2)}`}</td>
                      <td>{`R$ ${object.common.toFixed(2)}`}</td>
                      <td>{`R$ ${object.master.toFixed(2)}`}</td>
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
