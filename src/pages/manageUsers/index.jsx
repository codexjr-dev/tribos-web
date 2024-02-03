import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import UserCard from '../../components/UserCard';
import { getAllUsers } from '../../services/api';
import { set } from 'date-fns';

function ManageUsers() {

    const navigate = useNavigate();

    const [globalMsg, setGlobalMsg] = useState();
    const [searchUser, setSearchUser] = useState("");
    const [usersList, setUsersList] = useState([]);

    useEffect( async () => {
        const { data: users } = await getAllUsers();
        setUsersList(users.personals);
    }, [])

    const sendGlobalMsg = () => {

    }

    const filterUsers = (user) => {
        const searchText = searchUser.toLowerCase();


        return (
            user.name?.toLowerCase().startsWith(searchText) ||
            user.username?.toLowerCase().startsWith(searchText) ||
            user.phone?.toLowerCase().startsWith(searchText)
        );
    };

    const usersListFiltered = usersList.filter((item) => filterUsers(item))


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
                <button onClick={sendGlobalMsg} style={{height: "23px"}}>Enviar</button>
            </div>
            <div style={{marginTop:  "40px"}}>
                <hr style={{border: "1px solid black"}}/>
            </div>
            <div className={styles.UsersContainer}>
                <div className={styles.globalMsgContainer}>
                    <label>Pesquisar usúario</label>
                    <div className={styles.inputWrapper}>
                        <input className={styles.inputCalendar} style={{height: "20px"}} onChange={(e) => setSearchUser(e.target.value)}></input>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {
                        usersListFiltered?.map((item, index) => (
                            <UserCard user={item} key={index}/>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageUsers