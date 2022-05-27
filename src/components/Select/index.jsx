import styles from "./styles.module.css";
import selectIcon from "../../assets/icons/select-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import adsIcon from "../../assets/icons/ads-icon.svg";
import groupIcon from "../../assets/icons/group-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";

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
        src={iconSwitcher(value)}
        alt={fieldName}
        id={styles.fieldIcon}
      />
      <select
        value={value}
        name={value}
        id={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {optionsList.map((option) => {
          return (
            <option key={option.value} value={option.value} id={styles.option}>
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
