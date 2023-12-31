import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://acoustica-server-sihabhossain.vercel.app/instructors")
      .then((response) => {
        setInstructors(response.data);
      });
  }, []);

  useEffect(() => {
    // Simulate component loading
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after some time
    }, 200);
  }, []);

  if (isLoading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }

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
