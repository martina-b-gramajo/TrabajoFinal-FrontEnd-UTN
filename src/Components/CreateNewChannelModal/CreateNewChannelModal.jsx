import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { createChannel } from '../../data/workspaces'
import './CreateNewChannelModal.css'
import { validateChannel } from '../../utils/validations'

const CreateNewChannelModal = ({ id_workspace, onClose }) => {
    const [error, setError] = useState('')

    const handleCreateChannel = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const channel = form.get('channel-name')

        const newErrorState = validateChannel(channel)

        setError(newErrorState)

        if (newErrorState) {
            return
        }

        createChannel(id_workspace, { name: channel, messages: [] })
        onClose()
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Crear canal</h2>
                <form onSubmit={handleCreateChannel}>
                    <Input label='Nombre del canal #' name='channel-name' type='text'/>
                    {error && <span>{error}</span>}
                    <div className="modal-buttons">
                        <Button label='Confirmar' variant='submit' type="submit" />
                        <Button label='Cancelar' variant='danger' onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewChannelModal