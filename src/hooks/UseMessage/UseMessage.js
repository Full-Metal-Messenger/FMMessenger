import { useContext, useEffect } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post);
    setPost('');
  };

  const getData = async () => {
    const data = await getMessages();
    setMessages(data);
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

  return { handleSubmit, messages, setPost, post };
}

export default useMessage;
