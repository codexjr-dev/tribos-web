import styles from "./styles.module.css";


const Post = ({User, Icon, Image, Time, Subtitle, Complaints, SetValue}) => {

    return(
        
        <div className={styles.postContainer}>
            
        <div className= {styles.mainContent}>

            <div className= {styles.userArea}>
                <img src= {Icon} className = {styles.icon} />
                <span className= {styles.user}> {User}</span>
            </div>


            <div className= {styles.photoAndSubtitle}>
                <img  src = {Image} className = {styles.image} />
                <span className = {styles.subtitle}>     
                {Subtitle}
                </span>

            </div>         

        </div>

        <div className = {styles.actionsContent}>
            
            <span className = {styles.time}> {Time} </span>

            <span className = {styles.buttons} id = {styles.reply} 
            onClick = {(e) => SetValue(true)}> 
            Remover 
            </span>

            <span className = {styles.buttons} id = {styles.ignore}
            onClick = {(e) => SetValue(true)}>
            Ignorar
            </span>
        </div>

        </div>
    );
    
}

export default Post;