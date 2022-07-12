import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";
import PostComponent from "../../components/Post";
import ProfileComponent from "../../components/Profile";

import { PostData, ProfileData } from "../../data/Data.js";
import { useEffect } from "react";
import { useState } from "react";
import { getAllReports } from "../../services/api";

const Spam = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function getReports() {
      const reportsData = await getAllReports();
      setReports(reportsData.reports);
    }

    getReports();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <a href="/" className={styles.returnButton}>
          {" "}
          <img src={ReturnButton} alt="Botão de retorno" />{" "}
        </a>
        <div className={styles.title}>Spam ou Abusos</div>
      </div>
      
      <div className={styles.spamArea}>
        <PostComponent
          User={PostData[0].user}
          Icon={PostData[0].icon}
          Time={PostData[0].time}
          Image={PostData[0].image}
          Subtitle={PostData[0].subtitle}
          Complaints={PostData[0].complaints}
        />

        <PostComponent
          User={PostData[0].user}
          Icon={PostData[0].icon}
          Time={PostData[0].time}
          Image={PostData[0].image}
          Subtitle={PostData[0].subtitle}
          Complaints={PostData[0].complaints}
        />

        <PostComponent
          User={PostData[0].user}
          Icon={PostData[0].icon}
          Time={PostData[0].time}
          Image={PostData[0].image}
          Subtitle={PostData[0].subtitle}
          Complaints={PostData[0].complaints}
        />

        <ProfileComponent
          User={ProfileData[0].user}
          Icon={ProfileData[0].icon}
          Time={ProfileData[0].time}
          Name={ProfileData[0].name}
          Complaints={ProfileData[0].complaints}
        />

        <ProfileComponent
          User={ProfileData[1].user}
          Icon={ProfileData[1].icon}
          Time={ProfileData[1].time}
          Name={ProfileData[1].name}
          Complaints={ProfileData[1].complaints}
        />
      </div>
    </div>
  );
};

export default Spam;
