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
    fetch(`https://pc-monkey-server-production.up.railway.app/review`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-14">
      <div className="flex flex-col items-center justify-center mb-3">
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-primary">
          Hear From Our Clients
        </h1>
        <p className="text-base leading-6 mt-4 text-center text-secondary 2xl:w-2/5 ">
          Here is what are our clients have to say about our product's and
          service
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews
          .slice(-6)
          .reverse()
          .map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
      </div>

      {/* <h1 className="lg:text-4xl text-3xl font-bold text-center text-primary">
        Hear From Our Clients
      </h1>
      <p className="text-base leading-6 mt-4 text-center text-secondary 2xl:w-2/5 mb-4">
        Here is what are our clients have to say about our product's and service
      </p>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {reviews.reverse().map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Carousel> */}
    </section>
  );
};

export default Reviews;
