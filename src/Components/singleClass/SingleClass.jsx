import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const SingleClass = ({ single }) => {
  const { user } = useContext(AuthContext);

  const handleEnroll = () => {
    if (user) {
      return;
    } else {
      toast.error("Please login to enroll");
    }
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm">
        <figure>
          <img
            className="hover:scale-125 transition"
            src={single.image}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor: {single.instructor}</h2>
          <h2 className="card-title">Class: {single.name}</h2>
          <p>Available Seats: {single.availableSeats}</p>
          <p>Fee: ${single.price}</p>
          <div className="card-actions justify-end">
            <Link
              onClick={handleEnroll}
              to="/classes"
              className="btn btn-outline btn-accent"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClass;
