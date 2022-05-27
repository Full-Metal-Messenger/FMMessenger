import React from 'react';
import MessageInput from '../components/MessageInput';
import useMessage from '../hooks/UseMessage/UseMessage';

function Main() {
  const { handleSubmit, messages, handleMessageReceived, post } = useMessage();
  return (
  <div>
  <MessageInput callBack={handleSubmit}/>
  </div>
  )
}

export default Main;
