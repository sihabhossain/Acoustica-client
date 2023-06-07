import React from "react";
import TopSlider from "../../Components/TopSlider/TopSlider";
import PopularClass from "../../Components/PopularClass/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor/PopularInstructor";
import Brands from "../../Components/Brands/Brands";

const Home = () => {
  return (
    <>
      <TopSlider></TopSlider>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Brands></Brands>
    </>
  );
};

export default Home;
