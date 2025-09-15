// src\App.jsx

import { useState } from 'react'
import './App.css'
import CadastrarUsuario from './components/CadastrarUsuario'
import ListarUsuarios from './components/ListarUsuario'

function App() {
  const [usuarios, setUsuarios] = useState([]) // estado centralizado

  return (
    <>
      <CadastrarUsuario setUsuarios={setUsuarios} usuarios={usuarios} />
      <ListarUsuarios usuarios={usuarios} />
    </>
  )
}

export default App
