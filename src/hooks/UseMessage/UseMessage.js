import { useContext, useEffect, useRef } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { MessageContext } from '../../context/MessageContext';
import { client } from '../../services/client';
import {
  getMessages,
  postMessage,
  subscribe,
  unsubscribe,
} from '../../services/messages';

function useMessage() {
  const { post, setPost, messages, setMessages } = useContext(MessageContext);
  const ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post);
    setPost('');
  };

  const getData = async () => {
    const data = await getMessages();
    setMessages(data);
    if (ref.current) {
      ref.current.scrollTo(0, 0);
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

  return { handleSubmit, messages, setPost, post, ref };
}

export default useMessage;
