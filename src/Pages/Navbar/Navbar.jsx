import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ProfileCard from "../Login/ProfileCard/ProfileCard";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  // Logout
  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100  w-52 text-2xl"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Instructors</Link>
            </li>
            <li>
              <Link>Classes</Link>
            </li>
            <li>
              <Link>Dashboard </Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center p-3 gap-3">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-bass-music-flaticons-lineal-color-flat-icons.png"
              alt="external-bass-music-flaticons-lineal-color-flat-icons"
            />
            <div className="text-[#0C4B65]">
              <p className="mt-3 text-3xl font-semibold">Acoustica</p>
              <small>music school</small>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#0C4B65] px-1 text-lg font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard </Link>
            </li>
          )}
          {user && <li>{user ? <ProfileCard></ProfileCard> : ""}</li>}
          <li>
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-[#0C4B65] text-white hover:bg-slate-400 px-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
