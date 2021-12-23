import '../css/card.css';
import Button from './Button';
const Card = props => {
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Product" className="product-img"/>
            {
                props.listPrice &&
                <section className='off'>OFF</section>
            }
            
            <div className='product-info'>
                <p className="product-title">{props.productName}</p>
                <section className="product-rating">
                    <i className="far fa-star"></i>
                </section>
                {
                    props.listPrice &&
                    <p className="list-price">de { props.listPrice.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                }
                <p className="product-price"> por {props.price.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                {
                    props.installments.length > 0 &&
                    <p className="installments"> o {props.installments[0].quantity} pagos de ${props.installments[0].value.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})} </p>
                }
                <Button   />
            </div>
        </div>
    )
}

export default Card;