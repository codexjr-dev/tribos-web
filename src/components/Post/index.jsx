import styles from "./styles.module.css";
import DefaultProfilePicture from "../../assets/images/default-profile-pic.svg";
import { reportTime } from "../../data/Data.js";
import { VideoPlayer } from "../VideoPlayer";
import Loading from "../Loading";
import { useState } from "react";
import { useRef } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Post = ({
  User,
  Icon,
  Content,
  Time,
  Subtitle,
  SetValue,
  SetOperation,
  SetId,
  Id,
  Route,
  SetRoute,
  extraFooter,
  isAd,
}) => {
  function Action(operation) {
    SetOperation(operation);
    SetId(Id);
    SetRoute(Route);
    SetValue(true);
  }

  const [IsVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleSlideChange = (selectedIndex, e) => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsVideoPlaying(false);
    }
  };


  return (
    <div className={styles.postContainer}>
      <div className={styles.mainContent}>          
        <div className={styles.userArea}> 
        
          <img
            src={Icon == null ? DefaultProfilePicture : Icon}
            className={styles.icon}
            alt="Ícone"
          />
          <span className={styles.user}> {User}</span>
          {isAd && <span className={styles.sponsoredText}>
            <b>Patrocinado</b>
          </span>}
        </div>
        <Carousel controls={Content.length > 1} onSelect={handleSlideChange} interval={IsVideoPlaying ? null : 2500} indicators={IsVideoPlaying ? null : Content.length > 1} >
          {Content.map((value, i) => {
            const isVideo = value.type === "image";

            return <Carousel.Item key={i}>      
              <div className={styles.photoAndSubtitle}>
                {value.type === "image" ? (
                  <img src={value.url} className={styles.image} alt="Imagem" />
                ) : (
                <div className={styles.videoWrapper}>
                  <video  ref={videoRef} src={value.url} controls onPlay={() => setIsVideoPlaying(true)} autoPlay={isVideo} onPause={() => setIsVideoPlaying(false)} className={styles.video}/>
                </div>
                  //<VideoPlayer source={value.url} />
                )}
              </div>
            </Carousel.Item>
          })}
        </Carousel>

        {Subtitle ? (
          <span className={styles.subtitle}>
            <b>{`Descrição: `} </b>
            {`${Subtitle}`}
          </span>
        ) : null}

        {extraFooter ? extraFooter : <></>}
      </div>

      <div className={styles.actionsContent}>
        <span className={styles.time}> {`Há ${reportTime(Time)}`} </span>

        <span
          className={styles.buttons}
          id={styles.reply}
          onClick={(e) => Action("Remover")}
        >
          Remover
        </span>

        <span
          className={styles.buttons}
          id={styles.ignore}
          onClick={(e) => Action("Ignorar")}
        >
          Ignorar
        </span>
      </div>
    </div>
  );
  
 
};

export default Post;
