import React, { useState } from "react";
import ChannelItem from "../ChannelItem/ChannelItem";
import './ChannelList.css';
import Button from '../Button/Button';
import CreateNewChannelModal from '../CreateNewChannelModal/CreateNewChannelModal';

const ChannelList = ({ title, channels, id_workspace }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const toggleModal = () => {
        setShowCreateModal(prev => !prev);
    };

    return (
        <div className='channels-list'>
            <h1>{title}</h1>
            {channels.map(channel => (
                <ChannelItem key={channel.id} name={channel.name} id_channel={channel.id} id_workspace={id_workspace} />
            ))}
            <hr />
            <Button label='CREAR CANAL' variant='create' onClick={toggleModal} />
            {showCreateModal && (
                <CreateNewChannelModal id_workspace={id_workspace} onClose={toggleModal} />
            )}
        </div>
    );
};

export default ChannelList;