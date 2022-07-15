import styles from "./styles.module.css";
import { useState } from "react";
import ReturnButton from "../../assets/icons/return-button.svg";
import PostComponent from "../../components/Post";
import ProfileComponent from "../../components/Profile";
import RemoveModalComponent from "../../components/RemoveModal";
import { getAllReports } from "../../services/api";
import {PostData, ProfileData} from "../../data/Data.js";
import { spamOptions, } from "../../util/aux";
import Select from "../../components/Select";
import { useEffect } from "react";


const Spam = () => {

    const [selectedType, setSelectedType] = useState("time"); 
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [reports, setReports] = useState([]);

    useEffect(() => {
      async function getReports(){
        const reportsData = await getAllReports();
        setReports(reportsData.reports);
      }
      
      getReports();
    }, []);


    const printar = () => {
        console.log(reports[2].reported.tribo.username)
    }
    

    return(
  
    <div className= {styles.container}>

        <button onClick={ () => printar()}> </button>
             
        <div className= {isModalVisible ? styles.titleAreaOpacity : styles.titleArea}>           
            <a href="/" className= {styles.returnButton}> <img  src= {ReturnButton} alt= "Botão de retorno" /> </a> 
            <div className= {styles.title}>Spam ou Abusos</div>
        </div>

        {isModalVisible ? <RemoveModalComponent
                    SetValue = {setIsModalVisible}
                    >
                    ignorar</RemoveModalComponent> : null}  
        
        <div className= {isModalVisible ? styles.spamAreaOpacity : styles.spamArea}>
 
        <Select
              fieldName="type"
              optionsList={spamOptions}
              setValue={setSelectedType}
              value={selectedType}
        />

        <PostComponent 
            User = {reports[2].reported.tribo.username || null}
            Icon = {PostData[0].icon}
            Time = {PostData[0].time}
            Image = {PostData[0].image}
            Subtitle = {PostData[0].subtitle}
            Complaints = {PostData[0].complaints}
            SetValue = {setIsModalVisible}
        />        

        <PostComponent 
            User ={PostData[0].user}
            Icon = {PostData[0].icon}
            Time = {PostData[0].time}
            Image = {PostData[0].image}
            Subtitle = {PostData[0].subtitle}
            Complaints = {PostData[0].complaints}
            SetValue = {setIsModalVisible}
        /> 

        <PostComponent 
            User ={PostData[0].user}
            Icon = {PostData[0].icon}
            Time = {PostData[0].time}
            Image = {PostData[0].image}
            Subtitle = {PostData[0].subtitle}
            Complaints = {PostData[0].complaints}
            SetValue = {setIsModalVisible}           
        /> 

        <ProfileComponent 
            User ={ProfileData[0].user}
            Icon = {ProfileData[0].icon}
            Time = {ProfileData[0].time}
            Name = {ProfileData[0].name}
            Complaints = {ProfileData[0].complaints}
            SetValue = {setIsModalVisible}           
        /> 

        <ProfileComponent 
            User ={ProfileData[1].user}
            Icon = {ProfileData[1].icon}
            Time = {ProfileData[1].time}
            Name = {ProfileData[1].name}
            Complaints = {ProfileData[1].complaints}
            SetValue = {setIsModalVisible}         
        /> 

        </div>         

    </div>

    )
}

export default Spam;