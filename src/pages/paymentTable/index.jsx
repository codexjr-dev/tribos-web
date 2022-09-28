import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import LoadingIcon from '../../assets/icons/loading-icon.svg';

import { makePriceTable, priceTable } from "../../data/Data";
import { getPriceTable } from "../../services/api";
import { formatInfo } from "../../util/aux";

import styles from "./styles.module.css";

export const PaymentTable = () => {
  const navigate = useNavigate();

  const [typeSelectedButton, setTypeSelectedButton] = useState("cacique");
  const [isEditMode, setIsEditMode] = useState(false);
  const [priceTable, setPriceTable] = useState([]);

  const handleChangeTypeSelectedButton = (target) => {
    setTypeSelectedButton(target);
  };

  const handleClickOnSave = () => {
    alert("salvando");
    setIsEditMode(!isEditMode);
  };

  const handleClickOnEdit = () => {
    alert("editando");
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    async function loadAll() {
      setPriceTable(makePriceTable(await getPriceTable(), typeSelectedButton));
    }

    loadAll();
  }, [typeSelectedButton])

  return (
    <div className={styles.container}>
      <header>
        <div onClick={() => navigate("/payment")}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Ajustes </h2>
        </div>
      </header>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.headerInfo}>
            <h2>Tabela de valores</h2>
            {!isEditMode ? (
              <span id={styles.editButton} onClick={handleClickOnEdit}>
                Editar
              </span>
            ) : (
              <span id={styles.editButton} onClick={handleClickOnSave}>
                Salvar
              </span>
            )}
          </div>
          <div className={styles.buttons}>
            <button
              id={
                typeSelectedButton === "cacique"
                  ? styles.selected
                  : styles.normal
              }
              onClick={(event) => {
                handleChangeTypeSelectedButton("cacique");
              }}
            >
              Venda Cacique
            </button>
            <button
              id={
                typeSelectedButton === "master"
                  ? styles.selected
                  : styles.normal
              }
              onClick={(event) => {
                handleChangeTypeSelectedButton("master");
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
                  <th>Preço Total</th>
                  <th>
                    Imposto (<b>{`${20}%`}</b>)
                  </th>
                  <th>
                    Cacique (
                    <b>{`${typeSelectedButton === "cacique" ? 70 : 30}%`}</b>)
                  </th>
                  <th>
                    Tribo Master (
                    <b>{`${typeSelectedButton === "master" ? 70 : 30}%`}</b>)
                  </th>
                </tr>
              </thead>

              <tbody>
                {priceTable.map((object, index) => {
                  return typeSelectedButton === "cacique" &&
                    object.id === "feed" ? null : (
                    <tr key={object.id} id={styles.tableRow}>
                      {object.id !== "feed" ? (
                        <td>{`${
                          object.id.substring(0, 2) === "st"
                            ? "Abaixo"
                            : "Acima"
                        } de ${formatInfo(object.id.substring(2))}`}</td>
                      ) : (
                        <td>Feed</td>
                      )}
                      <td id={styles.price}>
                        <span>R$</span>
                        <input
                          type="number"
                          disabled={isEditMode ? false : true}
                          value={Number(object.price).toFixed(2)}
                          onChange={(event) => console.log(event.target.value)}
                          name="price"
                        />
                      </td>
                      <td>{`R$ ${object.tax}`}</td>
                      <td>{`R$ ${object.cacique}`}</td>
                      <td>{`R$ ${object.master}`}</td>
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
