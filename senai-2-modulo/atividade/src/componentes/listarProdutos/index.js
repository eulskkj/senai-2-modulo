// atividade\src\componentes\listarProdutos\index.js

import React from 'react';
import './style.css';

const ListaDeProdutos = ({itens = []}) => {
    return (
        <ul className='lista-produtos'>
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ListaDeProdutos;















