"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideBarItem from "./SideBarItem";
import { FiHome, FiSettings, FiShoppingBag, FiTag } from "react-icons/fi";

const Sidebar = (props: {
  sideBarOpen: boolean;
  setSideBarOpen: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState("");

  const sidebarItems = [
    { label: "DashBoard", route: "/", icon: <FiHome /> },
    { label: "Products", route: "/about", icon: <FiShoppingBag /> },
    { label: "Catergories", route: "/notifications", icon: <FiTag /> },
    { label: "Settings", route: "/messages", icon: <FiSettings /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-main-lighter shadow-md transition-transform transform   ${
        props.sideBarOpen ? "translate-x-0" : "-translate-x-full sm:ml-0"
      } lg:translate-x-0`}
    >
      <div className="items-center">
        <img src="/images/Fashion_logo.svg" className="h-18 w-18 align-middle px-12  mt-6 mb-3" />
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
