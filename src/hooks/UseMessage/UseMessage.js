import { useContext, useEffect, useRef } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { MessageContext } from '../../context/MessageContext';
import { client } from '../../services/client';
import {
  deleteMessage,
  getMessages,
  postMessage,
  subscribe,
  unsubscribe,
} from '../../services/messages';
// import useChat from '../useChat/useChat';

function useMessage() {
  // const { setToastMessage } = useChat();
  const { post, setPost, messages, setMessages } = useContext(MessageContext);
  const ref = useRef(null);

  const removeMessage = async () => {
    await deleteMessage(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post);
    // setToastMessage('Message sent');
    setPost('');
  };

  const getData = async () => {
    const data = await getMessages();
    setMessages(data);

    if (ref.current) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  useEffect(() => {
    client
      .from('messages')
      .on('INSERT', () => {
        getData();
      })
      .subscribe();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return { handleSubmit, messages, setPost, post, ref, removeMessage };
}

export default useMessage;
