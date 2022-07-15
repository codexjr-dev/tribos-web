import styles from "./styles.module.css";
import { useState } from "react";

const Profile = ({Icon, Name, User, Time, Complaints, SetValue}) => {

    return (
      

        <div className= {styles.profileContainer}> 

            <div className= {styles.mainContent}>

                <img src= {Icon} className = {styles.icon} />

                <div className= {styles.nameArea}>
                    <span className= {styles.name}> {Name}</span>
                    <span className= {styles.user}> {User} </span>
                </div>
                
            </div>

            <div className = {styles.actionsContent}>
            <span className = {styles.time}> {Time} </span>
            <span className = {styles.buttons} id = {styles.reply}
                onClick = {(e) => SetValue(true)}> 
                Remover 
            </span>
         
            <span className = {styles.buttons} id = {styles.ignore}           
                onClick = {(e) => SetValue(true)} >
                Ignorar
            </span>

        </div>

        </div>



    );
};

export default Profile;