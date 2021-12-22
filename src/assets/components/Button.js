import { useEffect, useState } from 'react';
import '../css/button.css';

const Button = () => {
    let [products, setProducts] = useState(sessionStorage.getItem('products' || 0))

    useEffect(() => {
        sessionStorage.setItem('products', products + 1);
    }, [products])

    const buy = (e) => {
        let cart = sessionStorage.getItem('products' || 0)
        setProducts(cart +=1)
    }
    return(
        <div>
            <p>{products}</p>
            <button onClick={buy} className="buy-button">Comprar</button>
        </div>

    )
}

export default Button;