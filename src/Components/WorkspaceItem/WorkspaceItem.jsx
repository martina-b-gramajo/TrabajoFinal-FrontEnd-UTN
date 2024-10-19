import React from 'react'
import './WorkspaceItem.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const WorkspaceItem = ({ name, img, id_workspace, id_channel }) => {
    return (
        <div key={id_workspace} className="workspace-item">
            {img && <img src={img} alt={name} className="workspace-img" />}
            <div className="workspace-name">
                <h3>{name}</h3>
            </div>
            <Link to={'/workspace/' + id_workspace + '/' + (id_channel ? id_channel : 1)}> {/*suponemos que siempre entro al primer canal*/}
                <Button label='ENTRAR' variant='enter' />
            </Link>

        </div>
    )
}

export default WorkspaceItem