import { use, useEffect } from 'react';
import './style.css';

function ListarUsuario() {
    const [usuarios, setUsuarios] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get("/usuarios");
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }   
        }
        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    }

    return (
        <div className="listar-usuario-container">
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nome}  <br />
                        {usuario.email}  <br />
                        {usuario.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarUsuario;