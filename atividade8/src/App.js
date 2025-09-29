import React from 'react';
import './App.css';

function App() {
    const [usuario, setUsuario] = React.useState('');
    const [usuarios, setUsuarios] = React.useState(['Marta', 'João', 'Maria']);

    const adicionarUsuario = () => {
        if (usuarios.includes(usuario)) {
            alert('Usuário já existe');
            return;
        }

        setUsuarios([...usuarios, usuario]);
        setUsuario('');
    };

    return (
        <div className="App">
            <h1>Lista de Usuários</h1>
            <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Digite o nome do usuário"
            />
            <button onClick={adicionarUsuario}>Adicionar Usuário</button>
            <ul>
                {usuarios.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;