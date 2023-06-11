import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";

const ManageClasses = () => {
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/manage-classes").then((res) => {
      setMyClass(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <tbody>
              {myClass.map((single, index) => (
                <ManageClassCard
                  single={single}
                  index={index}
                  key={single._id}
                ></ManageClassCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
