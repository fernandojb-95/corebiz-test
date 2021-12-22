import '../css/banner.css';
import img from '../img/banner-corebiz.jpg';
const Banner = () => {
    return(
        <section className="main-banner">
            <img src={img} alt='main-banner' />
            <h2>¡Hola! ¿Qué es lo que estás buscando?</h2>
            <h3>¿Crear o migrar tu negocio electrónico?</h3>
        </section>
    )
}

export default Banner;