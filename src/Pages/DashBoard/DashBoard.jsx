import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);


   return (
     <div className="drawer drawer-mobile">
       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
       <div className="drawer-content ">
         {/* <!-- Page content here --> */}
         <h2 className="text-2xl font-bold text-sky-500">
           Welcome To Dashboard
         </h2>
         <Outlet></Outlet>
       </div>
       <div className="drawer-side">
         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
         <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
           {/* <!-- Sidebar content here --> */}
           {!admin && (
             <>
               <li>
                 <Link to="/dashboard">My Orders</Link>
               </li>
               <li>
                 <Link to="/dashboard/review">Add a Review</Link>
               </li>
             </>
           )}

           <li>
             <Link to="/dashboard/profile">My Profile</Link>
           </li>
           {admin && (
             <>
               <li>
                 <Link to="/dashboard/users">Make Admin</Link>
               </li>
               <li>
                 <Link to="/dashboard/manageorder">Manage All Orders</Link>
               </li>
               <li>
                 <Link to="/dashboard/addproduct">Add a Product</Link>
               </li>
               <li>
                 <Link to="/dashboard/manageproducts">Manage Products</Link>
               </li>
             </>
           )}
         </ul>
       </div>
     </div>
   );
};

export default DashBoard;