import { v4 as uuidv4 } from 'uuid'

export const workspaces_initial_state = [
    {
        id: 1,
        name: 'Desarrollo de Software',
        description: 'Espacio para discutir y colaborar en proyectos de software.',
        img: 'https://www.plensoft.com/assets/img/product/desarrollo-de-software-plensoft-plensoftware.png',
        channels: [
            {
                id: 1,
                name: 'General',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola a todos, ¿cómo están?',
                        hour: '09:15'
                    },
                    {
                        id: 2,
                        author: 'Ana',
                        text: '¡Hola Pepe! Todo bien, ¿y tú?',
                        hour: '09:16'
                    },
                    {
                        id: 3,
                        author: 'Luis',
                        text: '¿Alguien ha visto el último commit en el repositorio?',
                        hour: '09:17'
                    },
                    {
                        id: 4,
                        author: 'Sofía',
                        text: 'Sí, lo revisé. Está bien hecho.',
                        hour: '09:18'
                    },
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: '¿Alguien tiene dudas sobre la implementación del API?',
                        hour: '10:30'
                    },
                    {
                        id: 2,
                        author: 'Marta',
                        text: 'Yo tengo una duda sobre la autenticación. ¿Podemos discutirlo?',
                        hour: '10:31'
                    },
                    {
                        id: 3,
                        author: 'Pepe 3',
                        text: 'Claro, ¿cuándo te viene bien?',
                        hour: '10:32'
                    },
                    {
                        id: 4,
                        author: 'Luis',
                        text: 'Podemos hacerlo en la reunión de la tarde.',
                        hour: '10:33'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Marketing Digital',
        description: 'Espacio para coordinar campañas de marketing y estrategias.',
        img: 'https://cocktailmarketing.com.mx/wp-content/uploads/2021/07/que-es-y-que-hace-una-agencia-de-marketing-digital.jpg',
        channels: [
            {
                id: 1,
                name: 'Campañas',
                messages: [
                    {
                        id: 1,
                        author: 'Juan',
                        text: 'Hola equipo, ¿estamos listos para lanzar la nueva campaña?',
                        hour: '11:00'
                    },
                    {
                        id: 2,
                        author: 'Maria',
                        text: 'Sí, solo falta revisar los últimos detalles.',
                        hour: '11:01'
                    },
                    {
                        id: 3,
                        author: 'Ana',
                        text: '¿Alguien puede hacer una revisión final del contenido?',
                        hour: '11:02'
                    },
                    {
                        id: 4,
                        author: 'Pedro',
                        text: 'Yo me encargaré de eso. Lo tendré listo para las 12.',
                        hour: '11:03'
                    },
                    {
                        id: 5,
                        author: 'Sofía',
                        text: 'Perfecto, gracias, Pedro!',
                        hour: '11:04'
                    }
                ]
            }
        ]
    }
]

const getWorkspaces = () => {
    let workspaces = localStorage.getItem('workspaces')
    if (workspaces) {
        //Los transformo a JSON
        return JSON.parse(workspaces)
    }
    else {
        //Guardo en local storage el valor inicial
        localStorage.setItem('workspaces', JSON.stringify(workspaces_initial_state))
        return workspaces_initial_state
    }
}

const createWorkspace = (newWorkspace) => {
    newWorkspace.id = uuidv4()
    let workspaces = getWorkspaces()
    workspaces.push(newWorkspace)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}

const getWorkspaceById = (id) => {
    let workspaces = getWorkspaces()
    let workspace = workspaces.find(workspace => workspace.id == id)
    return workspace
}

const createChannel = (id_workspace, newChannel) => {
    let workspaces = getWorkspaces()
    let workspaceIndex = workspaces.findIndex(workspace => workspace.id == id_workspace)

    if (workspaceIndex !== -1) {
        newChannel.id = uuidv4()
        workspaces[workspaceIndex].channels.push(newChannel)
        localStorage.setItem('workspaces', JSON.stringify(workspaces))
    }
}

const createMessage = (id_workspace, id_channel, newMessage) => {
    let workspaces = getWorkspaces()
    let workspaceIndex = workspaces.findIndex(workspace => workspace.id == id_workspace)

    if (workspaceIndex !== -1) {
        let channelIndex = workspaces[workspaceIndex].channels.findIndex(channel => channel.id == id_channel)
        if (channelIndex !== -1) {
            newMessage.id = uuidv4()
            workspaces[workspaceIndex].channels[channelIndex].messages.push(newMessage)
            localStorage.setItem('workspaces', JSON.stringify(workspaces))
        }
    }
}

export { getWorkspaces, createWorkspace, getWorkspaceById, createChannel, createMessage }
