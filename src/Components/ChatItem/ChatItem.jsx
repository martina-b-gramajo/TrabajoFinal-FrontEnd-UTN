import React from 'react'
import './ChatItem.css'

const ChatItem = ({ author, text, hour }) => {
    return (
        <div className="chat-item">
            <div className="chat-header">
                <span className="chat-author">{author}</span>
                <span className="chat-hour">{hour}</span>
            </div>
            <div className="chat-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChatItem