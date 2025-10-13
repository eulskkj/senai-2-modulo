// src\components\Header\index.jsx

import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return(
        <header className="header-container">
            <div className='logo'>Sistema de Clientes</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Cadastrar</Link>
                <Link to="/contact">Listar</Link>
            </nav>
        </header>
    );
}

export default Header;