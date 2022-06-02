import React, { useContext } from 'react';
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
  Text,
} from '@chakra-ui/react';

import { useState } from 'react';
import { MessageContext } from '../context/MessageContext';

export default function Profiles() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [placement, setPlacement] = useState('right');
  const { person } = useProfiles();
  const { handleToggle } = useContext(MessageContext);
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
            {person.map(({ id, username }) => (
              <Text
                cursor="pointer"
                as="p"
                textDecoration="underline"
                onClick={() => handleToggle(id, username, onClose)}
                key={id}
              >
                {username}
              </Text>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
