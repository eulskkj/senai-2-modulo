// src\pages\Home\index.jsx
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div className='home'>
            <selection className='hero'>
                <div className='hero_img'>
                    <h1>WhatsApp</h1>
                    <p>Comunique-se com seus clientes de forma rápida e prática</p>
                    <div className='hero_cta'>
                    <Link to="/servicos" className='btn primary'>Nossos Serviços</Link>
                    <Link to="/fale-conosco" className='btn'>Fale Conosco</Link>
                    </div>
                </div>
                <div className='hero_imgage'>
                    <img src={hero} alt="Equipe de contabilidade" />
                </div>
            </selection>

            <selection className='features'>
                <h2>Por que nos escolher?</h2>
                <div className='grid cols-3'>
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
                    <p>Disponivel para qualquer dispotisitvo móvel com acesso a internet</p>
                </div>

                
                </selection>

                </div>
        </div>
    );
}

export default Home;