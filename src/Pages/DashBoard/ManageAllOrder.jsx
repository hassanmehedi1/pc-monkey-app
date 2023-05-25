import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import AllOrderDeleteModal from "./AllOrderDeleteModal";
import AllOrderRow from "./AllOrderRow";

const ManageAllOrder = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  //   const { data: orders, isLoading, refetch } = useQuery(
  //     "order",
  //     fetch("https://pc-monkey-server-production.up.railway.app/allOrders").then(res => res.json().then(data => console.log(data)))
  //   );

  //   if(isLoading){
  //      return <Loading></Loading>
  //   }

  useEffect(() => {
    fetch("https://pc-monkey-server-production.up.railway.app/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders, user]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Shipping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrderRow
                key={index}
                order={order}
                index={index}
                setDeleteOrder={setDeleteOrder}
                //  refetch={refetch}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <AllOrderDeleteModal
          deleteOrder={deleteOrder}
          // refetch={refetch}
          setDeleteOrder={setDeleteOrder}
        ></AllOrderDeleteModal>
      )}
    </div>
  );
};

export default ManageAllOrder;
