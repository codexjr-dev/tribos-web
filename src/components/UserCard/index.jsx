import React from 'react'
import styles from "./styles.module.css"
import defaultProfilePic from  "../../assets/images/default-profile-pic.svg"
import { MoreVertical } from 'lucide-react';
import Dialog from '../Dialog';
import PopoverAction from '../Popover';
import DialogModal from '../Dialog';

function UserCard() {
    function userData(){
        return (
            <div>
                
            </div>
        ) 
    }


   const popoverContent = 
     ( <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <span style={{color: "red", cursor: "pointer"}}>Banir Usúario</span>
                <DialogModal Trigger={"Enviar mensagem"} />
             </div> 
    )

  return (
    <div className={styles.container}>
        <div>
            <img src={defaultProfilePic}></img>
        </div>
        <div>
            <div>Nome: Igor Falcão username: cleber telefone: 8398167862 email: igor@gmail.com </div>
        </div>
        <PopoverAction Trigger={<MoreVertical />} Content={popoverContent}/>
    </div>
  )
}


export default UserCard;