import React from 'react'
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

    return (
        <div className='workspace-container'>
            <div className='upper-container'>
                <h1>{workspace.name}</h1>
                <Link to='/'>
                    <Button label='SALIR' variant='exit' />
                </Link>
            </div>
            <div className='middle-container'>
                <ChannelList channels={workspace.channels} title={'Canales'} id_workspace={id_workspace} />
                <ChatList messages={messages} channel_name={channel.name} id_workspace={id_workspace} id_channel={id_channel}/>
            </div>
        </div>
    )
}

export default WorkspacePage