import styles from "./styles.module.css";
import { useState } from "react";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import PostComponent from "../../components/Post";
import ProfileComponent from "../../components/Profile";
import RemoveModalComponent from "../../components/RemoveModal";
import { getAllReports, getAllReportsByCount } from "../../services/api";
import { spamOptions } from "../../util/utils";
import Select from "../../components/Select";
import Loading from "../../components/Loading";
import logo from "../../assets/images/logo-pequeno.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReportReasons({ reports }) {
  return (
    <div>
      <span>
        <b>Motivos:</b>
      </span>
      <ul style={{ listStyle: "inside" }}>
        {reports.map((value, i) => (
          <li key={i}>{value.reason}</li>
        ))}
      </ul>
    </div>
  );
}

const Spam = () => {
  const [selectedType, setSelectedType] = useState("time");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reports, setReports] = useState([]);
  const [route, setRoute] = useState("");
  const [operation, setOperation] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadAll() {
      selectedType === "time"
        ? await getAllReports().then((data) => setReports(data.reports))
        : await getAllReportsByCount().then((data) => setReports(data.reports));
    }

    loadAll();
  }, [selectedType]);

  return (
    <div className={styles.container}>
      <header style={{ marginBottom: "3rem" }}>
        {isModalVisible ? (
          <div className={styles.titleOpacity}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Spam ou Abusos </h2>
          </div>
        ) : (
          <div onClick={() => navigate(-1)}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Spam ou Abusos </h2>
          </div>
        )}
        <img 
          src={logo} 
          alt="Logo"
          onClick={() => navigate("/dashboard/users/day")}
          style={{cursor: 'pointer', width: '112px'}}
        />
      </header>

      {isModalVisible ? (
        <RemoveModalComponent
          SetValue={setIsModalVisible}
          Operation={operation}
          Route={route}
          Id={id}
        />
      ) : null}

      <div
        className={isModalVisible ? styles.spamAreaOpacity : styles.spamArea}
      >
        <Select
          fieldName="type"
          optionsList={spamOptions}
          setValue={setSelectedType}
          value={selectedType}
        />

        {reports.map((value) => {
          if (value.type === "Post") {
            console.log(value);
            return (
              <PostComponent
                key={value._id}
                User={value.reported.tribo.username}
                Icon={value.reported.tribo.profilePic.url}
                Time={value.updatedAt}
                Content={value.reported.content}
                Subtitle={value.reported.text}
                SetValue={setIsModalVisible}
                SetOperation={setOperation}
                SetRoute={setRoute}
                Route={value.type}
                Id={value._id}
                SetId={setId}
                extraFooter={<ReportReasons reports={value.reports} />}
              />
            );
          } else if (value.type === "User" || value.type == "Tribo") {
            return (
              <ProfileComponent
                key={value._id}
                User={value.reported.username}
                Icon={value.reported.profilePic.url}
                Time={value.updatedAt}
                Name={value.reported.name}
                SetValue={setIsModalVisible}
                SetOperation={setOperation}
                SetRoute={setRoute}
                Route={value.type}
                Id={value._id}
                SetId={setId}
                extraFooter={<ReportReasons reports={value.reports} />}
              />
            );
          } else if (value.type === "Announcement") {
            return (
              <PostComponent
                key={value._id}
                User={value.reported.tribo.username}
                Icon={value.reported.tribo.profilePic.url}
                Time={value.updatedAt}
                Content={[value.reported.content]}
                Subtitle={value.reported.description}
                SetValue={setIsModalVisible}
                SetOperation={setOperation}
                SetRoute={setRoute}
                Route={value.type}
                Id={value._id}
                SetId={setId}
                isAd={true}
                extraFooter={
                  <>
                    {value.reported.link && (
                      <span>
                        <b>Link:</b>{" "}
                        <a href={value.reported.link}>{value.reported.link}</a>
                      </span>
                    )}
                    <ReportReasons reports={value.reports} />
                  </>
                }
              />
            );
          } else {
            return <p style={{ color: "red" }}>?</p>;
          }
        })}
      </div>
    </div>
  );
};

export default Spam;
