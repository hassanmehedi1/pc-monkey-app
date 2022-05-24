import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
     <section className="flex items-center h-full p-16 ">
       <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
         <div className="max-w-md text-center">
           <img
           className='w-full'
             src="https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7923.jpg?t=st=1653315427~exp=1653316027~hmac=481e9c8c19fb20ee0bf86e9002722f66058f2d8ea7bd2e92b1a517061a65005c&w=740"
             alt=""
           />
           <p className="mt-4 mb-8 dark:text-gray-400">
             But dont worry, you can find plenty of other things on our
             homepage.
           </p>
           <Link
             rel="noopener noreferrer"
             to="/"
             className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
           >
             Back to Homepage
           </Link>
         </div>
       </div>
     </section>
   );
};

export default NotFound;