import styles from "./styles.module.css";

import { useState } from "react";
import { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import Portuguese from 'flatpickr/dist/l10n/pt';
import 'flatpickr/dist/l10n/pt'; 
import { useRef } from "react";

export const ButtonChain = ({ labels, selected, calendar }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [datas, setDatas] = useState([]);
  const flatpickrRef = useRef(null);

  const handleSelect = (currentIndex) => {
    setSelectedIndex(currentIndex);
    selected(currentIndex);
  }

  const handleDatas = (event) => {
    setDatas(event)
  }


  const handleSelectNext6Months = () => {
    const currentDate = new Date();
    const next6Months = new Date(currentDate);
    next6Months.setMonth(next6Months.getMonth() + 6);
    setDatas([currentDate, next6Months]);


  };

  const handleFlatpickrReady = () => {
    const button = document.createElement('button');
    button.innerHTML = 'Selecionar Próximos 6 Meses';
    button.classList.add('next-6-months-button');
    button.addEventListener('click', handleSelectNext6Months);
    button.style.backgroundColor = 'white';

    const calendarContainer = document.querySelector('.flatpickr-calendar');
    calendarContainer.appendChild(button);
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
      {calendar &&
        <div className={styles.calendarContainer}>
            <Flatpickr className={styles.calendarInput} 
              placeholder="Informe uma data"
              value={ datas.length > 0 ? datas : [new Date()]}
              ref={flatpickrRef}
              options={{
                mode: "range",
                dateFormat: "d/m/Y",
                minDate: "today",
                locale: Portuguese.pt,
                onClose: (e) => handleDatas(e),
                onReady: handleFlatpickrReady
              }
              }>
            </Flatpickr>
            {datas.length > 0 && !datas[1] &&
              <span>Preencha a data corretamente</span>
            }
          </div>
        }
    </div>
  );
};
