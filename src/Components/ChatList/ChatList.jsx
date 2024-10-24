import React, { useState } from 'react'
import ChatItem from '../ChatItem/ChatItem'
import './ChatList.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { createMessage } from '../../data/workspaces'
import { validateMessage } from '../../utils/validations'

const ChatList = ({ messages, channel_name, id_workspace, id_channel, onMessageSent }) => {
    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const handleSubmitMessage = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const message = form.get('message')

        const newErrorState = validateMessage(message)
        setError(newErrorState)

        if (newErrorState) {
            return
        }

        const newMessage = {
            author: 'YO',
            text: message,
            hour: new Date().toLocaleTimeString().slice(0, 5),
        }

        createMessage(id_workspace, id_channel, newMessage)
        onMessageSent() // Notifica que se envió un nuevo mensaje
        setInput('')
    }

    return (
        <div className='chat-list-container'>
            <div className='chat-list-header'>
                <h2>{channel_name} / Mensajes</h2>
                <hr />
            </div>
            <div className='chat-list-content'>
                {messages.map((message) => (
                    <ChatItem key={message.id} author={message.author} text={message.text} hour={message.hour} />
                ))}
            </div>
            <div className='chat-list-footer'>
                <hr />
                <form onSubmit={handleSubmitMessage}>
                    <div className='message-submit'>
                        <Input placeholder='Escriba algo...' name='message' value={input} onChange={(e) => setInput(e.target.value)} />
                        <Button label='Enviar' variant='send' />
                    </div>
                    {error && <span>{error}</span>}
                </form>
            </div>
        </div>
    )
}

export default ChatList