import { useDisclosure } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { MessageContext } from '../../context/MessageContext';
import { client } from '../../services/client';

export default function useRoomList() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { setGlobalRoom } = useContext(MessageContext);
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
  return {
    loading,
    isOpen,
    onClose,
    onOpen,
    room,
    handleClick,
  };
}
