import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header"> 
            <div className='logo'>Sistema de Clientes</div>
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/cadrasto_cliente">Cadrasto de Cliente</Link>
                <Link to ="/cadrasto_produto">Cadrasto de Produto</Link>
                <Link to ="/lista_cliente">Lista de Cliente</Link>
                <Link to ="/lista_produto">Lista de Produto</Link>
            </nav>
        </header>
    );
}
export default Header;