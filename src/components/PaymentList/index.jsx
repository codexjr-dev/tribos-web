import { useEffect, useState } from "react";
import Loading from "../Loading";

import { findAllCacique, findAllMaster, findAllFeed } from "../../services/api";

import styles from "./styles.module.css";

export const PaymentList = ({ type, handleShowDetails, ads }) => {

  return (
    <div className={styles.tableContainer}>
      {!ads ? (
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
            {ads.map((element) => {
              return (
                <tr
                  key={element._id}
                  id={element._id}
                  className={
                    element.caciquePaid
                      ? styles.almostPaidRow
                      : styles.normalRow
                  }
                  style={element.caciquePaid ? { backgroundColor: "#5BCB5F"} : { backgroundColor: "white" }}
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
