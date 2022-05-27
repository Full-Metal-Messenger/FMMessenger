import React from 'react'
import useMessage from '../hooks/UseMessage/UseMessage'

function MessageInput({callBack}) {
const {post, setPost} = useMessage();
  return (
    <div>
    <form onSubmit={callBack}>
        <input type='text' value={post} onChange={(e) => setPost(e.target.value)
        }/> 
        <button>Send</button>
    </form>

    </div>
  )
}

export default MessageInput