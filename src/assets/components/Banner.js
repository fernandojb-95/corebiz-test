import '../css/banner.css';
import img from '../img/banner-corebiz.jpg';
import Points from './Points';

const Banner = () => {
    return(
        <section className="main-banner">
            <img src={img} alt='main-banner-img' />
            <div className='banner-titles'>            
                <p className='banner-title-1'>¡Hola! ¿Qué es lo que estás buscando?</p>
                <p className='banner-title-2'>¿Crear o migrar tu negocio electrónico?</p>
            </div>
            <Points/>
        </section>
    )
}

export default Banner;