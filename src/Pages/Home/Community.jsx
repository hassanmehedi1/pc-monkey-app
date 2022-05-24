import React from 'react';
import bg from '../../assets/bg/bg-pc-1.jpg';

const Community = () => {
   return (
     <div>
       <h2 className="text-3xl font-semibold text-primary text-center">
         Community Help
       </h2>
       <section className="p-6  mb-5">
         <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
           <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
             <span className="block mb-2 dark:text-violet-400">Community</span>
             <h1 className="text-5xl font-extrabold dark:text-gray-50 mb-3">
               Join Our Community To Share & Learn More
             </h1>
             <form
               novalidate=""
               action=""
               className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
             >
               <div>
                 <label for="name" className="text-sm sr-only">
                   Your name
                 </label>
                 <input
                   id="name"
                   type="text"
                   placeholder="Your name"
                   className="w-full rounded-sm focus:ring focus:ring-violet-400 dark:border-gray-700"
                 />
               </div>
               <div>
                 <label for="lastname" className="text-sm sr-only">
                   Email address
                 </label>
                 <input
                   id="lastname"
                   type="text"
                   placeholder="Email address"
                   className="w-full rounded-sm focus:ring focus:ring-violet-400 dark:border-gray-700"
                 />
               </div>
               <button
                 type="button"
                 className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
               >
                 Join the Wait-list
               </button>
             </form>
           </div>
           <img
             src="https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg?t=st=1653246608~exp=1653247208~hmac=a805e05c842f6344649b35856858061074724dd5b29d704f3024d852b58a95ce&w=996"
             alt=""
             className="w-auto rounded-md xl:col-span-3 dark:bg-gray-500"
           />
         </div>
       </section>
     </div>
   );
};

export default Community;