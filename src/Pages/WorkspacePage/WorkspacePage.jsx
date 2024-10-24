import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getWorkspaceById } from '../../data/workspaces'
import Button from '../../Components/Button/Button'
import ChatList from '../../Components/ChatList/ChatList'
import ChannelList from '../../Components/ChannelList/ChannelList'
import './WorkspacePage.css'

const WorkspacePage = () => {
    const { id_workspace, id_channel } = useParams()
    const [workspace, setWorkspace] = useState(() => getWorkspaceById(id_workspace))
    const [currentChannel, setCurrentChannel] = useState(workspace.channels.find(channel => channel.id == id_channel))
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setCurrentChannel(workspace.channels.find(channel => channel.id == id_channel))
    }, [workspace, id_channel])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleChannelClick = () => {
        setIsOpen(false)
    }

    const handleChannelCreated = () => {
        setWorkspace(getWorkspaceById(id_workspace))
    }

    const handleMessageSent = () => {
        setWorkspace(getWorkspaceById(id_workspace))
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
                    <ChannelList 
                        channels={workspace.channels} 
                        title={'Canales'} 
                        id_workspace={id_workspace} 
                        onClick={handleChannelClick} 
                        onChannelCreated={handleChannelCreated} 
                    />
                </div>
                {!isOpen && (
                    <ChatList 
                        messages={currentChannel.messages} 
                        channel_name={currentChannel.name} 
                        id_workspace={id_workspace} 
                        id_channel={id_channel} 
                        onMessageSent={handleMessageSent} 
                    />
                )}
            </div>
        </div>
    )
}

export default WorkspacePage