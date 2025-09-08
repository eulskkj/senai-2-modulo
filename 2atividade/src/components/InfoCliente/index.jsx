// src\components\InfoCliente\index.jsx
import { useState } from 'react';
import './style.css';

function InfoCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, { nome, email }]);
        setNome('');
        setEmail('');
    }
    return (
        <div className='Info-Cliente'>
            <h2>Cadrasto do Cliente</h2>
            <form onSubmit={adicionarCliente}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required /> 
                </div>
                <button type="submit">Adicionar Cliente</button>
            </form>
            <h2>Lista de Cliente</h2>
            <ul>
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email}</li>
                ))}
            </ul>
        </div>

    );
}
export default InfoCliente;