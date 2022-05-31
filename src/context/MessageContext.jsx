import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState('');

  return (
    <MessageContext.Provider value={{ post, setPost, messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
