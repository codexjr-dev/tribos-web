import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";

const Spam = () => {
    return(

    <div className= {styles.container}>

        <div className= {styles.titleArea}>
            <img src= {ReturnButton} alt= "Botão de retorno" /> 
            <div className= {styles.title}>Spam ou Abusos</div>
        </div>             

    </div>
    )
}

export default Spam;