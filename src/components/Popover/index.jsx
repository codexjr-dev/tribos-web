import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import DialogModal from '../Dialog';

const PopoverAction = ( { Trigger, Content } ) => (
  <Popover.Root>
    <Popover.Trigger asChild>
        {Trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
          {Content}
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverAction;