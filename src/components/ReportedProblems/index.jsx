import reportIcon from "../../assets/icons/report-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import errorIcon from "../../assets/icons/error-icon.svg";

import styles from "./styles.module.css";
import { NavigateButton } from "../NavigateButton";

const ReportedProblems = () => {
  return (
    <nav className={styles.container}>
      <h3>Problemas Reportados</h3>
      <div className={styles.listContainer}>
        <NavigateButton
          name="Spam ou abusos"
          srcIcon={reportIcon}
          navigateTo="spam"
        />
      </div>
    </nav>
  );
};
export default ReportedProblems;
