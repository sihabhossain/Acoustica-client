import React from "react";
import { Link } from "react-router-dom";

const SinglePopular = ({ single }) => {
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
          <h2 className="card-title">Class: {single.class}</h2>
          <p>Students: {single.students}</p>
          <p>Fee: ${single.price}</p>
          <div className="card-actions justify-end">
            <Link to="/classes" className="btn btn-outline btn-accent">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePopular;
