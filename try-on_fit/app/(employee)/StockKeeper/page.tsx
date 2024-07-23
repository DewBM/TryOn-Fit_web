import { useState } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import { FiBox, FiLayers, FiAlertCircle } from "react-icons/fi";
import InventoryLineChart from "@/app/components/charts/InventoryLineChart";
import DoughnutChart from "@/app/components/charts/DoughnutChart";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:gap-8">
        <CardDataStats title="Total Products" total="1500">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiBox size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Catergories" total="26">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiLayers size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Out of Stock" total="100">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiAlertCircle size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 md:mt-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 pt-4">
        <InventoryLineChart />
        <DoughnutChart />
      </div>
    </>
  );
}
