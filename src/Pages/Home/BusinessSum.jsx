import React from 'react';

const BusinessSum = () => {
   return (
     <>
     <div>
        <h2 className='text-3xl font-semibold text-secondary text-center mt-4'>Business Summary</h2>
     </div>
       <div class="stats w-full shadow-lg">
         <div class="stat gap-4">
           <div class="stat-figure text-primary">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               class="inline-block w-8 h-8 stroke-current"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
               ></path>
             </svg>
           </div>
           <div class="stat-title font-semibold">Total Active Customers</div>
           <div class="stat-value text-primary">10.6K</div>
           <div class="stat-desc">25% more than last month</div>
         </div>

         <div class="stat">
           <div class="stat-figure text-secondary">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               class="inline-block w-8 h-8 stroke-current"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M13 10V3L4 14h7v7l9-11h-7z"
               ></path>
             </svg>
           </div>
           <div class="stat-title font-semibold">Parts Available</div>
           <div class="stat-value text-secondary">52.6K</div>
           <div class="stat-desc">33% more than last month</div>
         </div>

         <div class="stat">
           <div class="stat-figure text-secondary">
             <div class="avatar online">
               <div class="w-16 rounded-full">
                 <img src="https://api.lorem.space/image/face?w=128&h=128" />
               </div>
             </div>
           </div>
           <div class="stat-value">85%</div>
           <div class="stat-title font-semibold">Satisfied Clients</div>
           <div class="stat-desc text-secondary">15% more than last month</div>
         </div>
       </div>
     </>
   );
};

export default BusinessSum;