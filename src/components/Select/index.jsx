import selectIcon from "../../assets/icons/select-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import companyIcon from "../../assets/icons/company-icon.svg";
import groupIcon from "../../assets/icons/group-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import mostReported from "../../assets/icons/most-reported.svg";

import styles from "./styles.module.css";

const Select = ({ fieldName, optionsList, setValue, value }) => {
  const iconSwitcher = (selected) => {
    let iconSrc = null;
    if (fieldName === "interval") {
      iconSrc = calendarIcon;
    } else {
      switch (selected) {
        case "users":
          iconSrc = userIcon;
          break;
        case "companies":
          iconSrc = companyIcon;
          break;
        case "tribos":
          iconSrc = groupIcon;
          break;
        case "time":
          iconSrc = calendarIcon;
          break;
        case "quantity":
          iconSrc = mostReported;
          break;
        default:
          iconSrc = userIcon;
      }
    }
    return iconSrc;
  };

  return (
    <div className={styles.select_container}>
      <img src={iconSwitcher(value)} alt={fieldName} id={styles.fieldIcon} />
      <div className={styles.selectButton}>
        <select
          value={value}
          name={value}
          id={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {optionsList.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                id={styles.option}
              >
                {option.label}
              </option>
            );
          })}
        </select>
        <img src={selectIcon} alt={fieldName} id={styles.selectIcon} />
      </div>
    </div>
  );
};

export default Select;
