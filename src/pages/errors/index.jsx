import styles from "./styles.module.css";
import ReturnButton from "../../assets/icons/return-button.svg";

const Errors = () => {

    return (

        <div className= {styles.container}>

            <div className= {styles.titleArea}>
                <img src= {ReturnButton} alt= "Botão de retorno" /> 
                <div className= {styles.title}>Erros no Sistema</div>
            </div>         
        

        </div>
        
    )

}

export default Errors;