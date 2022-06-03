import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  useDisclosure,
} from '@chakra-ui/react';
import useNewRoomPop from '../hooks/UseNewRoomPop/useNewRoomPop';

function NewRoomPop() {
  const { setRoomName, roomName, handleCreate, isOpen, onToggle, onClose } =
    useNewRoomPop();
  return (
    <Box>
      <Button size="sm" mt="5" onClick={onToggle}>
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
    </Box>
  );
}

export default NewRoomPop;
