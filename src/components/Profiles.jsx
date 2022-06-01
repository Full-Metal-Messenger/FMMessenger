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
  Button,
  Box,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Profiles() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [placement, setPlacement] = useState('right');
  const { person } = useProfiles();
  return (
    <Box>
      <Button m="5" colorScheme="blue" onClick={onOpen}>
        Friends
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Friends</DrawerHeader>
          <DrawerBody>
            {person.map((item) => (
              <h1 key={item.id}>{item.username}</h1>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
