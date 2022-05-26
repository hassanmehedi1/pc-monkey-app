import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    const url = `http://localhost:5000/parts`;
    axios.post(url, data).then((response) => {
      const { data } = response;
      console.log(data);
      if (data.insertedId) {
        e.target.reset();
        toast.success("Your Item is added");
      }
    });
  };
  return (
    <div className="w-50 mx-auto mb-10">
      <h2 className="text-center text-2xl font-semibold text-green-500 mb-3">
        Add Product
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Product Name</span>
          </label>
          <textarea
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs h-14"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Product Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs h-24"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        {/* Price */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Product Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", { required: true })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                Price is required
              </span>
            )}
          </label>
        </div>

        {/* Min Order*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">
              Set Minimum Order Quantity
            </span>
          </label>
          <input
            type="number"
            placeholder="Minimum Order Quantity"
            defaultValue={50}
            className="input input-bordered w-full max-w-xs"
            {...register("minOrder", {
              min: 50,
              required: {
                value: true,
                message: "Min Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minOrder && (
              <span className="label-text-alt text-red-600">
                Minimum Order Quantity has to be 50 or above!
              </span>
            )}
          </label>
        </div>

        {/* Available Quantity */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Set Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("available", { required: true })}
          />
          <label className="label">
            {errors.available?.type === "required" && (
              <span className="label-text-alt text-red-500">
                Price is required
              </span>
            )}
          </label>
        </div>

        {/* Photo Url  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Set Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url Link"
            className="input input-bordered w-full max-w-xs"
            {...register("img", {
              required: {
                value: true,
                message: "Url is Required",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-outline btn-info w-full max-w-xs"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
