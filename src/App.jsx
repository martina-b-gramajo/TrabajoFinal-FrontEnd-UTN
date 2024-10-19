import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import CreateWorkspacePage from './Pages/CreateWorkspacePage/CreateWorkspacePage'
import WorkspacePage from './Pages/WorkspacePage/WorkspacePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/workspace/new' element={<CreateWorkspacePage />} />
        <Route path='/workspace/:id_workspace/:id_channel' element={<WorkspacePage />} />
      </Routes>
    </>
  )
}

export default App
