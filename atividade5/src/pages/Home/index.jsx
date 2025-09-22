// src/pages/Home/index.jsx
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/image.png'

function Home() {
    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero_text'>
                    <h1>WhatsApp</h1>
                    <p>Comunique-se com seus clientes de forma rápida e prática</p>
                    <div className='hero__cta'>
                        <Link to="/servicos" className='btn primary'>Nossos Serviços</Link><br />
                        <Link to="/fale-conosco" className='btn'>Fale Conosco</Link>
                    </div>
                </div>
                <div className='hero__image'>
                    <img src={logo} alt='WhatsApp' />
                </div>
            </section>

            <section className='features'>
                <h2>Por que nos escolher?</h2>
                <div className='grid cls-3'>
                    <div className='card'>
                        <h3>Atendimento Rápido</h3>
                        <p>Nosso time está sempre pronto para ajudar você</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Suporte com qualquer aplicativo</p>
                    </div>
                    <div className='card'>
                        <h3>Aplicativo Móvel</h3>
                        <p>Disponível para qualquer dispositivo móvel com acesso à internet</p>
                    </div>  
                </div>             
            </section>
        </div>
    );
}

export default Home;
