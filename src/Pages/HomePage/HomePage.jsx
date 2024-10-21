import React from 'react'
import WorkspaceList from '../../Components/WorkspaceList/WorkspaceList'
import Button from '../../Components/Button/Button'
import { getWorkspaces } from '../../data/workspaces'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {

    let workspaces = getWorkspaces()

    return (
        <div className='home-container'>
            <h1>Bienvenido a SlackClone</h1>
            <h2>Entornos de trabajo</h2>
            <WorkspaceList workspaces={workspaces} />
            <Link to='/workspace/new'>
                <Button label='CREAR ENTORNO' variant='create' />
            </Link>
        </div>
    )
}

export default HomePage