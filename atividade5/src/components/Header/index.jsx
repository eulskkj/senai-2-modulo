// src\components\Header\index.jsx
import { NavLink, Link } from "react-router-dom"
import './style.css'
import hero from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="header_wrap">
                <Link to="/" className="brand">
                    <img src={hero} alt="Logo do WhatsApp" /><br />
                    <span>WhatsApp</span>
                </Link>
                
                <nav className="nav">
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Serviços
                    </NavLink><br />
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                    </NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Contatos <br />
                    </NavLink>
                    Sobre Nós  
                </nav>
            </div>
        </header>
    )
}

export default Header