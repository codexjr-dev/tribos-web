import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const DialogModal = ( { Trigger, user, closeFunction, mainContent } ) => (

  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">{Trigger}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Enviar mensagem para {user.username}</Dialog.Title>
        <Dialog.Description className="DialogDescription">
        </Dialog.Description>
          {mainContent}
        <Dialog.Close asChild>
          <button className="closeButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogModal;