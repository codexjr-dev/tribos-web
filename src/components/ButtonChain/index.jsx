import styles from "./styles.module.css";

import { useState } from "react";
import { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import Portuguese from 'flatpickr/dist/l10n/pt';
import 'flatpickr/dist/l10n/pt'; 

export const ButtonChain = ({ labels, selected, calendar }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [datas, setDatas] = useState([]);

  const handleSelect = (currentIndex) => {
    setSelectedIndex(currentIndex);
    selected(currentIndex);
  }

  const handleDatas = (event) => {
    setDatas(event)
  }

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
      {calendar &&
        <div className={styles.calendarContainer}>
            <Flatpickr className={styles.calendarInput} 
              placeholder="Informe uma data"
              options={{
                mode: "range",
                dateFormat: "d/m/Y",
                minDate: "today",
                locale: Portuguese.pt,
                onClose: (e) => handleDatas(e)
              }
              }>
            </Flatpickr>
            {!datas[1] &&
              <span>Preencha a data corretamente</span>
            }
          </div>
        }
    </div>
  );
};
