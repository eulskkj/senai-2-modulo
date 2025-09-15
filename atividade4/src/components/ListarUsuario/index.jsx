// src\components\ListarUsuario\index.jsx

import React from 'react';
import './style.css';

function ListarUsuarios({ usuarios }) {
  return (
    <div className="listar-usuarios">
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.email} - {usuario.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
