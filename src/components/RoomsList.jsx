import { Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageContext } from '../context/MessageContext';
import { client } from '../services/client';
import { unsubscribe } from '../services/messages';
import { getRoomId } from '../services/rooms';
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

function RoomsList() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { setGlobalRoom } = useContext(MessageContext);
  const [placement, setPlacement] = useState('left');
  const { loading, setLoading } = useContext(MessageContext);
  const [room, setRoom] = useState([]);

  const handleClick = () => {
    onClose();
  };

  const getData = async () => {
    const { body } = await client.from('rooms').select();
    setRoom(body);
    setGlobalRoom(body);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { body } = await client.from('rooms').select();
      setRoom(body);
      setGlobalRoom(body);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sub = client
      .from('rooms')
      .on('INSERT', () => {
        getData();
      })
      .subscribe();

    return () => client.removeSubscription(sub);
  }, []);

  return (
    <Box>
      <Button size="sm" my="5" colorScheme="blue" onClick={onOpen}>
        Chat Rooms
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
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
                  m="2"
                  p="2"
                  border="2px"
                  borderRadius="10px"
                  borderColor="gray.700"
                  bgGradient="linear(to-r,
                    #fc00ff
                    , #00dbde )"
                >
                  <Text color="white" onClick={handleClick} key={id}>
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
