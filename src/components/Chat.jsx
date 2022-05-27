import React from 'react'
import useMessage from '../hooks/UseMessage/UseMessage';

function Chat() {
const {messages} = useMessage();
  return (
    <div>
        {messages.map(({id, posts}) => (
            <p key={id}>{posts}</p>

        ))}
    </div>
  )
}

export default Chat