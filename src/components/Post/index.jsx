import styles from "./styles.module.css";
import DefaultProfilePicture  from "../../assets/images/default-profile-pic.svg";
import {reportTime} from "../../data/Data.js";


const Post = ({User, Icon, Content, Time, Subtitle,  SetValue, ContentType,
SetOperation, SetId, Id, Route, SetRoute}) => {
    
    function Action(operation){
        SetOperation(operation);
        SetId(Id);
        SetRoute(Route);
        SetValue(true); 
    }

    return(
        
        <div className={styles.postContainer}>
            
        <div className= {styles.mainContent}>

            <div className= {styles.userArea}>
                <img src= {Icon == null ? DefaultProfilePicture : Icon} className = {styles.icon} alt = "Ícone"/>
                <span className= {styles.user}> {User}</span>
            </div>


            <div className= {styles.photoAndSubtitle}>
            
            {ContentType === "image" ? <img  src = {Content} className = {styles.image} alt = "Imagem" />
            : <video  src = {Content} className = {styles.video} />}         
                
                <span className = {styles.subtitle}>     
                {Subtitle}
                </span>

            </div>         

        </div>

        <div className = {styles.actionsContent}>
            
            <span className = {styles.time}> {reportTime(Time)} </span>

            <span className = {styles.buttons} id = {styles.reply} 
            onClick = {(e) => Action("Remover")}
            > 
            Remover 
            </span>

            <span className = {styles.buttons} id = {styles.ignore}
            onClick = {(e) => Action("Ignorar")
            }>
            Ignorar
            </span>
        </div>

        </div>
    );
    
}

export default Post;