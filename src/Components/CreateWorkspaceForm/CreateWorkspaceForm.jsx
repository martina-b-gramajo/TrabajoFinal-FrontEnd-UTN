import React, { useState } from 'react'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import './CreateWorkspaceForm.css'
import { createWorkspace, getWorkspaces } from '../../data/workspaces'
import Input from '../Input/Input'
import { v4 as uuidv4 } from 'uuid'

const CreateWorkspaceForm = () => {
    const navigation = useNavigate()
    const [error, setError] = useState({ workspace: '', channel: '' })
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState('')
    const defaultImage = 'https://cdn.pixabay.com/photo/2020/05/29/13/26/icons-5235125_1280.png'

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setImagePreview(reader.result)
            reader.readAsDataURL(file)
            setImage(file)
        }
    };

    const handleSubmitForm = (evento) => {
        evento.preventDefault()
        const form = new FormData(evento.target);
        const workspace = form.get('workspace-name')
        const channel = form.get('channel-name')

        const newErrorState = { workspace: validateWorkspace(workspace), channel: validateChannel(channel) }

        setError(newErrorState)

        // Si hay errores, no se crea el workspace
        if (newErrorState.workspace || newErrorState.channel) {
            return
        }

        const newWorkspace = {
            name: workspace,
            img: imagePreview || defaultImage,
            channels: [
                {
                    id: uuidv4(),  // Genera un id único para el canal
                    name: channel,
                    messages: []
                }
            ]
        }

        createWorkspace(newWorkspace)
        console.log(getWorkspaces())
        navigation('/')
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitForm}>
                <Input label='Nombre del entorno de trabajo' name='workspace-name' type='text'  />
                {error.workspace && <span>{error.workspace}</span>}
                <Input label='Imagen del entorno' name="workspace-image" type="file" accept="image/*" onChange={handleImageChange} />
                {imagePreview && <img src={imagePreview} alt="Previsualización" className="image-preview" />}
                <Input label='Nombre del canal #' name='channel-name' defaultValue='#Saludos' />
                {error.channel && <span>{error.channel}</span>}
                <div className='btns-container'>
                    <Button label='Crear entorno' variant='submit' />
                    <Link to='/'>
                        <Button label='Cancelar' variant='danger' />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateWorkspaceForm;

//Funciones necesarias

const validateWorkspace = (workspace) => {
    if (!workspace) {
        return 'El nombre del workspace es requerido.';
    } else if (workspace.length < 8) {
        return 'El nombre del workspace debe tener al menos 8 caracteres.'
    }
    return ''
}

const validateChannel = (channel) => {
    if (!channel) {
        return 'El nombre del canal es requerido.'
    } else if (!channel.startsWith('#')) {
        return 'El nombre del canal debe comenzar con #.'
    }
    return ''
}
