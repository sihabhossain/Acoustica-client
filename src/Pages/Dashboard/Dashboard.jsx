import React, { useContext } from "react";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      {isAdmin && <AdminDashboard></AdminDashboard>}
      {isInstructor && <InstructorDashboard></InstructorDashboard>}
      {user && <StudentDashboard></StudentDashboard>}
    </div>
  );
};

export default Dashboard;
