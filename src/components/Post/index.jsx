import styles from "./styles.module.css";
import DefaultProfilePicture  from "../../assets/images/default-profile-pic.svg";


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
                <img src= {Icon == null ? DefaultProfilePicture : Icon} className = {styles.icon} />
                <span className= {styles.user}> {User}</span>
            </div>


            <div className= {styles.photoAndSubtitle}>
            
            {ContentType === "image" ? <img  src = {Content} className = {styles.image} />
            : <video  src = {Content} className = {styles.video} />}         
                
                <span className = {styles.subtitle}>     
                {Subtitle}
                </span>

            </div>         

        </div>

        <div className = {styles.actionsContent}>
            
            <span className = {styles.time}> {Time} </span>

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