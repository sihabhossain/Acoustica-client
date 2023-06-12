import axios from "axios";
import React, { useEffect, useState } from "react";

const Myselected = () => {
  const [mySelected, setMyselected] = useState([]);

  useEffect(() => {
    axios
      .get("https://acoustica-server-sihabhossain.vercel.app/my-selected")
      .then((res) => {
        setMyselected(res.data);
      });
  }, []);

  const handleEnroll = () => {};

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
                <th>Pay Fee</th>
                <th>Delete Class</th>
              </tr>
            </thead>
            <tbody>
              {mySelected.map((selected, index) => (
                <tr key={selected._id}>
                  <th>{index + 1}</th>
                  <td>{selected.name}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded">
                        <img src={selected.image} />
                      </div>
                    </div>
                  </td>
                  <td>{selected.instructor}</td>
                  <td>
                    <button
                      onClick={handleEnroll}
                      className="btn btn-ghost bg-indigo-500 rounded-full"
                    >
                      Pay ${selected.price}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost bg-red-500 rounded-full">
                      Delete
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

export default Myselected;
