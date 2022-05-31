import React from 'react';
import useProfiles from '../hooks/useProfiles/useProfiles';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Radio,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Profiles() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [placement, setPlacement] = useState('right');
  const { person } = useProfiles();
  return (
    <div>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Users</DrawerHeader>
          <DrawerBody>
            {person.map((item) => (
              <h1 key={item.id}>{item.username}</h1>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
