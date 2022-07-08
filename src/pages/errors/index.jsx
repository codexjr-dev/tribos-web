import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";

import ErrorComponent from "../../components/Error";

import {ErrorData} from "../../data/Data.js";

const Errors = () => {

    return (

        <div className= {styles.container}>

            <div className= {styles.titleArea}>
               <a href="/" className= {styles.returnButton}> <img src= {ReturnButton} alt= "Botão de retorno" /> </a>
                <div className= {styles.title}>Erros no Sistema</div>
            </div>

            <div className= {styles.errorArea}>

                <ErrorComponent 
                UserError ={ErrorData[0].user}
                ErrorMessage = {ErrorData[0].feedback}
                ErrorTime = {ErrorData[0].time}
                ErrorImage = {ErrorData[0].image}/>

                <ErrorComponent 
                UserError ={ErrorData[1].user}
                ErrorMessage = {ErrorData[1].feedback}
                ErrorTime = {ErrorData[1].time}
                ErrorImage = {ErrorData[1].image}/>

                <ErrorComponent 
                UserError ={ErrorData[0].user}
                ErrorMessage = {ErrorData[0].feedback}
                ErrorTime = {ErrorData[0].time}
                ErrorImage = {ErrorData[0].image}/>

                <ErrorComponent 
                UserError ={ErrorData[1].user}
                ErrorMessage = {ErrorData[1].feedback}
                ErrorTime = {ErrorData[1].time}
                ErrorImage = {ErrorData[1].image}/>

            
              
            </div>        
        

        </div>
        
    )

}

export default Errors;