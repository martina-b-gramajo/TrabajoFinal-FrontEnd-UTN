import React from 'react'
import { Link } from 'react-router-dom'
import './ChannelItem.css'

const ChannelItem = ({ id_channel, id_workspace, name }) => {
    return (
        <div className='channel-item'>
            <Link to={'/workspace/' + id_workspace + '/' + id_channel} >
                {name}
            </Link>
        </div>
    )
}

export default ChannelItem