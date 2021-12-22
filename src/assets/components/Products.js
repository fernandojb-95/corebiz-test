import { useEffect, useState } from 'react';

import '../css/products.css';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([]);
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
            <section className='products-container'>
                {
                    products.map(product => {
                        return(
                            <Card {...product} key={product.productId} />
                        )
                    })

                }
            </section>
        </main>
    )
}

export default Products;