import React, { useContext, useEffect, useState } from "react";
import SingleClass from "../../Components/singleClass/SingleClass";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/classes").then((response) => {
      setClasses(response.data);
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-10">
      {classes.map((single) => {
        return <SingleClass single={single} key={single._id}></SingleClass>;
      })}
    </div>
  );
};

export default Classes;
