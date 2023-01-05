import styles from "./styles.module.css";
import {  ignoreReport ,removeUser, removePost, removeTribo} from "../../services/api";

const RemoveModal = ({ SetValue, Operation, Route, Id, }) => {

    async function Actions (){
        if(Operation === "Ignorar"){
            await ignoreReport(Id);
            window.location.reload()
        }
        else if (Route === "Post" && Operation === "Remover"){
            await removePost(Id);
            window.location.reload()
        }
        else if (Route === "User" && Operation === "Remover"){
            await removeUser(Id);
            window.location.reload()
        }
        else if (Route === "Tribo" && Operation === "Remover"){
            await removeTribo(Id);
            window.location.reload()
        }
        SetValue(false);
    }

    return (
        <div className= {styles.box}>

            <span className= {styles.title}>Tem certeza disso?</span>

                <div className= {styles.buttons}>
                    
                    <button className={styles.noButton} 
                    onClick = {(e) => SetValue(false)}>
                        Não
                    </button>

                    <button className={styles.yesButton} 
                    onClick = {(e) => Actions()}>
                        Sim
                    </button>

                </div>    
        
        </div>
    )
}

export default RemoveModal;
