import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";

import FeedbackContainer from "../../components/Feedback";

import {FeedbackData} from "../../data/Data.js";

const Feedback = () => {

    return (

    <div className= {styles.container}>

        <div className= {styles.titleArea}>

            <img src= {ReturnButton} alt= "Botão de retorno"  /> 
            <div className= {styles.title}>Feedbacks Gerais</div>

        </div>     

        <div className = {styles.feedbackArea}>

            <FeedbackContainer 
            UserFeedback ={FeedbackData[0].user}
            FeedbackMessage = {FeedbackData[0].feedback}
            FeedbackTime = {FeedbackData[0].time}/> 
            
            <FeedbackContainer 
            UserFeedback ={FeedbackData[1].user}
            FeedbackMessage = {FeedbackData[1].feedback}
            FeedbackTime = {FeedbackData[1].time}/> 

            <FeedbackContainer
            UserFeedback ={FeedbackData[2].user}
            FeedbackMessage = {FeedbackData[2].feedback}
            FeedbackTime = {FeedbackData[2].time}/>

            <FeedbackContainer 
            UserFeedback ={FeedbackData[3].user}
            FeedbackMessage = {FeedbackData[3].feedback}
            FeedbackTime = {FeedbackData[3].time}/>

            <FeedbackContainer UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackContainer UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackContainer UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackContainer UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

            <FeedbackContainer UserFeedback ={FeedbackData[4].user}
            FeedbackMessage = {FeedbackData[4].feedback}
            FeedbackTime = {FeedbackData[4].time}/>

        </div>      

    </div>
    )
}

export default Feedback;