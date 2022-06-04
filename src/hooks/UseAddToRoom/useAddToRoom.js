import React, { useContext, useState } from 'react';
import { MessageContext } from '../../context/MessageContext';
import { addToRoom } from '../../services/rooms';
import useToastAlert from '../useToast/useToastAlert';

export default function useAddToRoom() {
  const [roomId, setRoomId] = useState('');
  const { popOpen, setPopOpen, globalRoom } = useContext(MessageContext);
  const { setToastMessage } = useToastAlert();
  const { open, id, name } = popOpen;

  const handleClick = async () => {
    await addToRoom(roomId, id);
    setPopOpen({ open: false, id: null });
    setRoomId('');
    setToastMessage({
      position: 'top',
      description: `${name} was accepted into your room.`,
      status: 'info',
    });
    setToastMessage('');
  };
  return { setPopOpen, handleClick, name, globalRoom, setRoomId, open };
}
