import React, { useContext } from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  Select,
} from '@chakra-ui/react';
import { MessageContext } from '../context/MessageContext';
import { addToRoom } from '../services/rooms';
import { useState } from 'react';
import useToastAlert from '../hooks/useToast/useToastAlert';

function AddTooRoomPop() {
  const [roomId, setRoomId] = useState('');
  const { setToastMessage } = useToastAlert();

  const { popOpen, setPopOpen, globalRoom } = useContext(MessageContext);
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
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={open}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverBody>
            Add {name} to room
            <FormControl>
              <Select
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Your Rooms"
                variant="filled"
              >
                {globalRoom.map(({ name, id }) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button
                variant="outline"
                onClick={() => setPopOpen({ open: false, id: null })}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleClick}>
                Add
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default AddTooRoomPop;
