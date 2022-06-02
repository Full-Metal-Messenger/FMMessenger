import React, { useContext, useEffect } from 'react';
import { MessageContext } from '../context/MessageContext';
import { createRoom, getRoomId } from '../services/rooms';

function useRooms() {
  const {
    roomName,
    setRoomName,
    setFetchedRoom,
    setLoading,
    fetchedRoom,
    history,
  } = useContext(MessageContext);

  return { roomName, setRoomName };
}

export default useRooms;
