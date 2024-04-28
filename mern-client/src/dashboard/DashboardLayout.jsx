
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <DashboardSidebar></DashboardSidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
