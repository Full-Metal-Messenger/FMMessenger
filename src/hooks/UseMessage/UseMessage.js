import { useContext, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { MessageContext } from '../../context/MessageContext';
import {
  getMessages,
  postMessage,
  subscribe,
  unsubscribe,
} from '../../services/messages';

function useMessage() {
  const { post, setPost, messages, setMessages } = useContext(MessageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post);
    setPost('');
  };
  const handleMessageReceived = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    getMessages().then(setMessages);

    subscribe(handleMessageReceived);

    return () => unsubscribe();
  }, []);

  return { handleSubmit, messages, setPost, handleMessageReceived, post };
}

export default useMessage;
