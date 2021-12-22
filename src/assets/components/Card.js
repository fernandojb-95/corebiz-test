import '../css/card.css';
const Card = props => {
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Product" className="product-img"/>
            <p className="product-title">{props.productName}</p>
            <section className="product-rating">
            <i className="far fa-star"></i>
            </section>
            <p className="list-price">{props.listPrice && props.listPrice}</p>
            <p className="product-price">{props.price}</p>
            {
                props.installments.length > 0 &&
                <p className="installments">{props.installments[0].quantity} pagos de ${props.installments[0].value} </p>
            }
            
            <button className="">Comprar</button>
        </div>
    )
}

export default Card;