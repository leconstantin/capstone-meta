import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const AppLayout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 shadow-md">
        <Header />
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
