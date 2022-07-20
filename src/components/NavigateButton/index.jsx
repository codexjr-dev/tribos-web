import styles from "./styles.module.css";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";
import { useNavigate } from "react-router-dom";

export const NavigateButton = ({ name, srcIcon, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigateTo = () => {
    navigate(`/${navigateTo}`);
  };

  return (
    <div className={styles.container} onClick={() => handleNavigateTo()}>
      <img src={srcIcon} alt={name} />
      <div id={styles.icon}>
        <p>{name}</p>
        <img src={rightArrowIcon} alt={name} />
      </div>
    </div>
  );
};
