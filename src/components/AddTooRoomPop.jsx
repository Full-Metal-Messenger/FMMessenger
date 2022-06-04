import React from 'react';
import {
  Button,
  ButtonGroup,
  FormControl,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  Select,
} from '@chakra-ui/react';
import useAddToRoom from '../hooks/UseAddToRoom/useAddToRoom';

function AddTooRoomPop() {
  const { setPopOpen, handleClick, name, globalRoom, setRoomId, open } =
    useAddToRoom();
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
