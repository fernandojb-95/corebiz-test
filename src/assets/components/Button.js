import { useEffect, useState } from 'react';
import '../css/button.css';

const Button = () => {
    //Se crea estado para conteo de productos
    let [products, setProducts] = useState(parseInt(sessionStorage.getItem('products' || 0)))

    //Se implementa impresión de cantidad de artículos
    useEffect(() => {
        const quantity = document.querySelector('.cart-products');
        quantity.innerText = 0;
    }, [])

    //Se realiza la suma de productos verificando que existan artículos en sesión
    useEffect(() => {
        const quantity = document.querySelector('.cart-products');
        if(sessionStorage.getItem('products') !== null){
            sessionStorage.setItem('products', parseInt(products))
            quantity.innerText = products;
        }

    }, [products])

    //Función para agregar producto al carrito
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