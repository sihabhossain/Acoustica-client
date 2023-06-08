import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Resgistration from "../Pages/Login/Resgistration";
import Instructor from "../Pages/Instructor/Instructor";

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
    ],
  },
]);

export default router;
