import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import useRooms from '../hooks/useRooms';
import { useHistory } from 'react-router-dom';
import { createRoom } from '../services/rooms';
import useChat from '../hooks/useToast/useToast';

function NewRoomPop() {
  const history = useHistory();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setRoomName, roomName } = useRooms();
  const { setToastMessage } = useChat();

  const handleCreate = async () => {
    const data = await createRoom(roomName);
    setRoomName('');
    onClose();
    setToastMessage({
      position: 'top',
      description: `${roomName} Created Successfully`,
      status: 'success',
    });
    history.push(`/${data.id}`);
    return data;
  };
  return (
    <>
      <Button m="5" onClick={onToggle}>
        Create New Room
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            What would you like to name your room?
            <Input
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleCreate}>
                Apply
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default NewRoomPop;
