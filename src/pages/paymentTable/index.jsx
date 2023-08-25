import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useChangePrice } from "../../contexts/changePrice";

import { PaymentTableRow } from "../../components/PaymentTableRow";
import Loading from "../../components/Loading";

import { getPriceTable, updatePrices } from "../../services/api";

import { makePriceTable } from "../../data/Data";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";

import styles from "./styles.module.css";
import { toast } from "react-toastify";

export const PaymentTable = () => {
  const { priceChange } = useChangePrice();

  const navigate = useNavigate();

  const [typeSelectedButton, setTypeSelectedButton] = useState("cacique");
  const [isEditMode, setIsEditMode] = useState(false);
  const [priceTable, setPriceTable] = useState([]);

  const handleChangeTypeSelectedButton = (target) => {
    setTypeSelectedButton(target);
  };

  const handleClickOnSave = () => {
    setIsEditMode(!isEditMode);

    let auxObj = {};
    Object.entries(priceChange).forEach((entry) => {
      if (entry[1] > 0) {
        Object.assign(auxObj, { [entry[0]]: entry[1] });
      }
    });

    updatePrices(auxObj);
    toast.success("Valores alterados com sucesso!");
  };

  const handleClickOnEdit = () => {
    setIsEditMode(!isEditMode);
    toast.info("Modo de edição ATIVADO.");
  };

  useEffect(() => {
    async function loadAll() {
      setPriceTable(makePriceTable(await getPriceTable(), typeSelectedButton));
    }

    loadAll();
  }, [typeSelectedButton]);

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
                {!priceTable ? (
                  <Loading />
                ) : (
                  priceTable.map((object, index) => {
                    return (
                      <PaymentTableRow
                        key={object.id}
                        objectKey={object.id}
                        selectedButton={typeSelectedButton}
                        editMode={isEditMode}
                        data={object}
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
