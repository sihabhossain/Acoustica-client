import React from "react";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";

const Dashboard = () => {
  // todo
  const isAdmin = true;
  const isInstructor = false;
  const isStudent = false;

  return (
    <div>
      {isAdmin && <AdminDashboard></AdminDashboard>}
      {isInstructor && <InstructorDashboard></InstructorDashboard>}
      {isStudent && <StudentDashboard></StudentDashboard>}
    </div>
  );
};

export default Dashboard;
