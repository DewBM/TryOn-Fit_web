"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideBarItem from "./SideBarItem";
import { FiHome,FiPlusCircle,FiClock,FiCheckCircle, FiSettings, FiShoppingBag, FiTag, FiPackage, FiArrowUp, FiUsers, FiTruck, FiMessageSquare, FiShoppingCart, FiArrowLeftCircle, FiBarChart,FiStar } from "react-icons/fi";

interface SidebarProps {
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
  role:
    | "StockKeeper"
    | "StoreManager"
    | "CustomerSupport"
    | "DistributionCoordinator";
}

const Sidebar: React.FC<SidebarProps> = ({
  sideBarOpen,
  setSideBarOpen,
  role,
}) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState("");

  const sidebarItemsByRole = {
    StockKeeper: [
      { label: "DashBoard", route: "/StockKeeper", icon: <FiHome /> },
      { label: "Products", route: "/StockKeeper/Product", icon: <FiPackage /> },
      { label: "Restock", route: "/restock", icon: <FiArrowUp />  },
    ],
    StoreManager: [
      { label: "DashBoard", route: "/StoreManager", icon: <FiHome /> },
      { label: "Employee", route: "/StoreManager/employee", icon: <FiUsers /> },
      { label: "Supplier",route: "/StoreManager/supplier",icon: <FiTruck />, },
     // { label: "Inquiry",route: "/StoreManager/inquiry",icon: <FiMessageSquare />, },
      //{ label: "Order",route: "/StoreManager/orders",icon: <FiShoppingCart />, },
     // { label: "Return",route: "/StoreManager/return",icon: <FiArrowLeftCircle />, },
      { label: "Reports",route: "/StoreManager/reports",icon: <FiBarChart />, },
    ],
    CustomerSupport: [
      { label: "DashBoard", route: "/CustomerSupport", icon: <FiHome /> },
      { label: "Inquiry", route: "/CustomerSupport/inquiry", icon: <FiMessageSquare /> },
      { label: "Customer Feedback",route: "/customer-feedback",icon: <FiStar />,
      },
    ],
    DistributionCoordinator: [
      { label: "DashBoard", route: "/DistributionCoordinator", icon: <FiHome /> },
      { label: "Total Orders", route: "/DistributionCoordinator/orders", icon: <FiPackage /> },
      { label: "New Orders", route: "/DistributionCoordinator/orders", icon: <FiPlusCircle /> },
      { label: "Processing Orders", route: "/DistributionCoordinator/orders", icon: <FiClock /> },
      { label: "Shipped Orders", route: "/DistributionCoordinator/orders", icon: <FiCheckCircle /> },
      { label: "Returns", route: "/DistributionCoordinator/return", icon: <FiArrowLeftCircle /> },
    ],
  };

  const sidebarItems = sidebarItemsByRole[role] || [];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-main-lighter shadow-md transition-transform transform ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full sm:ml-0"
      } lg:translate-x-0`}
    >
      <div className="items-center">
        <img
          src="/images/Fashion_logo.svg"
          className="h-18 w-18 align-middle px-12 mt-6 mb-3"
          alt="Fashion Logo"
        />
      </div>
      <nav className="p-5">
        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <SideBarItem
              key={index}
              item={item}
              pageName={pageName}
              setPageName={setPageName}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
