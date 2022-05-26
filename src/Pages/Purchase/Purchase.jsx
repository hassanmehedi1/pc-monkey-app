import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const { purchaseId } = useParams();

  const [parts, setParts] = useState({});
  const [user] = useAuthState(auth);
  const { name, minOrder, available, price } = parts;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/parts/${purchaseId}`;
      try {
        const { data } = await axios.get(url);
        setParts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [purchaseId, parts]);

  const onSubmit = (data, e) => {
    console.log(data);

    const url = `http://localhost:5000/orders`;

    axios.post(url, data).then((response) => {
      const { data } = response;
      console.log(data);
      if (data.insertedId) {
        e.target.reset();
        toast.success("Order Placed");
      }
    });
  };

  return (
    <div>
      {/* <div className="card rounded-xl w-96 bg-base-100 shadow-xl mb-4 mx-auto">
        <div>
          <figure>
            <img className="w-50 mx-auto" src={parts.img} alt="parts" />
          </figure>
        </div>
        <div className="card-body text-left">
          <h2 className="card-title text-xl font-bold">{parts.name}</h2>
          <h4 className="font-semibold">Price: ${parts.price}</h4>
          <h5 className="font-semibold">
            Min-Order-Quantity: {parts.minOrder}
          </h5>
          <h6 className="font-semibold">
            Available-Quantity: {parts.available}
          </h6>
          <p>{parts.description}</p>
        </div>
      </div>
      <div className="flex flex-col w-50 mx-auto"></div> */}

      <div class="card w-2/3 mx-auto lg:card-side bg-base-100 shadow-xl mb-12 mt-5">
        <figure>
          <img className="w-96" src={parts.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 className="card-title text-xl font-bold">{parts.name}</h2>
          <h4 className="font-semibold">Price: ${parts.price}/pc</h4>
          <h5 className="font-semibold">
            Min-Order-Quantity: {parts.minOrder}
          </h5>
          <h6 className="font-semibold">
            Available-Quantity: {parts.available}
          </h6>
          <p>{parts.description}</p>
        </div>
      </div>
      <div class="divider">O</div>

      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="font-semibold text-2xl text-indigo-600 text-center">
            Place Order
          </h2>
          <form
            className="grid grid-cols-1 gap-4 justify-items-center mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Name"
              defaultValue={user.displayName}
              {...register("name")}
            />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
              defaultValue={user.email}
              {...register("email")}
            />

            {name && (
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Item"
                defaultValue={name}
                name="item"
                {...register("item")}
              />
            )}
            <label>Price</label>
            {price && (
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Price"
                defaultValue={price}
                name="price"
                {...register("price")}
              />
            )}
            <label>Quantity</label>
            <input
              className="input input-bordered w-full max-w-x"
              placeholder="Quantity"
              defaultValue={50}
              type="number"
              {...register("quantity", {
                min: 50,
                max: `${available}`,
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.quantity && (
                <span className="label-text-alt text-red-600">
                  Minimum Order Quantity is 50 and Max should be less or equal
                  to available quantity!
                </span>
              )}
            </label>
            <input
              className="input input-bordered w-full max-w-x"
              placeholder="Phone Number"
              type="number"
              {...register("number")}
            />
            <input
              className="input input-bordered w-full max-w-x"
              placeholder="Address"
              type="text"
              {...register("address")}
            />

            <input
              className="btn btn-outline btn-info w-full max-w-xs"
              name="submit"
              disabled={errors.quantity}
              type="submit"
              value="Purchase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
