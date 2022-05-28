import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index, setDeleteOrder, refetch }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.name}</td>
      <td>{order.item}</td>
      <td>{order.quantity}</td>
      <td className="font-semibold">{order.price}</td>
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-warning">Pay Now</button>
          </Link>
        )}
        {order.price && order.paid && (
          <div>
            <span className="text-success font-bold">Paid</span>
            <br />
            <span className="text-success text-xs">
              Transaction id: {order.transactionId}
            </span>
          </div>
        )}
      </td>
      <td>
        {!order.paid && (
          <label
            onClick={() => setDeleteOrder(order)}
            for="delete-confirm-modal"
            className="btn btn-xs btn-error"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
