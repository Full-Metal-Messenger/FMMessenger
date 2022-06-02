import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState('');
  const [roomName, setRoomName] = useState('');
  const [fetchedRoom, setFetchedRoom] = useState({ id: 1 });
  const [loading, setLoading] = useState(true);

  return (
    <MessageContext.Provider
      value={{
        post,
        setPost,
        messages,
        setMessages,
        setRoomName,
        roomName,
        fetchedRoom,
        setFetchedRoom,
        loading,
        setLoading,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
