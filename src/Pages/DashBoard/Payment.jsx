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

  const url = `https://stark-lake-42381.herokuapp.com/orders/${id}`;

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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {order?.name}</p>
          <h2 className="card-title">Please Pay for {order?.item}</h2>
          <p className="font-semibold text-indigo-500">
            Product Price: ${order?.price}
          </p>
          <p className="font-semibold text-orange-500">
            Quantity Selected: {order?.quantity}
          </p>
          <div class="divider"></div>
          <p className="font-semibold text-purple-600">
            Your Total price: ${`${+order.price * +order.quantity}`}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
