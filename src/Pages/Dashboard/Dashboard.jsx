import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../../Components/Container/Container";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
  return (
    <div>
      <StudentDashboard></StudentDashboard>
    </div>
  );
};

export default Dashboard;
