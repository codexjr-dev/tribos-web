import React from 'react'
import styles from "./styles.module.css"
import defaultProfilePic from  "../../assets/images/default-profile-pic.svg"
import { MoreVertical } from 'lucide-react';
import Dialog from '../Dialog';
import PopoverAction from '../Popover';
import DialogModal from '../Dialog';

function UserCard( { user } ) {


    const banirUser = () => console.log("teste")
    

   const popoverContent = 
     ( <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <span style={{color: "red", cursor: "pointer"}}  onClick={banirUser} >Banir Usúario</span>
    

                <DialogModal Trigger={"Enviar mensagem"} />
       </div> 
    )

  return (
    <div className={styles.container}>
        <div>
            <img src={defaultProfilePic}></img>
        </div>
        <div>
            <div>Nome: {user.name} username: {user.username} telefone: {user.phone ?? "Não informado"} email: {user.email}</div>
        </div>
        <PopoverAction Trigger={<MoreVertical />} Content={popoverContent}/>
    </div>
  )
}


export default UserCard;