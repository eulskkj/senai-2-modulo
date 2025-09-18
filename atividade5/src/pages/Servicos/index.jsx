// src\pages\Servicos\index.jsx
import './style.css';

function Servicos() {
    return (
        <selection className ='servicos'>
            <h1>Serviços do WhatsApp</h1>
            <p>Fornecemos comunicação mais facilitada</p>

            <div className='grid cols-3'> 
                <div className = 'card'>
                    <h3>Abertura da empresa</h3>
                    <p>Abra sua empresa com a gente</p>
                </div>

                <div className = 'card'>
                    <h3>Consultoria</h3>
                    <p>Consultoria para sua empresa</p>
                </div>

                <div className = 'card'>
                    <h3>Marketing</h3>
                    <p>Marketing para sua empresa</p>
                </div>
            </div>
        </selection> 

    );
}

export default Servicos;