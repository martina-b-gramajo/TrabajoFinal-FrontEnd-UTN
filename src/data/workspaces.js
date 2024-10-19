import { v4 as uuidv4 } from 'uuid'

export const workspaces_initial_state = [
    {
        id: 1,
        name: 'Workspace 1',
        description: 'Workspace 1 description',
        img: 'https://picsum.photos/id/237/200/300',
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola',
                        hour: '14:56'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?',
                        hour: '14:56'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola',
                        hour: '14:56'
                    },
                    {
                        id: 2,
                        author: 'Pepe 3',
                        text: 'Que onda?',
                        hour: '14:56'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Workspace 2',
        description: 'Workspace 2 description',
        img: 'https://picsum.photos/id/238/200/300',
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Juan',
                        text: 'Hola desde el segundo workspace'
                    },
                    {
                        id: 2,
                        author: 'Maria',
                        text: 'Qué tal todos?'
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
    let workspaces = getWorkspaces();
    let workspaceIndex = workspaces.findIndex(workspace => workspace.id == id_workspace);

    if (workspaceIndex !== -1) {
        newChannel.id = uuidv4();
        workspaces[workspaceIndex].channels.push(newChannel);
        localStorage.setItem('workspaces', JSON.stringify(workspaces));
    }
}

export { getWorkspaces, createWorkspace, getWorkspaceById, createChannel }

