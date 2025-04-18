import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Header/Banner";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="">
          <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
