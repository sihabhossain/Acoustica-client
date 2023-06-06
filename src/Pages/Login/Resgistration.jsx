import React from "react";
import { Link } from "react-router-dom";

const Resgistration = () => {
  return (
    <div className="grid grid-cols-1  max-h-screen w-full">
      <div className="bg-gray-200 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirm Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="confirm"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>PhotoURL</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="photo"
            />
          </div>
          <div>
            <button className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Continue With Google
            </button>
          </div>
          <button className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign Up
          </button>

          <div className="text-center">
            <small className="text-white">
              Already have an account?
              <Link className="text-teal-500 ml-4" to="/login">
                Login
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resgistration;
