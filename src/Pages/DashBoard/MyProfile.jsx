import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {email} = user;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    fetch(`http://localhost:5000/profile`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((proData) => {
         toast('Profile Updated')
        console.log(proData);
      });
  };
  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-500 mt-5">
        Name: {user?.displayName}
      </h2>
      <h2 className="text-xl font-semibold text-teal-500  mt-5">
        Your Email: {user?.email}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Education</span>
          </label>
          <textarea
            type="text"
            placeholder="Your Education"
            className="input input-bordered w-full max-w-xs h-20"
            {...register("education", {
              required: {
                value: true,
                message: "Education is Required",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>

        {/* Location  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Location</span>
          </label>
          <input
            type="text"
            placeholder="Your Location"
            className="input input-bordered w-full max-w-xs"
            {...register("location", { required: true })}
          />
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                Location is required
              </span>
            )}
          </label>
        </div>

        {/* Number  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Your Number"
            className="input input-bordered w-full max-w-xs"
            {...register("phnNumber", { required: true })}
          />
          <label className="label">
            {errors.phnNumber?.type === "required" && (
              <span className="label-text-alt text-red-500">
                Number is required
              </span>
            )}
          </label>
        </div>

        {/* Comment  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Linkedin Profile Link</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("linkedin", {
              required: {
                value: true,
                message: "Linkedin is Required",
              },
            })}
          />
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline btn-info w-full max-w-xs"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default MyProfile;
