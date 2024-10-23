import React from 'react'
import { Link } from 'react-router-dom'
import './ChannelItem.css'

const ChannelItem = ({ id_channel, id_workspace, name, isActive, onClick }) => {
    return (
        <div className={`channel-item ${isActive ? 'active' : ''}`}>
            <Link to={'/workspace/' + id_workspace + '/' + id_channel} onClick={onClick}>
                {name}
            </Link>
        </div>
    )
}

export default ChannelItem