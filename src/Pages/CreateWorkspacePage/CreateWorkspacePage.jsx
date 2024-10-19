import React from 'react'
import './CreateWorkspacePage.css'
import CreateWorkspaceForm from '../../Components/CreateWorkspaceForm/CreateWorkspaceForm'

const CreateWorkspacePage = () =>{

    return(
        <div className='create-workspace-container'>
            <h1>Crear entorno de trabajo</h1>
            <CreateWorkspaceForm/>
        </div>
    )
}

export default CreateWorkspacePage