import { useState } from 'react'
import './App.css'
import InfoCliente from './components/InfoCliente'
import logo from './assets/images/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={logo} alt="Logo da empresa" className='cliente-incone' />
      <h1>Olá</h1>
      <InfoCliente />
    </>
  )
}

export default App
