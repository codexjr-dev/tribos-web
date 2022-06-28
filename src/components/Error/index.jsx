import styles from "./styles.module.css";

const Error = ({UserError, ErrorMessage, ErrorTime, ErrorImage}) => {

    return (
        
        <div className= {styles.errorContainer}>

        <div className= {styles.mainContent}>

            <span className = {styles.message}> <span id= {styles.user}> {UserError} </span>  
            {ErrorMessage}
            {ErrorImage ? <img src= {ErrorImage} className = {styles.image}/> : null}
            </span>
            
        </div>

        <div className = {styles.actionsContent}>
            <span className = {styles.time}> {ErrorTime} </span>
            <span className = {styles.buttons} id = {styles.reply} 
            onClick = { () => {
                window.alert("Abre form pra enviar resposta");
            } 
              }> Responder </span>
            <span className = {styles.buttons} id = {styles.ignore}>Ignorar</span>
        </div>
            
        </div>
    )
}

export default Error;