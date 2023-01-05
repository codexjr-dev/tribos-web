import styles from "./styles.module.css";
import DefaultProfilePicture from "../../assets/images/default-profile-pic.svg";
import { reportTime } from "../../data/Data.js";
import { VideoPlayer } from "../VideoPlayer";
import Loading from "../Loading";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Post = ({
  User,
  Icon,
  Content0,
  Content1,
  Content2,
  Content3,
  Content4,
  Time,
  Subtitle,
  SetValue,
  ContentType0,
  ContentType1,
  ContentType2,
  ContentType3,
  ContentType4,
  SetOperation,
  SetId,
  Id,
  Route,
  SetRoute,
  Length,
}) => {
  function Action(operation) {
    SetOperation(operation);
    SetId(Id);
    SetRoute(Route);
    SetValue(true);
  }

  console.log("length do post é: ", Length)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if(Length === 1){
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
          </div>
         
             
          <div className={styles.photoAndSubtitle}>
            {ContentType0 === "image" ? (
              <img src={Content0} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content0} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
         
         
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
  } else if (Length === 2){
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
            </div>
            <Carousel>
            <Carousel.Item >      
            <div className={styles.photoAndSubtitle}>
              {ContentType0 === "image" ? (
                <img src={Content0} className={styles.image} alt="Imagem" />
              ) : (
                <VideoPlayer source={Content0} />
              )}
             
              {Subtitle ? (
                <span className={styles.subtitle}>
                  <b>{`Descrição: `} </b>
                  {`${Subtitle}`}
                </span>
              ) : null}
            </div>
            </Carousel.Item>
            <Carousel.Item>      
            <div className={styles.photoAndSubtitle}>
              {ContentType1 === "image" ? (
                <img src={Content1} className={styles.image} alt="Imagem" />
              ) : (
                <VideoPlayer source={Content1} />
              )}
             
              {Subtitle ? (
                <span className={styles.subtitle}>
                  <b>{`Descrição: `} </b>
                  {`${Subtitle}`}
                </span>
              ) : null}
            </div>
            </Carousel.Item>
            </Carousel>
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
    
  } else if (Length === 3) {
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
          </div>
          <Carousel>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType0 === "image" ? (
              <img src={Content0} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content0} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType1 === "image" ? (
              <img src={Content1} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content1} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType2 === "image" ? (
              <img src={Content2} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content2} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          </Carousel>
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
  } else if (Length === 4) {
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
          </div>
          <Carousel>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType0 === "image" ? (
              <img src={Content0} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content0} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType1 === "image" ? (
              <img src={Content1} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content1} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType2 === "image" ? (
              <img src={Content2} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content2} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType3 === "image" ? (
              <img src={Content3} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content3} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          </Carousel>
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
  } 
  else { // Length == 5
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
          </div>
          <Carousel touch= {false} pause = "hover" >
          <Carousel.Item > 
            
          <div className={styles.photoAndSubtitle} prevIcon = {null}>
            {ContentType0 === "image" ? (
              <img src={Content0} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content0} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item >      
          <div className={styles.photoAndSubtitle}>
            {ContentType1 === "image" ? (
              <img src={Content1} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content1} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType2 === "image" ? (
              <img src={Content2} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content2} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType3 === "image" ? (
              <img src={Content3} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content3} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          <Carousel.Item>      
          <div className={styles.photoAndSubtitle}>
            {ContentType4 === "image" ? (
              <img src={Content4} className={styles.image} alt="Imagem" />
            ) : (
              <VideoPlayer source={Content4} />
            )}
           
            {Subtitle ? (
              <span className={styles.subtitle}>
                <b>{`Descrição: `} </b>
                {`${Subtitle}`}
              </span>
            ) : null}
          </div>
          </Carousel.Item>
          </Carousel>
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
  }
 
};

export default Post;
