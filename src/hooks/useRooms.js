import { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';

function useRooms() {
  const { roomName, setRoomName } = useContext(MessageContext);

  return { roomName, setRoomName };
}

export default useRooms;
