"use client";

import React, { useState } from "react";
import Sidebar from "@/app/components/SideBar";
import Header from "@/app/components/Header";

interface LayoutProps {
  children: React.ReactNode;
  role:
    | "StockKeeper"
    | "StoreManager"
    | "CustomerSupport"
    | "DistributionCoordinator";
}

const Layout: React.FC<LayoutProps> = ({ children, role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      
      <Sidebar
        sideBarOpen={sidebarOpen}
        setSideBarOpen={setSidebarOpen}
        role="StockKeeper" 
      />

      <div
        className={`relative flex flex-1 flex-col ${
          sidebarOpen ? "ml-64" : "ml-0"
        } lg:ml-64`}
      >
        <Header sideBarOpen={sidebarOpen} setSideBarOpen={setSidebarOpen} />

        <main className="mx-10 max-w-screen-2xl md:p-6 2xl:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
