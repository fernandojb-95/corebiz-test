import { useEffect, useState } from 'react';

import '../css/products.css';
import Card from './Card';
import Points from './Points';

const Products = () => {
    //Se crea estado para listado de productos
    const [products, setProducts] = useState([]);

    //Se verificado estado y se realiza el pedido para obtener el listado de productos
    useEffect(() => {
        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(result => result.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return(
        <main>
            <h2>Más vendidos</h2>
            {
                    products.length === 0 &&
                        <div className='loading'>
                            <p>Cargando</p>
                            <img src='https://c.tenor.com/8KWBGNcD-zAAAAAC/loader.gif' alt='loader' />
                        </div>
                }
            <section className='products-container'>

                {
                    products.map(product => {
                        return(
                            <Card {...product} key={product.productId} />
                        )
                    })
                }
            </section>
            <Points />
        </main>
    )
}

export default Products;