import styles from "./styles.module.css";
import { useState } from "react";
import ReturnButton from "../../assets/icons/return-button.svg";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import PostComponent from "../../components/Post";
import ProfileComponent from "../../components/Profile";
import RemoveModalComponent from "../../components/RemoveModal";
import { getAllReports, getAllReportsByCount, reportPost, reportUser, reportTribo, ignoreReport
,removeUser, removePost, removeTribo} from "../../services/api";
import { reportTime} from "../../data/Data.js";
import { spamOptions, } from "../../util/aux";
import Select from "../../components/Select";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Spam = () => {

    /*
                <div className={styles.test}>
                <button onClick={ () => addPost()}> addPost</button>
                <button onClick={ () => addUser()}> addUser </button>
                <button onClick={ () => addTribo()}>  addTribo</button>
                <button onClick={ () => printar()}>  printar</button>
                <button onClick={ () => delPost()}>  delPost</button>
                <button onClick={ () => delUser()}>  delUser</button>
                <button onClick={ () => delTribo()}>  delTribo</button>
                <button onClick={ () => igReport()}>  ignore</button>           
            </div>

              const addPost = () => {
        addReportPost();
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)        
    }
    
    async function addReportPost(){
        await reportPost("62e1e027c4a2ae571cc1aaaf");            
    }

      const addUser = () => {
          addReportUser();
          console.log(reports)
          console.log(reportsByCount)
          console.log(selectedType)         
        }
    async function addReportUser(){
        await reportUser("62df586f07cb64a11fc4fea7");            
    }

      const addTribo = () => {
          addReportTribo();
          console.log(reports)
          console.log(reportsByCount)
          console.log(selectedType)         
        }

      async function addReportTribo(){
        await reportTribo("62e1dfc7c4a2ae571cc1a6d9");            
    }

    const printar = () => {
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)
        console.log(operation)
        console.log(id)
        console.log(route)
        console.log(reportTime("2022-08-09T16:27:01.567Z"))
      
    }

    const delPost = () => {
        deletarPost();
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)       
    }

    async function deletarPost(){
        await removePost("626324ebba865e7e12cab126");            
    }

     const delUser = () => {
        deletarUser();
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)       
    }

    async function deletarUser(){
        await removeUser("62df6f23409ae9988db7e046");            
    }

    const delTribo = () => {
        deletarTribo();
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)       
    }

    async function deletarTribo(){
        await removeTribo("62df6f38409ae9988db7e055");            
    }

    const igReport = () => {
        ignorarReport();
        console.log(reports)
        console.log(reportsByCount)
        console.log(selectedType)       
    }

    async function ignorarReport(){
        await ignoreReport("62df51c507cb64a11fc4fe44");            
    }     
    */

    const [selectedType, setSelectedType] = useState("time"); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMostRecent, setIsMostRecent] = useState(true);
    const [reports, setReports] = useState([]);
    const [reportsByCount, setReportsByCount] = useState([]);
    const [route, setRoute] = useState("");
    const [operation, setOperation] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {  
        verifySelectedType();
        getArray();

    }, [selectedType, reports, reportsByCount]);

    const getArray = () => {
        getReportsByCount();    
        getReports();
    }

    async function getReports(){
        const reportsData = await getAllReports();
        setReports(reportsData.reports);       
    }

    async function getReportsByCount(){
        const reportsDataByCount = await getAllReportsByCount();
        setReportsByCount(reportsDataByCount.reports);       
    }

    function verifySelectedType(){
        if(selectedType === "time"){
            setIsMostRecent(true);
        } else{
            setIsMostRecent(false);
        }
    }

    const navigate = useNavigate();
  
    return(  
        <div className= {styles.container}>
               
               <header>
                    { 
                    
                    isModalVisible ?
                    <div className={styles.titleOpacity}>
                        <img src={LeftArrowIcon} alt="Voltar" />
                        <h2> Spam ou Abusos </h2>
                    </div> 
                    :
                    <div onClick={() => navigate('/dashboard')}>
                        <img src={LeftArrowIcon} alt="Voltar" />
                        <h2> Spam ou Abusos </h2>
                    </div> 
                    
                    }
                </header>

            {isModalVisible ? <RemoveModalComponent
                        SetValue = {setIsModalVisible}
                        Operation = {operation}
                        Route = {route}
                        Id = {id}
                        >                   
                        </RemoveModalComponent> : null}  
            
            <div className= {isModalVisible ? styles.spamAreaOpacity : styles.spamArea}>
    
            <Select
                fieldName="type"
                optionsList={spamOptions}
                setValue={setSelectedType}
                value={selectedType}
            />

                { isMostRecent ?
                reports.reverse().map((value) => {
                    if( value.type === "Post"){
                        return <PostComponent 
                        User ={value.reported.tribo.username}
                        Icon = {value.reported.tribo.profilePic.url}
                        Time = {value.updatedAt}
                        Content = {value.reported.content[0].url}
                        Subtitle = {value.reported.text}
                        ContentType= {value.reported.content[0].type}
                        SetValue = {setIsModalVisible}
                        SetOperation = {setOperation}
                        SetRoute = {setRoute}
                        Route = {value.type}
                        Id = {value._id}
                        SetId = {setId}
                    /> 
                    }
                    else{
                        return <ProfileComponent 
                        User ={value.reported.username}
                        Icon = {value.reported.profilePic.url}
                        Time = {value.updatedAt}
                        Name = {value.reported.name}
                        SetValue = {setIsModalVisible}
                        SetOperation = {setOperation}
                        SetRoute = {setRoute}
                        Route = {value.type}
                        Id = {value._id}
                        SetId = {setId}
                    /> 
                    }
                }) : reportsByCount.map((value) => {
                    if( value.type === "Post"){
                        return <PostComponent 
                        User ={value.reported.tribo.username}
                        Icon = {value.reported.tribo.profilePic.url}
                        Time = {value.updatedAt}
                        Content = {value.reported.content[0].url}
                        Subtitle = {value.reported.text}
                        ContentType= {value.reported.content[0].type}
                        SetValue = {setIsModalVisible}
                        SetOperation = {setOperation}
                        SetRoute = {setRoute}
                        Route = {value.type}
                        Id = {value._id}
                        SetId = {setId}
                    /> 
                    }
                    else{
                        return <ProfileComponent 
                        User ={value.reported.username}
                        Icon = {value.reported.profilePic.url}
                        Time = {value.updatedAt}
                        Name = {value.reported.name}
                        SetValue = {setIsModalVisible}
                        SetOperation = {setOperation}
                        SetRoute = {setRoute}
                        Route = {value.type}
                        Id = {value._id}
                        SetId = {setId}
                    /> 
                    }
                })
            }    
        
            </div>         
        </div>
    

    )
}

export default Spam;


