import { useState } from "react";

import DataChart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

import logo from "../../assets/images/logo-pequeno.svg";

import styles from "./styles.module.css";
import Select from "../../components/Select";

import { ChartData } from "../../data/Data";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState("users");
  const [selectedInterval, setSelectedInterval] = useState("month");

  const typeOptions = [
    { label: "Usuários", value: "users" },
    { label: "Anúncios", value: "ads" },
    { label: "Tribos", value: "groups" },
  ];
  const intervalOptions = [
    { label: "Dia", value: "day" },
    { label: "Mês", value: "month" },
    { label: "Ano", value: "year" },
  ];

  const [data, setData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "Usuários ganhos",
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
              optionsList={typeOptions}
              setValue={setSelectedType}
              value={selectedType}
            />
            <Select
              fieldName="interval"
              optionsList={intervalOptions}
              setValue={setSelectedInterval}
              value={selectedInterval}
            />
          </div>
          <DataChart chartData={data} />
          <a href="#">Ver mais...</a>
        </div>
        <nav className={styles.reportedProblemsContainer}>
          <ReportedProblems />
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
