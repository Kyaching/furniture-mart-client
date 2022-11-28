import React from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const {user, loading, userSignOut} = useContext(AuthContext);
  const signOut = () => {
    userSignOut()
      .then(() => {
        localStorage.removeItem("accessToken");
      })
      .catch(err => console.log(err));
  };

  const menu = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-16 h-16" src={logo} alt="" />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hidden md:block"
          >
            Furniture Mart
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <button onClick={signOut} className="btn btn-primary">
            Sign Out
          </button>
        ) : (
          <div className="flex">
            <Link to="/signin" className="btn btn-primary mr-4">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
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
    </div>
  );
};

export default Navbar;
