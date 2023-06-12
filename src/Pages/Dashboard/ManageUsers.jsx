import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineBook, AiOutlineUserSwitch } from "react-icons/ai";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://acoustica-server-sihabhossain.vercel.app/users"
    );
    return res.json();
  });

  // make admin
  const handleMakeAdmin = (user) => {
    fetch(
      `https://acoustica-server-sihabhossain.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success("User Updated as Admin");
        }
      });
  };

  // make instructor
  const handleMakeInstructor = (user) => {
    fetch(
      `https://acoustica-server-sihabhossain.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success("User Updated as Instructor");
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <>
                      <button
                        disabled={true}
                        className="btn btn-ghost bg-indigo-600 rounded-full text-white"
                      >
                        <AiOutlineUserSwitch></AiOutlineUserSwitch>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-indigo-600 rounded-full text-white"
                    >
                      <AiOutlineUserSwitch></AiOutlineUserSwitch>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    <>
                      {" "}
                      <button
                        disabled={true}
                        className="btn btn-ghost bg-red-500 text-white rounded-full"
                      >
                        <AiOutlineBook></AiOutlineBook>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost bg-red-500 text-white rounded-full"
                    >
                      <AiOutlineBook></AiOutlineBook>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
