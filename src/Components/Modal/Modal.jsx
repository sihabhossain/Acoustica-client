import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Modal = ({ isModalOpen, single, closeModal }) => {
  // write feedbacks to instructors
  const handleFeedback = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = form.feedback.value;

    const feedBack = {
      data,
    };

    fetch(`http://localhost:5000/feedback/${single._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedBack),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("feedback sent");
        }
      });
  };

  return (
    <div>
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-lg p-8 w-[400px] h-[200px] max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Write Your Feedback</h2>
            <form onSubmit={handleFeedback}>
              <div className="mb-4">
                <label htmlFor="feedback" className="text-gray-700">
                  Feedback
                </label>
                <input
                  id="feedback"
                  name="feedback"
                  className="block w-full rounded border border-gray-300 p-2 mt-1"
                  rows="4"
                  required
                ></input>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-gray-600 border rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
