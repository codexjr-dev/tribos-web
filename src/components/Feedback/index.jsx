import styles from "./styles.module.css";

const Feedback = ({UserFeedback, FeedbackMessage, FeedbackTime }) => {
    return (

        <div className= {styles.feedbackContainer}>

        <div className= {styles.mainContent}>
            <span className= {styles.message}> <span id= {styles.user}> {UserFeedback} </span>  
            {FeedbackMessage} </span>
        </div>
        
        <div className = {styles.actionsContent}>
            <span className = {styles.time}> {FeedbackTime} </span>
            <span className = {styles.buttons} id = {styles.reply} 
            onClick = { () => {
                window.alert("Abre form pra enviar resposta");
            } 
              }> Responder </span>
            <span className = {styles.buttons} id = {styles.ignore}>Ignorar</span>
        </div>
        
        </div>
    );
};

export default Feedback;

