import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { getMessages, subscribe, unsubscribe } from '../../services/fetchMessages';

function useMessage() {
    const [messages, setMessages] = useState([]);
    const {user} = useAuthContext();
    console.log(user);
    const [post, setPost] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postMessage(post, user.id);
        setPost('');
    }
    const handleMessageReceived = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      };
    
    useEffect(() => {
        getMessages().then(setMessages);
    
        subscribe(handleMessageReceived);
    
        return () => unsubscribe();
      }, []);
    

  return {handleSubmit, messages, setPost, handleMessageReceived, post}

   
  
}

export default useMessage