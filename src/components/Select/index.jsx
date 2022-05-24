import styles from "./styles.module.css";
import selectIcon from "../../assets/icons/select-icon.svg";

const Select = ({ fieldName, srcIcon, optionsList }) => {
  return (
    <div className={styles.container}>
      <img src={srcIcon} alt={fieldName} id={styles.fieldIcon}/>
      <select name={fieldName} id={fieldName}>
        {optionsList.map((option) => {
          return <option id={styles.option} value={option}>{option}</option>;
        })}
      </select>
      <img src={selectIcon} alt={fieldName} id={styles.selectIcon}/>
    </div>
  );
};

export default Select;
