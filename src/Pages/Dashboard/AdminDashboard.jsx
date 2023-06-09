import React from "react";
import Container from "../../Components/Container/Container";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineBook, AiOutlineUser } from "react-icons/ai";

const AdminDashboard = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <div>
        <div className="drawer lg:drawer-open bg-gray-300">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-blue-950 text-white">
              {/* Sidebar content here */}
              <li className="text-2xl font-bold">
                <Link to="/dashboard/manage-classes">
                  {" "}
                  <AiOutlineBook></AiOutlineBook> Manage Classes
                </Link>
              </li>
              <li className="text-2xl font-bold">
                <Link to="/dashboard/manage-users">
                  {" "}
                  <AiOutlineUser></AiOutlineUser> Manage Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default AdminDashboard;
