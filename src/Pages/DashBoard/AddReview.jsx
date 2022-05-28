import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);
  const { email, displayName } = user;

  const onSubmit = (data, e) => {
    console.log(data);

    const url = `https://stark-lake-42381.herokuapp.com/review`;
    axios.post(url, data).then((response) => {
      const { data } = response;
      console.log(data);
      if (data.insertedId) {
        reset();
        toast.success("Your Review is Added");
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            defaultValue={displayName}
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

        {/* Rating  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Rate</span>
          </label>
          <input
            type="number"
            placeholder="Give Rating Out Of 5"
            className="input input-bordered w-full max-w-xs"
            {...register("rating", { required: true, min: 1, max: 5 })}
          />
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                Rating is required
              </span>
            )}
            {errors.rating?.type === "min" && (
              <span className="label-text-alt text-red-500">
                Minimum rating is 1
              </span>
            )}
            {errors.rating?.type === "max" && (
              <span className="label-text-alt text-red-500">
                Max rating is 5
              </span>
            )}
          </label>
        </div>

        {/* Comment  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Add Comments</span>
          </label>
          <textarea
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs h-20"
            {...register("comment", {
              required: {
                value: true,
                message: "Comment is Required",
              },
            })}
          />
          <label className="label">
            {errors.comment?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.comment.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline btn-info w-full max-w-xs"
          disabled={errors.rating?.type}
          type="submit"
          value="Add New"
        />
      </form>
    </div>
  );
};

export default AddReview;
