import styles from "./styles.module.css";
import { getAllReports, getAllReportsByCount, reportPost, reportUser, reportTribo, ignoreReport
    ,removeUser, removePost, removeTribo} from "../../services/api";

const RemoveModal = ({children, SetValue, Operation, Route, Id, }) => {

    async function Actions (){
        if(Operation === "Ignorar"){
            await ignoreReport(Id);
        }
        else if (Route === "Post" && Operation === "Remover"){
            await removePost(Id);
        }
        else if (Route === "User" && Operation === "Remover"){
            await removeUser(Id);
        }
        else if (Route === "Tribo" && Operation === "Remover"){
            await removeTribo(Id);
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
