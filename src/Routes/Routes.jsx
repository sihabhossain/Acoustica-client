import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Resgistration from "../Pages/Login/Resgistration";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myselected from "../Pages/Dashboard/Myselected";
import MyEnrolled from "../Pages/Dashboard/MyEnrolled";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Resgistration></Resgistration>,
      },
      {
        path: "instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "my-selected",
        element: <Myselected></Myselected>,
      },
      {
        path: "my-enrolled",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
]);

export default router;
