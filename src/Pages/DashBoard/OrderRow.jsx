import React from 'react';

const OrderRow = ({order, index, setDeleteOrder}) => {
   
   return (
     <tr>
       <th>{index + 1}</th>
       <td>{order.name}</td>
       <td>{order.item}</td>
       <td>{order.quantity}</td>
       <td>Pay</td>
       <td>
         <label
           onClick={() => setDeleteOrder(order)}
           for="delete-confirm-modal"
           class="btn btn-xs btn-error"
         >
           Delete
         </label>
       </td>
     </tr>
   );
};

export default OrderRow;