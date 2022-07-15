import styles from "./styles.module.css";

const RemoveModal = ({children, SetValue}) => {
    return (
        <div className= {styles.box}>

            <span className= {styles.title}>Tem certeza disso?</span>

                <div className= {styles.buttons}>
                    
                    <button className={styles.noButton} 
                    onClick = {(e) => SetValue(false)}>
                        Não
                    </button>

                    <button className={styles.yesButton} >
                        Sim
                    </button>

                </div>    
        
        </div>
    )
}

export default RemoveModal;
