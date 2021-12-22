import { useEffect, useState } from 'react';

import '../css/header.css';

const Header = () => {
    const [products,setProducts] = useState(sessionStorage.getItem('products') || 0)
    useEffect(() => {
        setProducts(sessionStorage.getItem('products', products))
    }, [products])
    return (
        <header>
            <section className="menu-icon">
                <i className="fas fa-bars"></i>
            </section>
            <section className="logo">
                <img src="https://latamlist.com/wp-content/uploads/2019/07/visuals-000387205037-PDrYbe-original-1.jpg" alt="corebiz-logo" />
            </section>
            <section className='shop-cart'> 
                <i className="fas fa-shopping-cart"></i>
                <p className='cart-products'>
                    {
                        products
                    }
                </p>
            </section>
            <section className='search-input'>
                <input type="text" placeholder='¿Qué estás buscando?' />
                <i className="fas fa-search"></i>
            </section>
            <section className='my-account'>
                <i className="far fa-user"></i>
                <p>Mi cuenta</p>
            </section>
        </header>
    )
}

export default Header;