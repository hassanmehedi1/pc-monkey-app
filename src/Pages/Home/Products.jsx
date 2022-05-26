import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
   const [products] = useProducts();

   return (
     <div className="container mt-4" id="services">
       <div className="row text-center">
         <h1 className="text-secondary text-4xl text-4xl font-bold mb-2 font-mono">
           Pc Parts
         </h1>
         <div className="services-container mt-2 grid md:grid-cols-3 sm:grid-cols-1 justify-center">
           {products.slice(0, 6).reverse().map((product) => (
             <Product key={product._id} product={product}></Product>
           ))}
         </div>
       </div>
     </div>
   );
};

export default Products;