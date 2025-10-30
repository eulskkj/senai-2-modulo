// frontend\src\components\Header\index.jsx

import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <header className="header-container">
            <div className="logo">Gerenciamento de Usuários</div>
            <nav>
                <Link to="/">Home</Link>
                <link to="/cadastro">Cadastrar</link>
                <Link to="/listar">Listar Usuario</Link>
            </nav>
        </header>
    );
}   
export default Header;