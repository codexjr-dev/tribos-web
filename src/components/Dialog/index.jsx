import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const DialogModal = ( { Trigger, user } ) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">{Trigger}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Enviar mensagem para {}</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea className="Textarea" id="mensagem" placeholder='Mensagem' />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Enviar</button>
          </Dialog.Close>
        </div>
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