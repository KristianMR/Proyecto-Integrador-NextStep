import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Carreras from './pages/Carreras'

import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/" element ={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/carreras" element={<Carreras />} />
    </Routes>
  )
}

export default App
