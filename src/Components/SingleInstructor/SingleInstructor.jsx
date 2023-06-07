import React from "react";

const SingleInstructor = ({ single }) => {
  return (
    <div className="card shadow-sm ">
      <figure>
        <img
          className="w-[400px] h-[350px] hover:scale-150 transition"
          src={single.image}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-semibold">Name:</span> {single.name}
        </h2>
        <p>
          <span className="font-semibold">Class:</span> {single.className}
        </p>
        <p>
          <span className="font-semibold">Students:</span>
          {single.totalStudents}
        </p>
        <p>
          <span className="font-semibold">Contact:</span> {single.email}
        </p>
      </div>
    </div>
  );
};

export default SingleInstructor;
