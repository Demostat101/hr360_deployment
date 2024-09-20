import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/navigation/sideNavBar/SideNavBar";
import TopNavBar from "../components/navigation/topNavBar/TopNavBar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#F6F7FA] relative">
      <SideNavBar />
      <div className="w-full min-h-screen overflow-auto overflow-x-hidden">
        <TopNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
