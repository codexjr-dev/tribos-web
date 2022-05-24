import styles from "./styles.module.css";
import selectIcon from "../../assets/icons/select-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import adsIcon from "../../assets/icons/ads-icon.svg";
import groupIcon from "../../assets/icons/group-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import { useState } from "react";

const Select = ({ fieldName, optionsList, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const iconSwitcher = (selected) => {
    let iconSrc = null;
    if (fieldName == "schedule") {
      iconSrc = calendarIcon;
    } else {
      switch (selected) {
        case "users":
          iconSrc = userIcon;
          break;
        case "ads":
          iconSrc = adsIcon;
          break;
        case "groups":
          iconSrc = groupIcon;
          break;
        default:
          iconSrc = userIcon;
      }
    }
    return iconSrc;
  };

  return (
    <div className={styles.container}>
      <img
        src={iconSwitcher(selectedValue)}
        alt={fieldName}
        id={styles.fieldIcon}
      />
      <select
        value={selectedValue}
        name={fieldName}
        id={fieldName}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {optionsList.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <img src={selectIcon} alt={fieldName} id={styles.selectIcon} />
    </div>
  );
};

export default Select;
