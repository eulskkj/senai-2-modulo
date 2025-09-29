import React from 'react';
import './App.css';

function App() {
    const [compra, setCompra] = React.useState('');
    const [compras, setCompras] = React.useState(['Pão', 'arroz', 'farinha']);
    
    const adicionarCompras =() =>  {
      if (compras.includes(compra)) {
        alert('Esse item ja foi adicionado');
        return;
      }
      setCompras([...compras, compra]);
      setCompra('');
    };
    return (
      <div className='App'>
        <h1>Adicionar Produto</h1>
          <input
          type ="text"
          value= {compra}
          onChange={(e) => setCompra(e.target.value)}
          placeholder='Digite o item'
          />
          <button onClick={adicionarCompras}>Adicionar produto</button>
          <h1>Lista de Produto</h1>
          <ul>
            {compras.map((user, index) => (
              <li key={index}> {user}</li>
            ))}
          </ul>


      </div>
    );
}
export default App;
