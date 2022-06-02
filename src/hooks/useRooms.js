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

  // if (!fetchedRoom) {
  //   return;
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getRoomId();
  //     console.log('roomID', data);
  //     setFetchedRoom(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return { handleCreate, roomName, setRoomName };
}

export default useRooms;
