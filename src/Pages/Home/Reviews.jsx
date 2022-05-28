import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`https://stark-lake-42381.herokuapp.com/review`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-28">
      <div className="flex flex-col items-center justify-center mb-3">
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-primary">
          Hear From Our Clients
        </h1>
        <p className="text-base leading-6 mt-4 text-center text-secondary 2xl:w-2/5 ">
          Here is why you should trust us with your work achievements
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.reverse().map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
