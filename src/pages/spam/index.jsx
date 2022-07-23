import styles from "./styles.module.css";
import { useState } from "react";
import ReturnButton from "../../assets/icons/return-button.svg";
import PostComponent from "../../components/Post";
import ProfileComponent from "../../components/Profile";
import RemoveModalComponent from "../../components/RemoveModal";
import { getAllReports, getAllReportsByCount } from "../../services/api";
import {PostData, ProfileData} from "../../data/Data.js";
import { spamOptions, } from "../../util/aux";
import Select from "../../components/Select";
import { useEffect } from "react";


const Spam = () => {

    const [selectedType, setSelectedType] = useState("time"); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMostRecent, setIsMostRecent] = useState(true);

    const [reports, setReports] = useState([]);
    const [reportsByCount, setReportsByCount] = useState([]);


    useEffect(() => { 
               
      async function getReports(){
        const reportsData = await getAllReports();
        setReports(reportsData.reports);
      }

      async function getReportsByCount(){
        const reportsDataByCount = await getAllReportsByCount();
        setReportsByCount(reportsDataByCount.reportsByCount);
      }
      
      getReportsByCount();    
      getReports();
    }, []);



    const printar = () => {
        console.log(reports)
        console.log(reportsByCount)     
        
    }


    useEffect(() => {
        async function showReports(){           
        }
        
        showReports();
      }, []);
  

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

        <div>

        </div>
        
        { isMostRecent ?
        reports.reverse().map((value) => {
                if( value.type === "Post"){
                    return <PostComponent 
                    User ={value.reported.tribo.username}
                    Icon = {value.reported.tribo.profilePic.url}
                    Time = {PostData[0].time}
                    Image = {value.reported.content[0].url}
                    Subtitle = {value.reported.text}
                    Complaints = {value.reported.reportsQty}
                    SetValue = {setIsModalVisible}
                /> 
                }
                else{
                    return <ProfileComponent 
                    User ={value.reported.username}
                    Icon = {value.reported.profilePic.url}
                    Time = {ProfileData[0].time}
                    Name = {value.reported.name}
                    Complaints = {value.reported.reportsQty}
                    SetValue = {setIsModalVisible} 
                /> 
                }
            }) : reportsByCount.map((value) => {
                if( value.type === "Post"){
                    return <PostComponent 
                    User ={value.reported.tribo.username}
                    Icon = {value.reported.tribo.profilePic.url}
                    Time = {PostData[0].time}
                    Image = {value.reported.content[0].url}
                    Subtitle = {value.reported.text}
                    Complaints = {value.reported.reportsQty}
                    SetValue = {setIsModalVisible}
                /> 
                }
                else{
                    return <ProfileComponent 
                    User ={value.reported.username}
                    Icon = {value.reported.profilePic.url}
                    Time = {ProfileData[0].time}
                    Name = {value.reported.name}
                    Complaints = {value.reported.reportsQty}
                    SetValue = {setIsModalVisible} 
                /> 
                }
            })
        }
        

        <PostComponent 
            User = {reports.map((value,index) => {
                if( index === 2){
                    return value.reported.tribo.username;
                }
            })
            }
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