// pages/index.tsx or pages/home.tsx
import { useState } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import { FiPackage , FiClock, FiClipboard, FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-4 2xl:gap-8">
        <CardDataStats title="Orders Today" total="150">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiPackage  size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Pending Orders" total="50">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiClock size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Orders in Progress" total="50">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiClipboard size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Completed Orders" total="50">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiCheckCircle size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
    </>
  );
}
