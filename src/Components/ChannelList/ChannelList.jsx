import React, { useState } from 'react'
import ChannelItem from '../ChannelItem/ChannelItem'
import './ChannelList.css'
import Button from '../Button/Button'
import CreateNewChannelModal from '../CreateNewChannelModal/CreateNewChannelModal'
import { useParams } from 'react-router-dom'

const ChannelList = ({ title, channels, id_workspace, onClick, onChannelCreated }) => {
    const { id_channel } = useParams();
    const [showCreateModal, setShowCreateModal] = useState(false)

    const toggleModal = () => setShowCreateModal(!showCreateModal)

    return (
        <div className='channels-list'>
            <h1>{title}</h1>
            {channels.map(channel => (
                <ChannelItem
                    key={channel.id}
                    name={channel.name}
                    id_channel={channel.id}
                    id_workspace={id_workspace}
                    isActive={channel.id == id_channel}
                    onClick={onClick}
                />
            ))}
            <hr />
            <Button label='CREAR CANAL' variant='create' onClick={toggleModal} />
            {showCreateModal && (
                <CreateNewChannelModal id_workspace={id_workspace} onClose={toggleModal} onChannelCreated={onChannelCreated} />
            )}
        </div>
    )
}

export default ChannelList