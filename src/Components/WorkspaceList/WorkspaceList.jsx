import React from 'react'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import './WorkspaceList.css'

const WorkspaceList = ({ workspaces }) => {

    return (
        <div className="workspace-list">
            {
                workspaces.map((workspace) => (
                    <WorkspaceItem key={workspace.id} name={workspace.name} img={workspace.img} id_workspace={workspace.id} id_channel={workspace.channels[0]?.id} />
                ))
            }
        </div>
    )
}

export default WorkspaceList