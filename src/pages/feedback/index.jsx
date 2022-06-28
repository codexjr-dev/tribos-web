import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";

import FeedbackComponent from "../../components/Feedback";

import {FeedbackData} from "../../data/Data.js";

const Feedback = () => {

    return (

    <div className= {styles.container}>
        
        <div className= {styles.titleArea}>
            <a href="/" className= {styles.returnButton}> <img href= "/" src= {ReturnButton} alt= "Botão de retorno" /> </a>
            <div className= {styles.title}>Feedbacks Gerais</div>
        </div>     

        <div className = {styles.feedbackArea}>

            <FeedbackComponent 
            UserFeedback ={FeedbackData[0].user}
            FeedbackMessage = {FeedbackData[0].feedback}
            FeedbackTime = {FeedbackData[0].time}/> 
            
            <FeedbackComponent 
            UserFeedback ={FeedbackData[1].user}
            FeedbackMessage = {FeedbackData[1].feedback}
            FeedbackTime = {FeedbackData[1].time}/> 

            <FeedbackComponent
            UserFeedback ={FeedbackData[2].user}
            FeedbackMessage = {FeedbackData[2].feedback}
            FeedbackTime = {FeedbackData[2].time}/>

            <FeedbackComponent 
            UserFeedback ={FeedbackData[3].user}
            FeedbackMessage = {FeedbackData[3].feedback}
            FeedbackTime = {FeedbackData[3].time}/>

            <FeedbackComponent UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackComponent UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackComponent UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackComponent UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackComponent UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

        </div>      

    </div>
    )
}

export default Feedback;