import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getWorkspaceById } from '../../data/workspaces'
import Button from '../../Components/Button/Button'
import ChatList from '../../Components/ChatList/ChatList'
import ChannelList from '../../Components/ChannelList/ChannelList'
import './WorkspacePage.css'

const WorkspacePage = () => {
    const { id_workspace, id_channel } = useParams()
    const workspace = getWorkspaceById(id_workspace)
    const channel = workspace.channels.find(channel => channel.id == id_channel)
    const messages = channel.messages

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleChannelClick = () => {
        setIsOpen(false)
    }

    return (
        <div className='workspace-container'>
            <div className='upper-container'>
                <h1>{workspace.name}</h1>
                <Link to='/'>
                    <Button label='SALIR' variant='exit' />
                </Link>
                <div className={`burger-menu ${isOpen && 'open'}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='middle-container'>
                <div className={`channels-burger-menu ${isOpen && 'open'}`}>
                    <ChannelList channels={workspace.channels} title={'Canales'} id_workspace={id_workspace} onClick={handleChannelClick} />
                </div>
                {!isOpen && (
                    <ChatList messages={messages} channel_name={channel.name} id_workspace={id_workspace} id_channel={id_channel} />
                )}
            </div>
        </div>
    )
}

export default WorkspacePage