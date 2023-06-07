import React, { useEffect, useState } from "react";
import SingleInstructor from "../SingleInstructor/SingleInstructor";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center my-10 text-4xl font-bold text-green-300">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
        {instructor.map((single) => (
          <SingleInstructor
            single={single}
            key={single.name}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
