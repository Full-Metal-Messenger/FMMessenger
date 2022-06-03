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
      <Button size="sm" my="5" colorScheme="blue" onClick={onOpen}>
        Friends
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#1a202c">
          <DrawerHeader color="gray.200" borderBottomWidth="1px">
            Friends
            <Text fontSize="sm">Click to add to your private room</Text>
          </DrawerHeader>
          <DrawerBody>
            {person.map(({ id, username }) => (
              <Box
                key={id}
                m="2"
                p="2"
                border="2px"
                borderRadius="10px"
                borderColor="gray.700"
                bgGradient="linear(to-r,
                  #8E2DE2
                ,#4A00E0 )"
              >
                <Text
                  color="gray.200"
                  cursor="pointer"
                  as="p"
                  textDecoration="underline"
                  onClick={() => handleToggle(id, username, onClose)}
                >
                  {username}
                </Text>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
