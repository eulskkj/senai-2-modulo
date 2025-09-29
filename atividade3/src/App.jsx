import { useState } from 'react'
import './App.css'
import InfoJogador from './assets/components/InfoJogador'
import logo from './assets/images/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={logo} alt="logo do time" className='jogador-logo' />
     <InfoJogador />
    </>
  )
}

export default App
