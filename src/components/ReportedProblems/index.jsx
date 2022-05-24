import reportIcon from "../../assets/icons/report-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import errorIcon from "../../assets/icons/error-icon.svg";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

import styles from "./styles.module.css";

const ReportedProblems = () => {
  return (
    <nav className={styles.container}>
      <h3>Problemas Reportados</h3>
      <ul>
        <li>
          <img src={reportIcon} alt="Report" />
          <div id={styles.icon}>
            <p>Spam ou Abusos</p>
            <img src={rightArrowIcon} alt="Report" />
          </div>
        </li>
        <li>
          <img src={messageIcon} alt="Feedback" />
          <div id={styles.icon}>
            <p>Feedbacks Gerais</p>
            <img src={rightArrowIcon} alt="Report" />
          </div>
        </li>
        <li>
          <img src={errorIcon} alt="Error" />
          <div id={styles.icon}>
            <p>Erros do Sistema</p>
            <img src={rightArrowIcon} alt="Report" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default ReportedProblems;
