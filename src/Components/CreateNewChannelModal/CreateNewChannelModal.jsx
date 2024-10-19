import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { createChannel } from '../../data/workspaces';

const CreateNewChannelModal = ({ id_workspace, onClose }) => {
    const [newChannelName, setNewChannelName] = useState('');

    const handleCreateChannel = (e) => {
        e.preventDefault();
        if (newChannelName) {
            createChannel(id_workspace, { name: newChannelName, messages: [] });
            setNewChannelName('');
            onClose(); // Cierra el modal después de crear el canal
        }
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Crear canal</h2>
                <form onSubmit={handleCreateChannel}>
                    <Input 
                        type='text' 
                        placeholder='Nombre del canal' 
                        onChange={(e) => setNewChannelName(e.target.value)} 
                        value={newChannelName} 
                    />
                    <div className="modal-buttons">
                        <Button label='Confirmar' variant='confirm' type="submit" />
                        <Button label='Cancelar' variant='danger' onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewChannelModal;