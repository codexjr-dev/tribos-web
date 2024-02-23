import { set } from "date-fns";
import styles from "./styles.module.css";
import loadingReq from "../../assets/icons/button-loading.svg";

import { useState } from "react";

export const ButtonChain = ({
  labels,
  selected,
  searchDates,
  searchFinanceByDate,
  intervalIndex,
  setDatas
}) => {
  const [selectedIndex, setSelectedIndex] = useState(intervalIndex ?? 0);
  const [alertMsg, setAlertMsg] = useState(false);
  const [dates, setDates] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (currentIndex) => {
    setSelectedIndex(currentIndex);
    selected(currentIndex);
  };

  const convertDateFormat = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleDate = (text) => {
    const regex = /\d{2}\/\d{2}\/\d{4}-\d{2}\/\d{2}\/\d{4}/;
    if (!regex.test(text)) {
      setAlertMsg(true);
      setDates(null);
    } else {
      const splitted = text.split("-");
      let data1 = new Date(convertDateFormat(splitted[0]));
      let data2 = new Date(convertDateFormat(splitted[1]));
      setDates([data1, data2]);
      setAlertMsg(false);
    }
  };

  const handleSearch = async () => {
    if (dates) {
      setLoading(true);
      setDatas(dates);
      setLoading(false);
    } else {
      setAlertMsg(true);
    }
  };

  return (
    <div className={styles.container}>
      {labels.map((label, index) => {
        return (
          <button
            key={index}
            className={
              label.id === selectedIndex ? styles.selected : styles.normal
            }
            onClick={(e) => {
              return handleSelect(index);
            }}
          >
            {label.name}
          </button>
        );
      })}
      {searchDates && (
        <div className={styles.wrapperCalendar}>
          <div className={styles.containerInput}>
            <input
              className={styles.inputCalendar}
              onChange={(e) => handleDate(e.target.value)}
            ></input>
            <button
              key={labels.length}
              disabled={loading}
              className={
                labels.length === selectedIndex
                  ? styles.selected
                  : styles.normal
              }
              onClick={(e) => {
                handleSearch();
                return handleSelect(labels.length);
              }}
            >
              {loading ? <img src={loadingReq}></img> : <span>BUSCAR</span>}
            </button>
          </div>
          <span
            className={styles.spanAdvice}
            style={alertMsg ? { color: "red" } : {}}
          >
            {" "}
            Insira a data separada por "-". <br />
            Exemplo: "24/03/2000-20/11/2024"
          </span>
        </div>
      )}
    </div>
  );
};
