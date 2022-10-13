import styles from "./styles.module.css";

import { useState } from "react";
import { useEffect } from "react";

export const ButtonChain = ({ labels, selected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (currentIndex) => {
    setSelectedIndex(currentIndex);
    selected(selectedIndex);
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
    </div>
  );
};
