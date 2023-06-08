import axios from "axios";
import React, { useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  axios.get("http://localhost:5000/instructors").then((response) => {
    setInstructors(response.data);
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
      {instructors.map((instructor) => {
        return (
          <InstructorCard
            instructor={instructor}
            key={instructor.email}
          ></InstructorCard>
        );
      })}
    </div>
  );
};

export default Instructor;
