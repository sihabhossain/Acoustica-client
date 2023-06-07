import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Resgistration = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = event.target.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    const photoURL = form.photo.value;

    const newUser = {
      name,
      email,
      password,
      confirmPassword,
      photoURL,
    };

    createUser(email, password)
      .then((result) => {
        if (password !== confirmPassword) {
          toast.error("password didnt matched");
        } else {
          const user = result.user;
          console.log(user);

          toast.success("User Created Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  // Google login
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Logged in");
        console.log(user);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-1   h-screen w-full">
      <div className="bg-gray-200 flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Sign Up
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute ml-[300px] mt-10"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="h-6 w-6" />
                ) : (
                  <AiFillEye className="h-6 w-6" />
                )}
              </div>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Confirm Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type={showPassword2 ? "text" : "password"}
                name="confirm"
                required
              />
              <div
                onClick={togglePasswordVisibility2}
                className="absolute ml-[300px] mt-10"
              >
                {showPassword2 ? (
                  <AiFillEyeInvisible className="h-6 w-6" />
                ) : (
                  <AiFillEye className="h-6 w-6" />
                )}
              </div>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>PhotoURL</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="photo"
                required
              />
            </div>

            <button className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Sign Up
            </button>
          </form>
          <div>
            <button
              onClick={handleGoogle}
              className="w-full my-5 py-2 bg-[#0C4B65] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            >
              Continue With Google
            </button>
          </div>

          <div className="text-center">
            <small className="text-white">
              Already have an account?
              <Link className="text-teal-500 ml-4" to="/login">
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resgistration;
