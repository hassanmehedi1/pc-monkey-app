import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
   const {
     data: users,
     isLoading,
     refetch,
   } = useQuery("users", () =>
     fetch("http://localhost:5000/user", {
       method: "GET",
     }).then((res) => res.json())
   );
   if (isLoading) {
     return <Loading></Loading>;
   }
   return (
     <div>
       <h2 className="text-xl font-semibold text-purple-700 mt-4">User's List</h2>
       <div class="overflow-x-auto">
         <table class="table w-full">
           {/* <!-- head --> */}
           <thead>
             <tr>
               <th></th>
               <th>User</th>
               <th>Role</th>
             </tr>
           </thead>
           <tbody>
             {users.map((user, index) => (
               <UserRow
                 index={index}
                 user={user}
                 refetch={refetch}
                 key={user._id}
               ></UserRow>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default Users;