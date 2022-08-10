import styles from "./styles.module.css";
import DefaultProfilePicture  from "../../assets/images/default-profile-pic.svg";
import {reportTime} from "../../data/Data.js";


const Profile = ({Icon, Name, User, Time, SetValue, SetOperation, SetRoute, Route,
Id, SetId}) => {

    function Action(operation){
        SetOperation(operation);
        SetId(Id);
        SetRoute(Route);
        SetValue(true); 
    }

    return (
    
        <div className= {styles.profileContainer}> 

            <div className= {styles.mainContent}>

                <img src= {Icon == null ? DefaultProfilePicture : Icon} className = {styles.icon} alt= "Ícone"/>

                <div className= {styles.nameArea}>
                    <span className= {styles.name}> {Name}</span>
                    <span className= {styles.user}> {User} </span>
                </div>
                
            </div>

            <div className = {styles.actionsContent}>
                
            <span className = {styles.time}> {reportTime(Time)} </span>
            <span className = {styles.buttons} id = {styles.reply}
                onClick = {(e) => Action("Remover")}> 
                Remover 
            </span>
         
            <span className = {styles.buttons} id = {styles.ignore}           
                onClick = {(e) => Action("Ignorar")} >
                Ignorar
            </span>

        </div>

        </div>

    );
};

export default Profile;