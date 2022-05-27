import React from 'react'
import { getMessages } from '../../services/messages'

function useChat() {
    useEffect (() => {
        const grabPosts = async () => {
            const data = await getMessages();
            
        }
    })
  return (
    <div></div>
  )
}

export default useChat