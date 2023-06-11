import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../../Components/Modal/Modal";

const ManageClassCard = ({ single, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const { data: singles = [], refetch } = useQuery(["singles"], async () => {
  //   const res = await fetch("http://localhost:5000/manage-classes");
  //   return res.json();
  // });

  // approve
  const handleApprove = (single) => {
    fetch(`http://localhost:5000/approved-classes/${single._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(single),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Approved Successfully");
        }
      });
  };

  // deny
  const handleDeny = (single) => {
    fetch(`http://localhost:5000/denied-classes/${single._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(single),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.error("Denied Successfully");
        }
      });
  };

  // send feedback

  return (
    <div>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Instructor</th>
          <th>Image</th>
          <th>Status</th>
          <th>Students</th>
          <th>Send Feedback</th>
          <th>Deny</th>
          <th>Update</th>
        </tr>
      </thead>
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
        <td>0 Students</td>
        <td>
          <button
            onClick={openModal}
            className="btn btn-ghost bg-red-500 rounded-full"
          >
            Feedback
            {/* Modal */}
          </button>
        </td>
        <td>
          {single.status === "denied" ? (
            <button
              disabled={true}
              className="btn btn-ghost bg-red-500 rounded-full"
            >
              deny
            </button>
          ) : (
            <button
              onClick={() => handleDeny(single)}
              className="btn btn-ghost bg-red-500 rounded-full"
            >
              deny
            </button>
          )}
        </td>
        <td>
          {single.status === "approved" ? (
            <button
              className="btn btn-ghost bg-red-500 rounded-full"
              disabled={true}
            >
              Approve
            </button>
          ) : (
            <button
              onClick={() => handleApprove(single)}
              className="btn btn-ghost bg-red-500 rounded-full"
            >
              Approve
            </button>
          )}
        </td>
      </tr>
      <Modal
        single={single}
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
    </div>
  );
};

export default ManageClassCard;
