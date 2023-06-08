import React, { useEffect, useState } from "react";
import SinglePopular from "../singlePopular/SinglePopular";
import "./FancyUnderline.css";

const PopularClass = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("homeClass.json")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
      });
  }, []);
  return (
    <div className="my-20 ">
      <h2 className="text-center my-10 text-4xl font-bold text-[#0C4B65] fancy-underline">
        Popular Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {classData.map((single) => (
          <SinglePopular single={single} key={single.price}></SinglePopular>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
