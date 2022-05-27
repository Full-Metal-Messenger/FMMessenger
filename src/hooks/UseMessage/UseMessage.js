import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { getMessages, subscribe, unsubscribe } from '../../services/fetchMessages';

function UseMessage() {
    const [messages, setMessages] = useState([]);
    const {user} = AuthContext();
    const [post,setPost] = useState('')
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
    

  return {handleSubmit, messages, handleMessageReceived, post}

   
  
}

export default UseMessage