export const validateWorkspace = (workspace) => {
    if (!workspace) {
        return 'El nombre del workspace es requerido.';
    } else if (workspace.length < 8) {
        return 'El nombre del workspace debe tener al menos 8 caracteres.'
    }
    return ''
}

export const validateChannel = (channel) => {
    if (!channel) {
        return 'El nombre del canal es requerido.'
    } else if (!channel.startsWith('#')) {
        return 'El nombre del canal debe comenzar con #.'
    }
    return ''
}

export const validateMessage = (message) =>{
    if(!message){
        return 'No has escrito nada'
    }

    return ''
}