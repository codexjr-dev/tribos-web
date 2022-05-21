import Chart from "../../components/Chart";
import ReportedProblems from "../../components/ReportedProblems";

const Dashboard = () => {
  return (
    <div>
      Essa é a tela de Dashboard.
      <div>
        <Chart />
        <ReportedProblems />
      </div>
    </div>
  );
};

export default Dashboard;
