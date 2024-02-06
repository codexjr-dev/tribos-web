import reportIcon from "../../assets/icons/report-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import errorIcon from "../../assets/icons/error-icon.svg";

import styles from "./styles.module.css";
import { NavigateButton } from "../NavigateButton";

const ReportedProblems = ( { title, navigateIcon, navigateTo, navigateName  } ) => {
  return (
    <nav className={styles.container}>
      <h3>{title ?? "Problemas Reportados"}</h3>
      <div className={styles.listContainer}>
        <NavigateButton
          name={navigateName ?? "Spam ou abusos"}
          srcIcon={navigateIcon ?? reportIcon}
          navigateTo={navigateTo ?? "spam"}
        />
      </div>
    </nav>
  );
};
export default ReportedProblems;
