import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function useChat() {
  const [toastMessage, setToastMessage] = useState('');

  const toast = useToast();

  const { position, description, status } = toastMessage;

  useEffect(() => {
    if (toastMessage) {
      toast({
        position: position,
        description: description,
        status: status,
        duration: 2000,
        isClosable: true,
      });
    }
  }, [toastMessage, toast]);

  return { toastMessage, setToastMessage };
}
