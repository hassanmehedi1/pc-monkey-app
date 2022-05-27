import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
   const { name, price, description, img, minOrder, available,_id } = product;

   const navigate = useNavigate();
   const navigateToPurchase = (id) => {
     navigate(`/purchase/${id}`);
   };
   return (
     <div className="card rounded-xl w-96 bg-base-100 shadow-xl mb-4 m-0">
       <figure>
         <img className="w-50 mx-auto" src={img} alt="parts" />
       </figure>
       <div className="card-body text-left">
         <h2 className="card-title text-xl font-bold">{name}</h2>
         <h4 className="font-semibold">Price: ${price}/pc</h4>
         <h5 className="font-semibold">Min-Order-Quantity: {minOrder}</h5>
         <h6 className="font-semibold">Available-Quantity: {available}</h6>
         <p className='text-xs'>{description}</p>
       </div>
       <div className="grid justify-center mb-3">
         <button
             onClick={() => navigateToPurchase(_id)}
           className=" bg-purple-500 text-white hover:bg-purple-600 font-semibold p-2 px-4 rounded-full w-64"
         >
           Place Order
         </button>
       </div>
     </div>
   );
};

export default Product;