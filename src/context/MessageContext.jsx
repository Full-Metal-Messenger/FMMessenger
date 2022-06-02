import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState('');
  const [roomName, setRoomName] = useState('');
  const [fetchedRoom, setFetchedRoom] = useState({ id: 1 });
  const [loading, setLoading] = useState(true);
  const [popOpen, setPopOpen] = useState({ open: false, id: null, name: null });

  const handleToggle = (id, name) => {
    // const button = addRef.current;
    // console.log(button);
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
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
