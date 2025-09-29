// projeto\src\App.js

import React, { useState } from 'react';
import './App.css';
import logo from '../src/assests/images/logo_senai.png'; 

import AdicionarProduto from './componentes/adicionarProdutos';
import ListaDeProdutos from './componentes/listarProdutos';

function App() {
  const [produtos, setProdutos] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarUsuario = (nome) => {
    const produto = nome.trim();

    if (produtos.includes(produto)) {
      alert('O produto já existe!');
      return;
    }  
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Produtos</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      <hr />
      <h2>Lista de produtos</h2>
      <ListaDeProdutos itens={produtos} />
    </div>
  );
}

export default App;