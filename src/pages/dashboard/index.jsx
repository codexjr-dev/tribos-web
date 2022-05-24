import { useState } from "react";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

import logo from "../../assets/images/logo-pequeno.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import groupIcon from "../../assets/icons/group-icon.svg";
import adsIcon from "../../assets/icons/ads-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";

import styles from "./styles.module.css";
import Select from "../../components/Select";

import { ChartData } from "../../data/Data";

const Dashboard = () => {
  const typeOptions = ["Usuários", "Anúncios", "Tribos"];
  const scheduleOptions = ["Dia", "Mês", "Ano"];

  const [data, setData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: ["#9142C5"],
        tension: 0.4,
        fill: false,
        borderColor: "#C48EF4",
        radius: 8,
      },
    ],
  });

  return (
    <div className={styles.container}>
      <header className={styles.logoContainer}>
        <img src={logo} alt="Logo Tribos" />
      </header>
      <main className={styles.infoContainer}>
        <div className={styles.chartContainer}>
          <div className={styles.chartSelect}>
            <Select
              fieldName="type"
              srcIcon={userIcon}
              optionsList={typeOptions}
            />
            <Select
              fieldName="schedule"
              srcIcon={calendarIcon}
              optionsList={scheduleOptions}
            />
          </div>
          <DataChart chartData={data}/>
          <a href="">Ver mais...</a>
        </div>
        <nav className={styles.reportedProblemsContainer}>
          <ReportedProblems />
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
