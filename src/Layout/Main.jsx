import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home";
import Container from "../Components/Container/Container";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
