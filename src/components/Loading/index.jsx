import styles from "./styles.module.css";
import LoadingIcon  from "../../assets/icons/loading-icon.svg";


const Loading = () => {
    return(
        <div className={styles.loaderContainer}>
            
            <img className = {styles.loader} src = {LoadingIcon} alt = "Loading" />
                       
        </div>
    )
    

}

export default Loading;