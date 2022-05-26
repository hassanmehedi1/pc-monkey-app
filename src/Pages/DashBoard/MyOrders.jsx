import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import OrderDeleteConfirmModal from "./OrderDeleteConfirmModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/orders?client=${user.email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={index} order={order} index={index} setDeleteOrder={setDeleteOrder} refetch={refetch}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {
         deleteOrder && <OrderDeleteConfirmModal deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder}></OrderDeleteConfirmModal>
      }
    </div>
  );
};

export default MyOrders;
