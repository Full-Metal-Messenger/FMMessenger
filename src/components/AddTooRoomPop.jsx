import React, { useContext } from 'react';
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
import useProfiles from '../hooks/useProfiles/useProfiles';
import { MessageContext } from '../context/MessageContext';

function AddTooRoomPop() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { popOpen, setPopOpen } = useContext(MessageContext);
  const { person, addRef } = useProfiles;
  const { open, id, name } = popOpen;
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={open}
        placement="top-left"
        closeOnBlur={false}
      >
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverBody>Add {name} to room</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button
                variant="outline"
                onClick={() => setPopOpen({ open: false, id: null })}
              >
                Cancel
              </Button>
              <Button colorScheme="red">Add</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default AddTooRoomPop;
