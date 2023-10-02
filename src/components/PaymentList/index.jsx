import { useEffect, useState } from "react";
import Loading from "../Loading";

import { findAllCacique, findAllMaster, findAllFeed } from "../../services/api";

import styles from "./styles.module.css";

export const PaymentList = ({ type, handleShowDetails }) => {
  const [salesList, setSalesList] = useState([]);

  useEffect(() => {
    async function loadAll() {
      setSalesList(null);  // Adicione esta linha

      switch (type) {
        case 0:
          setSalesList(await findAllFeed());
          break;
        case 1:
          setSalesList(await findAllCacique());
          break;
        case 2:
          setSalesList(await findAllMaster());
          break;
        default:
          break;
      }
    }

    loadAll();
}, [type, handleShowDetails]);


  return (
    <div className={styles.tableContainer}>
      {!salesList ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>{type === 0 ? "Nome anunciante" : "Nome Tribo"}</th>
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
                  className={
                    element.caciquePaid
                      ? styles.almostPaidRow
                      : styles.normalRow
                  }
                  onClick={() =>
                    type === 0 ? null : handleShowDetails(element)
                  }
                >
                  <td>{type === 0 ? element.user.name : element.tribo.name}</td>
                  <td>{`R$ ${Number(element.price).toFixed(2)}`}</td>
                  <td>{`R$ ${Number(element.price * 0.2).toFixed(2)}`}</td>
                  <td>
                    {type === 0
                      ? "-"
                      : `R$ ${Number(element.caciquePart).toFixed(2)}`}
                  </td>
                  <td>
                    {type === 0
                      ? `R$ ${Number(element.price * 0.8).toFixed(2)}`
                      : `R$ ${Number(
                          element.price * 0.8 - element.caciquePart
                        ).toFixed(2)}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
