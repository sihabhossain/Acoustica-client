import axios from "axios";
import React, { useEffect, useState } from "react";

const MyClasses = () => {
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/add-class").then((res) => {
      setMyClass(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Image</th>
                <th>Status</th>

                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myClass.map((single, index) => (
                <tr key={single._id}>
                  <th>{index + 1}</th>
                  <td>{single.name}</td>

                  <td>{single.instructor}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded">
                        <img src={single.photo} />
                      </div>
                    </div>
                  </td>
                  <td>{single.status}</td>

                  <th>
                    {single.status === "denied" ? <p>{single.feedback}</p> : ""}
                  </th>
                  <td>
                    <button className="btn btn-ghost bg-red-500 rounded-full">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
