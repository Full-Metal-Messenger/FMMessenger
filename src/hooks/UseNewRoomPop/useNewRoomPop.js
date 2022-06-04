import { useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { createRoom } from '../../services/rooms';
import useRooms from '../useRooms';
import useToastAlert from '../useToast/useToastAlert';

export default function useNewRoomPop() {
  const history = useHistory();
  const { onClose, isOpen, onToggle } = useDisclosure();
  const { setRoomName, roomName } = useRooms();
  const { setToastMessage } = useToastAlert();

  const handleCreate = async () => {
    const data = await createRoom(roomName);
    setRoomName('');
    onClose();
    setToastMessage({
      position: 'top',
      description: `${roomName} Created Successfully`,
      status: 'success',
    });
    setToastMessage('');
    history.push(`/${data.id}`);
    return data;
  };
  return { setRoomName, roomName, handleCreate, isOpen, onToggle, onClose };
}
