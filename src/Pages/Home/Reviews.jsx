import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
   const {
     data: reviews,
     isLoading,
     refetch,
   } = useQuery("reviews", () =>
     fetch(`http://localhost:5000/review`).then((res) =>
       res.json()
     )
   );

   if (isLoading) {
     return <Loading></Loading>;
   }
   return (
     <section className="my-28">
       <div className="grid justify-center mb-5 mt-0">
         <div>
           <h2 className="text-primary font-semibold text-3xl">
             Our Clients Reviews
           </h2>
         </div>
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