import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function useChat() {
  const [toastMessage, setToastMessage] = useState('');

  const toast = useToast();

  const { position, description, status, icon } = toastMessage;

  useEffect(() => {
    if (toastMessage) {
      toast({
        position: position,
        description: description,
        status: status,
        duration: 2000,
        isClosable: true,
        // icon: icon,
      });
    }
  }, [toastMessage, toast]);

  return { toastMessage, setToastMessage };
}
