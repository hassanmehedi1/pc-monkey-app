import React from "react";

const AllOrderRow = ({ index, order, setDeleteOrder }) => {
  const { item, name, quantity, price, email, status, _id } = order;

  const makeShipped = () => {
    fetch(
      `https://pc-monkey-server-production.up.railway.app/order/admin/${_id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{item}</td>
      <td>{quantity}</td>
      <td>
        {order.price && order.paid && status !== "shipped" && (
          <div>
            <span className="text-primary font-bold">Pending</span>
            <br />
          </div>
        )}
        {status === "shipped" && (
          <div>
            <span className="text-orange-600 font-bold">Shipped</span>
            <br />
          </div>
        )}
        {order.price && !order.paid && (
          <div>
            <span className="text-warning font-bold">UnPaid</span>
            <br />
          </div>
        )}
      </td>
      <td>
        {order.price && order.paid && status !== "shipped" && (
          <button
            onClick={makeShipped}
            className="btn border-gray-100 border-2 btn-xs text-white bg-green-500"
          >
            Make Shipped
          </button>
        )}
      </td>
      <td>
        {!order.paid && (
          <label
            onClick={() => setDeleteOrder(order)}
            for="all-order-delete-confirm-modal"
            className="btn btn-xs btn-error"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default AllOrderRow;
