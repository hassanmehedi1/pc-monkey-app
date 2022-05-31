import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}

      <li>{<p className="text-blue-500">{user?.displayName}</p>}</li>
      <li>
        {user ? (
          <button
            onClick={logout}
            className="btn bg-red-600 btn-ghost text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="bg-green-400">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost font-mono font-bold text-2xl uppercase text-indigo-500"
        >
          PC Monkey
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          {user?.photoURL ? (
            <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
              <img
                src={user?.photoURL}
                alt
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
          ) : (
            <div className="h-10 w-10 mb-4 lg:mb-0 mr-4 ml-4">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                alt
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-center">
        <label
          htmlFor="my-drawer-2"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
