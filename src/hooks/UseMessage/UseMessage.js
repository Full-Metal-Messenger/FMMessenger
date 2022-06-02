import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
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

function useMessage() {
  const { post, setPost, messages, setMessages, fetchedRoom, loading } =
    useContext(MessageContext);
  const { id } = useParams();
  // if (loading) {
  //   console.log('loading');
  // }
  // console.log('id', fetchedRoom);

  const ref = useRef(null);

  const removeMessage = async () => {
    await deleteMessage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post, id);
    setPost('');
  };

  const getData = async (id) => {
    const data = await getMessages(id);
    setMessages(data);

    if (ref.current) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  useEffect(() => {
    client
      .from('messages')
      .on('INSERT', () => {
        getData(id);
      })
      .subscribe();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getData(id);
  }, [id]);

  return { handleSubmit, messages, setPost, post, ref, removeMessage };
}

export default useMessage;
