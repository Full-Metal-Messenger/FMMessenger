import React from 'react';
import Chat from '../components/Chat';
import MessageInput from '../components/MessageInput';
import useMessage from '../hooks/UseMessage/UseMessage';

function Main() {
  const { handleSubmit } = useMessage();
  return (
    <div>
    <Chat />
      <MessageInput callBack={handleSubmit} />
    </div>
  );
}

export default Main;
