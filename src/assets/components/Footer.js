import '../css/footer.css';
import logo from '../img/site-logo-corebiz-preto-cinza.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className='footer-section'>
                <section className="location">
                    <h3>Ubicación</h3>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                    <p> Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </section>
                <section className="contact-info">
                    <a href="/" className="contact">
                        <i className="fas fa-envelope"></i>
                        <p>Contáctanos</p>
                    </a>
                    <a href="/" className="contact">
                        <i className="fas fa-headphones"></i>
                        <p>Habla con un consultor</p>
                    </a>
                </section>
                <section className="info">
                    <div className="info-container">
                        <p>Desarrollado por</p>
                        <img src={logo} alt='corebiz'/>
                    </div>
                    <div className="info-container second">
                        <p>Powered by</p>
                        <img src='https://avatars.githubusercontent.com/u/1288938?s=280&v=4' alt='vtex' />
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;