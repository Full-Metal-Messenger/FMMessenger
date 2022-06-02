import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function useChat() {
  const [toastMessage, setToastMessage] = useState('');
  // const [placement, setPlacement] = useState('');
  // const [kind, setKind] = useState('');
  const toast = useToast();

  useEffect(() => {
    if (toastMessage) {
      toast({
        // title,
        position: 'top',
        // position: placement,
        description: toastMessage,
        // description: 'Welcome',
        status: 'error',
        // status: kind,
        duration: 9000,
        isClosable: true,
      });
    }
  }, [toastMessage, toast]);

  // return { setToastMessage };
  return ([setToastMessage, setPlacement, setType] = toastParams);

  // setToastMessage('welcome', 'bottom', 'info');
}

// import { useToast } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
// // import { useState, useEffect } from 'react';

// export function useToastMessage() {
//   const toast = useToast();
//   const [toastAlert, setToastAlert] = useState();

//   useEffect(() => {
//     if (toastAlert) {
//       const { message, status } = toastAlert;

//       toast({
//         title: status,
//         description: message,
//         status: status,
//         duration: 9000,
//         position: 'top',
//         isClosable: true,
//       });
//     }
//   }, [toastAlert, toast]);

//   return [toastAlert, setToastAlert];
// }
