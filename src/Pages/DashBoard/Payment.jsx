import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";




const stripePromise = loadStripe(
  "pk_test_51L1tdnBBi6FBKjNNZpraspypb005cwduYGLLtch7bXMzQ1CzrQJgLocZgLuX6Qp3TXbtH37WrelZsUpHm6NqmDbl009D1i6mzH"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order?.name}</p>
          <h2 class="card-title">Please Pay for {order?.item}</h2>
          <p className="font-semibold text-indigo-500">Please pay: ${order?.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
