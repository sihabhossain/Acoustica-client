import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
  return (
    <Slide>
      <div className="card shadow-sm ">
        <figure>
          <img
            className="w-[400px] h-[350px] hover:scale-125 transition"
            src={instructor.image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-semibold">Name:</span> {instructor.name}
          </h2>
          <p>
            <span className="font-semibold">Classes:</span>{" "}
            {instructor.classesTaken[0]} , {instructor.classesTaken[1]}
          </p>
          <p>
            <span className="font-semibold">Classes Taken:</span>
            {instructor.numClassesTaken}
          </p>

          <p>
            <span className="font-semibold">Contact:</span> {instructor.email}
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default InstructorCard;
