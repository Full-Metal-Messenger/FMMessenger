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

function NewRoomPop() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { handleCreate, setRoomName, roomName } = useRooms();
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
              <Button variant="outline">Cancel</Button>
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
