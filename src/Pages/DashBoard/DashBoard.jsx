import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';

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
         <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content bg-transparent">
           {/* <!-- Sidebar content here --> */}
           {!admin && (
             <>
               <li>
                 <CustomLink to="/dashboard/orders">My Orders</CustomLink>
               </li>
               <li>
                 <CustomLink to="/dashboard/review">Add a Review</CustomLink>
               </li>
             </>
           )}

           <li>
             <CustomLink to="/dashboard">My Profile</CustomLink>
           </li>
           {admin && (
             <>
               <li>
                 <CustomLink to="/dashboard/users">Make Admin</CustomLink>
               </li>
               <li>
                 <CustomLink to="/dashboard/manageorder">Manage All Orders</CustomLink>
               </li>
               <li>
                 <CustomLink to="/dashboard/addproduct">Add a Product</CustomLink>
               </li>
               <li>
                 <CustomLink to="/dashboard/manageproducts">Manage Products</CustomLink>
               </li>
             </>
           )}
         </ul>
       </div>
     </div>
   );
};

export default DashBoard;