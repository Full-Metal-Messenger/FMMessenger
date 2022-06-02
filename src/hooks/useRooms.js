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

  const handleCreate = async () => {
    const data = await createRoom(roomName);
    console.log(data.name);
    // history.push(`/${data.name}`);
    return data;
  };

  return { handleCreate, roomName, setRoomName };
}

export default useRooms;
