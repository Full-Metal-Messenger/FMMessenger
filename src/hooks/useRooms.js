import React, { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import { createRoom } from '../services/rooms';

function useRooms() {
  const { roomName, setRoomName } = useContext(MessageContext);
  const handleCreate = async () => {
    await createRoom(roomName);
  };
  return { handleCreate, roomName, setRoomName };
}

export default useRooms;
