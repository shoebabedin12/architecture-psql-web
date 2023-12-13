import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SocialIcon />
      <Navbar />
    </>
  );
};

export default Layout;
