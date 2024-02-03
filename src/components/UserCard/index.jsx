import React from 'react'
import styles from "./styles.module.css"
import defaultProfilePic from  "../../assets/images/default-profile-pic.svg"
import { MoreVertical } from 'lucide-react';
import PopoverAction from '../Popover';
import DialogModal from '../Dialog';
import { PopoverClose } from '@radix-ui/react-popover';

function UserCard( { user } ) {


    const banirUser = () => console.log("teste")
    

   const popoverContent = 
     ( <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <PopoverClose style={{border: "none", marginLeft: "-15px"}}><span style={{color: "red", cursor: "pointer"}}  onClick={banirUser} >Banir Usúario</span></PopoverClose>
    
                <DialogModal Trigger={"Enviar mensagem"} user={user}/>
       </div> 
    )

  return (
    <div className={styles.container}>
        <div>
            <img src={user.profilePic.url ?? defaultProfilePic}></img>
        </div>
        <div>
        <div>
          <strong>Nome:</strong> {user.name} 
          <strong> username:</strong> {user.username} 
          <strong> telefone:</strong> {user.phone ?? "Não informado"} 
          <strong> email:</strong> {user.email}
        </div>
        </div>
        <PopoverAction Trigger={<MoreVertical />} Content={popoverContent}/>
    </div>
  )
}


export default UserCard;