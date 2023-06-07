import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { Login, googleLogin } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("successfully logged in");
        console.log(loggedUser);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  // Google Sign In
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("successfully logged in");
        console.log(user);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-1  h-screen w-full">
        <div className="bg-gray-200 flex flex-col justify-center">
          <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <form onSubmit={handleLogin}>
              <h2 className="text-4xl dark:text-white font-bold text-center">
                Login
              </h2>
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

              <button className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                Login
              </button>
            </form>
            <div onClick={handleGoogle}>
              <button className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                Continue With Google
              </button>
            </div>

            <div className="text-center">
              <small className="text-white">
                New To Acoustica?
                <Link className="text-teal-500 ml-4" to="/register">
                  Sign up
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
