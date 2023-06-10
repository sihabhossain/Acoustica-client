import React, { useContext, useEffect, useState } from "react";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider";

const Dashboard = () => {
  const { user, setLoading, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    // Simulate component loading
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after some time
    }, 200);
  }, []);

  if (isLoading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }

  return (
    <div>
      {isAdmin && <AdminDashboard></AdminDashboard>}
      {isInstructor && <InstructorDashboard></InstructorDashboard>}
      {isAdmin || isInstructor ? "" : <StudentDashboard></StudentDashboard>}
    </div>
  );
};

export default Dashboard;
