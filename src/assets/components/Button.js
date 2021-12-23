import { useEffect, useState } from 'react';
import '../css/button.css';

const Button = () => {
    let [products, setProducts] = useState(parseInt(sessionStorage.getItem('products' || 0)))

    useEffect(() => {
        const quantity = document.querySelector('.cart-products');
        quantity.innerText = 0;
    }, [])
    useEffect(() => {
        const quantity = document.querySelector('.cart-products');
        if(sessionStorage.getItem('products') !== null){
            sessionStorage.setItem('products', parseInt(products))
            quantity.innerText = products;
        }

    }, [products])

    const buy = (e) => {
        if(sessionStorage.getItem('products') === null){
            sessionStorage.setItem('products', 1)
            setProducts(1)
        }
        else{
            let cart = parseInt(sessionStorage.getItem('products'))
            setProducts(cart +1)
        }

    }
    return(
        <div>
            <button onClick={buy} className="buy-button">Comprar</button>
        </div>

    )
}

export default Button;