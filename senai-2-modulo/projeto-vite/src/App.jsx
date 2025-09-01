import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Abu</h1>
      <Mensagem /><br />
      <InfoAluno /> <br />
      <InfoCurso />

    
    </>
  )
}

export default App
