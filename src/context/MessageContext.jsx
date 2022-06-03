import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState('');
  const [roomName, setRoomName] = useState('');
  const [fetchedRoom, setFetchedRoom] = useState({ id: 1 });
  const [loading, setLoading] = useState(true);
  const [popOpen, setPopOpen] = useState({ open: false, id: null, name: null });
  const [globalRoom, setGlobalRoom] = useState([]);

  const handleToggle = (id, name, close) => {
    // const button = addRef.current;
    close();
    setPopOpen({ open: true, id: id, name: name });
  };

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
        popOpen,
        setPopOpen,
        handleToggle,
        setGlobalRoom,
        globalRoom,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
