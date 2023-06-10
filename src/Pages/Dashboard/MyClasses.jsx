import axios from "axios";
import React, { useEffect, useState } from "react";

const MyClasses = () => {
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/add-class").then((res) => {
      setMyClass(res.data);
      console.log(myClass);
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
                <th>image</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Students</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myClass.map((single, index) => (
                <tr key={single._id}>
                  <th>{index + 1}</th>
                  <td>{single.name}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded">
                        <img src={single?.image} />
                      </div>
                    </div>
                  </td>
                  <td>{single.instructor}</td>
                  <td>{single.status}</td>
                  <td>0 Students</td>
                  <td> </td>
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
