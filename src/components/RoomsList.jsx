import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
} from '@chakra-ui/react';
import useRoomList from '../hooks/UseRoomList/useRoomList';

function RoomsList() {
  const { loading, isOpen, onClose, onOpen, room, handleClick } = useRoomList();

  return (
    <Box>
      <Button size="sm" my="5" colorScheme="blue" onClick={onOpen}>
        Chat Rooms
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#1a202c">
          <DrawerHeader color="gray.200" borderBottomWidth="1px">
            Chat Rooms
          </DrawerHeader>
          <DrawerBody>
            {loading ? (
              <p>loading</p>
            ) : (
              room?.map(({ id, name }) => (
                <Box
                  key={id}
                  m="2"
                  p="2"
                  border="2px"
                  borderRadius="10px"
                  borderColor="gray.700"
                  bgGradient="linear(to-r,
                    #fc00ff
                    , #00dbde )"
                >
                  <Text color="white" onClick={handleClick}>
                    <Link to={`/${id}`}>{name}</Link>
                  </Text>
                </Box>
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default RoomsList;
