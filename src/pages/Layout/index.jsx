import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-g-gray-50 to-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default index;
