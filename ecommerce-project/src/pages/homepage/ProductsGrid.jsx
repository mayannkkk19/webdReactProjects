import { useEffect, useState } from 'react';
import  axios  from 'axios';
import { Product } from './Product';

export function ProductsGrid( {loadCart} ) {
    const [products, setProducts] = useState([]);
    
      useEffect(() => {
        axios.get('/api/products')
        .then((response) => {
          setProducts(response.data);
        });
      }, []);

    return (
        products.map((product) => {
            return (
               <Product key={product.id} product={product} loadCart={loadCart}/>
            );
        })
    );
}
