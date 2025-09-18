// src\components\Footer\index.jsx

import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__wrap'>
        <div>
            <strong> WhatsApp</strong> - CNPJ: 00.000.000/0000-00
            </div>
            <div>
                Rua do Cachorro, 930 - Centro - São Paulo - SP
            </div>
            <div className='copy'>
                © {new Date().getFullYear()} - Todos os direitos reservados.

        </div>
      </div>
    </footer>
  );
}
export default Footer;










