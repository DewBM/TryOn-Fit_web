import { useState } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import SalesChart from "@/app/components/charts/SalesChart";
import { FiUser, FiTruck, FiDollarSign, FiShoppingBag } from "react-icons/fi";
import { FaUndo } from "react-icons/fa";

import RatingBox from "@/app/components/RatingBox";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-4 2xl:gap-5">
        <CardDataStats title="Total Employees" total="15">
          <div
            className="rounded-full p-1.5 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiUser size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Suppliers" total="40">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiTruck size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Products" total="100">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiShoppingBag size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Profit" total="Rs.100k">
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiDollarSign size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="col-span-4 sm:col-span-3">
            <SalesChart />
          </div>
          <div className="col-span-4 sm:col-span-1">
            <CardDataStats title="Total Returns" total="22">
              <div
                className="rounded-full p-2 inline-block border-[0.5px] border-stroke " // Added margin-bottom class
                style={{
                  padding: "10px",
                  backgroundColor: "var(--main-background)",
                  boxShadow: "var(--main-drop-shadow)",
                }}
              >
                <FaUndo size={22} style={{ stroke: "var(--main-dark)" }} />
              </div>
            </CardDataStats>
            <RatingBox />
          </div>
        </div>
      </div>
    </>
  );
}
