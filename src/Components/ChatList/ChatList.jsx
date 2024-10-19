import React, { useState } from "react"
import ChatItem from "../ChatItem/ChatItem"
import './ChatList.css'
import Input from "../Input/Input"
import Button from "../Button/Button"

const ChatList = ({ messages }) => {
    const [error, setError] = useState({ text: '', isError: false })
    
    const handleSubmitMessage = (evento) => {
        evento.preventDefault()
        const form = new FormData(evento.target)
        const message = form.get('message')
        if (!message) {
            setError({ isError: true, text: 'No has escrito nada' })
        }
        else {
            setError({ text: '', isError: false })
            const newMessage = { author: 'YO', text: message, id: 5, hour: '20:22' }
            messages.push(newMessage)
        }
    }

    return (
        <div className="chat-list-container">
            <h2>Mensajes</h2>
            <hr />
            {
                messages.map((message) => {
                    return (
                        <ChatItem key={message.id} author={message.author} text={message.text} hour={message.hour} />
                    )
                })
            }
            <form onSubmit={handleSubmitMessage}>
                <div className="message-submit">
                    <Input placeholder="Escriba algo..." name='message' />
                    <Button label='Enviar' variant='send' />
                </div>
                {error.isError && <span>{error.text}</span>}
            </form>
        </div>
    )
}

export default ChatList
