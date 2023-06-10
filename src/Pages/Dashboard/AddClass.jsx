import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const seats = form.seats.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const price = form.price.value;
    const status = form.status.value;
    const photo = form.photo.value;

    const newClass = {
      name,
      seats,
      instructor,
      email,
      price,
      status,
      photo,
    };

    axios.post("http://localhost:5000/add-class", newClass).then((res) => {
      if (res.data.insertedId) {
        toast.success("Class Added");
      }
    });
  };
  return (
    <div className="bg-gray-500  p-24">
      <h2 className="text-3xl font-extrabold">add Class</h2>
      <form onSubmit={handleAddClass}>
        {/* form Coffe name and quantity */}
        <div className="md:flex mb-8">
          <div className="form-control md: w-1/2">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Class Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>
            <label className="input-group">
              <span>Seats</span>
              <input
                type="text"
                name="seats"
                placeholder="Available seats"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste */}
        <div className="md:flex mb-8">
          <div className="form-control md: w-1/2">
            <label className="label">
              <span className="label-text">instructor Name</span>
            </label>
            <label className="input-group">
              <span>Instructor</span>
              <input
                type="text"
                name="instructor"
                defaultValue={user?.displayName}
                placeholder="instructor"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details */}
        <div className="md:flex mb-8">
          <div className="form-control md: w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <span>Price</span>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <label className="input-group">
              <span>Status</span>
              <input
                type="text"
                name="status"
                placeholder="status"
                defaultValue={"pending"}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo URL */}
        <div className="form-control  w-full mb-8">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <label className="input-group">
            <span>photo</span>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Class"
          className="btn btn-block bg-black text-white"
        />
      </form>
    </div>
  );
};

export default AddClass;
