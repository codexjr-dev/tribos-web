import React, { useState } from 'react'
import styles from "./styles.module.css"
import defaultProfilePic from  "../../assets/images/default-profile-pic.svg"
import { MoreVertical } from 'lucide-react';
import PopoverAction from '../Popover';
import DialogModal from '../Dialog';
import { PopoverClose } from '@radix-ui/react-popover';
import * as Dialog from '@radix-ui/react-dialog';
import { AdmNotifyUser, BanUser } from '../../services/api';

function UserCard( { user, updateUserList } ) {

    const [message, setMessage] = useState(null);

    const updateBannedStatus = async () =>{
      const response = await BanUser(user._id, !user.banned)
      updateUserList()
    }
    

    const notifyUser = async () => {
      if(message){
        const response = await AdmNotifyUser(user._id, message);
        setMessage(null)
      }
    }

    const dialogContent = (<>
       <fieldset className="Fieldset">
          <label className="Label" htmlFor="mensagem">
            Mensagem
          </label>
          <div className={styles.messageContainer}>
            <textarea className="Textarea" id="mensagem"  value={message} onChange={(e) => setMessage(e.target.value)} />
            <span> {message ? "" : 'Preencha o campo' }</span> 
          </div>
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button  className="Button green" onClick={notifyUser} disabled={message ? false : true}>Enviar</button>
          </Dialog.Close>
        </div>
        </>
        )

   const popoverContent = 
     ( <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <PopoverClose style={{border: "none", marginLeft: "-15px"}}>

                    <span style={{color: "red", cursor: "pointer"}}  onClick={updateBannedStatus}>{user.banned ? "Reincorporar Usúario" : "Banir Usúario"}</span>
                
                </PopoverClose>
    
                {!user.banned && <DialogModal Trigger={"Enviar mensagem"} user={user} closeFunction={notifyUser} mainContent={dialogContent}/>}
       </div> 
    )


  return (
    <div className={styles.container} style={ user.banned ? {backgroundColor: "rgb(240, 132, 132)"} : {}}>
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
        <PopoverAction Trigger={<MoreVertical />} Content={popoverContent} />
    </div>
  )
}


export default UserCard;