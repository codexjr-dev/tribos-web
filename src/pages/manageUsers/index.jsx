import React, { useState } from 'react'
import styles from "./styles.module.css";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import UserCard from '../../components/UserCard';

function ManageUsers() {

    const navigate = useNavigate();

    const [globalMsg, setGlobalMsg] = useState()

    const sendGlobalMsg = () => {

    }

    return (
        <div className={styles.container}>
            <header style={{marginBottom: '3rem'}}>
                <div onClick={() => navigate("/dashboard/day")}>
                    <img src={LeftArrowIcon} alt="Voltar" />
                    <h2> Gerenciar usúarios </h2>
                </div>
            </header>
            <div className={styles.globalMsgContainer}>
                <label>Mensagem Global</label>
                <div className={styles.inputWrapper}>
                    <textarea className={styles.inputCalendar} onChange={(e) => setGlobalMsg(e.target.value)}></textarea>
                    <span>Preencha o campo</span>
                </div>
                <button onClick={sendGlobalMsg}>Enviar</button>
            </div>
            <div style={{marginTop:  "40px"}}>
                <hr style={{border: "1px solid black"}}/>
            </div>
            <div className={styles.UsersContainer}>
                <div className={styles.globalMsgContainer}>
                    <label>Pesquisar usúario</label>
                    <div className={styles.inputWrapper}>
                        <input className={styles.inputCalendar} style={{height: "40px"}} onChange={(e) => setGlobalMsg(e.target.value)}></input>
                        <span>Preencha o campo</span>
                    </div>
                    <button onClick={sendGlobalMsg} style={{height: "43px"}} >Buscar</button>
                </div>
                <div className={styles.cardContainer}>
                    <UserCard />
                    <UserCard />
                </div>
            </div>
        </div>
    )
}

export default ManageUsers