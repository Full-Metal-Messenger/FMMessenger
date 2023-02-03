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
    const { data } = await client.from('rooms').select();

    setRoom(data);
    setGlobalRoom(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await client.from('rooms').select();

      setRoom(data);
      setGlobalRoom(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sub = client.channel('rooms');
    sub
      .on(
        'postgres_changes',
        { event: '*', scheme: 'public', table: 'rooms' },
        () => {
          getData();
        }
      )
      .subscribe();
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
