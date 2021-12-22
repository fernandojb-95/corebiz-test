import '../css/newsletter.css';

const Newsletter = () => {
    return(
        <section className='newsletter'>
            <h3 className="news-title">¡Únete a nuestras novedades y promociones!</h3>
            <form className="news-form">
                <input type="text" placeholder="Ingresa tu nombre"/>
                <input type="text" placeholder="Ingresa tu email"/>
                <button className="news-button">Sucribirme</button>
            </form>
        </section>
    )
}

export default Newsletter;