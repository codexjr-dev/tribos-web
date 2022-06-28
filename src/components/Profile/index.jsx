import styles from "./styles.module.css";

const Profile = ({Icon, Name, User, Time, Complaints}) => {
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
            onClick = { () => {
                window.alert("Abre form pra enviar resposta");
            } 
              }> Remover </span>
            <span className = {styles.buttons} id = {styles.ignore}>Ignorar</span>

        </div>

        </div>



    );
};

export default Profile;