import { set } from "date-fns";
import styles from "./styles.module.css";
import loadingReq from "../../assets/icons/button-loading.svg";

import { useEffect, useState } from "react";

export const ChainButton = ({
  labels,
  selected,
  searchDates,
  searchFinanceByDate,
  intervalIndex,
  formatedDates,
  dateText,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(intervalIndex ?? 0);
  const [alertMsg, setAlertMsg] = useState(false);
  const [dates, setDates] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (currentIndex) => {
    setSelectedIndex(currentIndex);
    selected(currentIndex);
  };

  useEffect(() => {
    if (dateText == "null") {
      dateText = "";
    } else {
      handleDate(dateText);
    }
  }, []);

  const handleChange = (text) => {
    formatedDates(text);
  };

  const convertDateFormat = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleDate = (text) => {
    const regex = /\d{2}\/\d{2}\/\d{4}-\d{2}\/\d{2}\/\d{4}/;
    if (!regex.test(text)) {
      setAlertMsg(false);
      setDates(null);
    } else {
      const splitted = text.split("-");
      let data1 = new Date(convertDateFormat(splitted[0]));
      let data2 = new Date(convertDateFormat(splitted[1]));
      setDates([data1, data2]);
      setAlertMsg(false);
    }
    handleChange(text);
  };

  const handleSearch = async () => {
    if (dates) {
      setLoading(true);
      await searchFinanceByDate(dates);
      setLoading(false);
    } else {
      setAlertMsg(false);
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
              defaultValue={dateText}
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
          ></span>
        </div>
      )}
    </div>
  );
};
