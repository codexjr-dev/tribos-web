import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import DialogModal from '../Dialog';

const PopoverAction = ( { Trigger } ) => (
  <Popover.Root>
    <Popover.Trigger asChild>
        {Trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <span style={{color: "red", cursor: "pointer"}}>Banir Usúario</span>
              <DialogModal Trigger={"Enviar mensagem"} />
          </div>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverAction;