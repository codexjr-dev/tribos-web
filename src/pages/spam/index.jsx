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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log(reports)
  }, [selectedType]);

  return (
    <div className={styles.container}>
      <header style={{marginBottom: '3rem'}}>
        {isModalVisible ? (
          <div className={styles.titleOpacity}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Spam ou Abusos </h2>
          </div>
        ) : (
          <div onClick={() => navigate("/dashboard")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Spam ou Abusos </h2>
          </div>
        )}
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

        {(
          reports.map((value) => {
            if (value.type === "Post") {
              
              console.log(value)
              console.log(value.reported.content.length)

              if (value.reported.content.length === 1){
                return (
                  <PostComponent
                    key={value._id}
                    User={value.reported.tribo.username}
                    Icon={value.reported.tribo.profilePic.url}
                    Time={value.updatedAt}
                    Content0={value.reported.content[0].url}
                    Subtitle={value.reported.text}
                    ContentType0={value.reported.content[0].type}
                    SetValue={setIsModalVisible}
                    SetOperation={setOperation}
                    SetRoute={setRoute}
                    Route={value.type}
                    Id={value._id}
                    SetId={setId}
                    Length = {value.reported.content.length}
                  />
                )
              } else if (value.reported.content.length === 2){
                return (
                  <PostComponent
                    key={value._id}
                    User={value.reported.tribo.username}
                    Icon={value.reported.tribo.profilePic.url}
                    Time={value.updatedAt}
                    Content0={value.reported.content[0].url}
                    Content1={value.reported.content[1].url}
                    Subtitle={value.reported.text}
                    ContentType0={value.reported.content[0].type}
                    ContentType1={value.reported.content[1].type}
                    SetValue={setIsModalVisible}
                    SetOperation={setOperation}
                    SetRoute={setRoute}
                    Route={value.type}
                    Id={value._id}
                    SetId={setId}
                    Length = {value.reported.content.length}
                  />
                )
              } 

              else if (value.reported.content.length === 3){
                return (
                  <PostComponent
                    key={value._id}
                    User={value.reported.tribo.username}
                    Icon={value.reported.tribo.profilePic.url}
                    Time={value.updatedAt}
                    Content0={value.reported.content[0].url}
                    Content1={value.reported.content[1].url}
                    Content2={value.reported.content[2].url}
                    Subtitle={value.reported.text}
                    ContentType0={value.reported.content[0].type}
                    ContentType1={value.reported.content[1].type}
                    ContentType2={value.reported.content[2].type}
                    SetValue={setIsModalVisible}
                    SetOperation={setOperation}
                    SetRoute={setRoute}
                    Route={value.type}
                    Id={value._id}
                    SetId={setId}
                    Length = {value.reported.content.length}
                  />
                )
              } 
              else if (value.reported.content.length === 4){
                return (
                  <PostComponent
                    key={value._id}
                    User={value.reported.tribo.username}
                    Icon={value.reported.tribo.profilePic.url}
                    Time={value.updatedAt}
                    Content0={value.reported.content[0].url}
                    Content1={value.reported.content[1].url}
                    Content2={value.reported.content[2].url}
                    Content3={value.reported.content[3].url}
                    Subtitle={value.reported.text}
                    ContentType0={value.reported.content[0].type}
                    ContentType1={value.reported.content[1].type}
                    ContentType2={value.reported.content[2].type}
                    ContentType3={value.reported.content[3].type}
                    SetValue={setIsModalVisible}
                    SetOperation={setOperation}
                    SetRoute={setRoute}
                    Route={value.type}
                    Id={value._id}
                    SetId={setId}
                    Length = {value.reported.content.length}
                  />
                )
              } 
              else if (value.reported.content.length === 5){
                return (
                  <PostComponent
                    key={value._id}
                    User={value.reported.tribo.username}
                    Icon={value.reported.tribo.profilePic.url}
                    Time={value.updatedAt}
                    Content0={value.reported.content[0].url}
                    Content1={value.reported.content[1].url}
                    Content2={value.reported.content[2].url}
                    Content3={value.reported.content[3].url}
                    Content4={value.reported.content[4].url}                   
                    Subtitle={value.reported.text}
                    ContentType0={value.reported.content[0].type}
                    ContentType1={value.reported.content[1].type}
                    ContentType2={value.reported.content[2].type}
                    ContentType3={value.reported.content[3].type}
                    ContentType4={value.reported.content[4].type}
                    SetValue={setIsModalVisible}
                    SetOperation={setOperation}
                    SetRoute={setRoute}
                    Route={value.type}
                    Id={value._id}
                    SetId={setId}
                    Length = {value.reported.content.length}
                  />
                )
              } 
            } else if (value.type === 'User' || value.type == 'Tribo') {
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
                />
              );
            } else if (value.type === 'Announcement') {
              return <PostComponent
                key={value._id}
                User={value.reported.tribo.username}
                Icon={value.reported.tribo.profilePic.url}
                Time={value.updatedAt}
                Content0={value.reported.content.url}
                Subtitle={value.reported.text}
                ContentType0={value.reported.content.type}
                SetValue={setIsModalVisible}
                SetOperation={setOperation}
                SetRoute={setRoute}
                Route={value.type}
                Id={value._id}
                SetId={setId}
                Length = {1}
              />
            } else {
              return <p style={{color: "red"}}>?</p>
            }
          })
        )}
      </div>
    </div>
  );
};

export default Spam;
