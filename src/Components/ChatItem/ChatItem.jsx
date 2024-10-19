import React from 'react'
import './ChatItem.css'

const ChatItem = ({ author, text, hour }) => {
    return (
        <div className='chat-item-container'>
            <div>{author} {hour} </div>
            <p>{text}</p>
        </div>
    )
}
export default ChatItem