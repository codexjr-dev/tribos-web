import LoadingIcon from "../../assets/icons/loading-icon.svg";

import styles from "./styles.module.css";

const InfoCard = ({ title, iconSrc, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <img src={iconSrc} alt={title} />
      </div>
      <p id={styles.mainInfo}>
        {data || data == 0 ? (
          data
        ) : (
          <img src={LoadingIcon} className={styles.loading} alt="Carregando" />
        )}
      </p>
    </div>
  );
};

export default InfoCard;
