// src/components/CadastrarUsuario/index.jsx

import React, { useState } from 'react';
import './style.css';

function CadastrarUsuario({ usuarios, setUsuarios }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setUsuarios([...usuarios, { nome, email, telefone }]); // agora atualiza no App
    setNome('');
    setEmail('');
    setTelefone('');
  }

  return (
    <div className="cadastrar-usuario">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarUsuario;
