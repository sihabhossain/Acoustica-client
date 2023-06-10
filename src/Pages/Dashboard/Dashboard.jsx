import React from "react";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Dashboard = () => {
  // todo
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
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
