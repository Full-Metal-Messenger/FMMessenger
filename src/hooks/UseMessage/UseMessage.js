import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MessageContext } from '../../context/MessageContext';
import { client } from '../../services/client';
import {
  deleteMessage,
  getMessages,
  postMessage,
} from '../../services/messages';
import useToastAlert from '../useToast/useToastAlert';

function useMessage() {
  const { post, setPost, messages, setMessages } = useContext(MessageContext);
  const { id } = useParams();
  const { setToastMessage } = useToastAlert();

  const ref = useRef(null);

  const removeMessage = async () => {
    await deleteMessage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(post, id);
    setPost('');
    setToastMessage({
      position: 'top',
      description: 'Message Sent',
      status: 'success',
    });
    setToastMessage('');
  };

  const getData = async (id) => {
    const data = await getMessages(id);
    setMessages(data);

    if (ref.current) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  useEffect(() => {
    const sub = client.channel(`postgresChangesChannel`);
    sub
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'messages',
          filter: `room_id=eq.${id}`,
        },
        (payload) => {
          console.log('payload', payload);
          console.log('messages', messages);
          getData(id);
        }
      )
      .subscribe();
  }, [id]);

  useEffect(() => {
    getData(id);
  }, [id]);

  return { handleSubmit, messages, setPost, post, ref, removeMessage };
}

export default useMessage;
