import React from 'react';
import { BsFillStarFill } from "react-icons/bs";


const Review = ({review}) => {
   const {name, rating, comment} = review;
   return (
     <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md border shadow-xl">
       <div className="flex justify-between p-4">
         <div className="flex space-x-4">
           <div>
             <img
               src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
               alt=""
               className="object-cover w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5"
             />
           </div>
           <div>
             <h4 className="font-bold">{name}</h4>
             <span className="text-xs dark:text-gray-400">2 days ago</span>
           </div>
         </div>
         <div className="flex items-center space-x-2 dark:text-yellow-400">
           <BsFillStarFill></BsFillStarFill>
           <span className="text-xl font-bold">{rating}</span>
         </div>
       </div>
       <div className="p-4 space-y-2 text-sm dark:text-gray-600">{comment}</div>
     </div>
   );
};

export default Review;