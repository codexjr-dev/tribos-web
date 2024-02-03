import React from 'react'
import styles from "./styles.module.css"
import defaultProfilePic from  "../../assets/images/default-profile-pic.svg"
import { MoreVertical } from 'lucide-react';
import Dialog from '../Dialog';
import PopoverAction from '../Popover';

function UserCard() {
    function userData(){
        return (
            <div>
                
            </div>
        ) 
    }


  return (
    <div className={styles.container}>
        <div>
            <img src={defaultProfilePic}></img>
        </div>
        <div>
            <div>Nome: Igor Falcão username: cleber telefone: 8398167862 email: igor@gmail.com </div>
        </div>
        <PopoverAction Trigger={<MoreVertical />}/>
    </div>
  )
}


export default UserCard;