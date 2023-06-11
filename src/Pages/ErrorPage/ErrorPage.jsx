import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.2.1983216414.1680192950&semt=ais"
          alt=""
        />
        <div className="max-w-md text-center">
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
