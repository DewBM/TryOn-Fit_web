"use client";
import { useEffect, useState } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import SalesChart from "@/app/components/charts/SalesChart";
import { FiUser, FiTruck, FiDollarSign, FiShoppingBag } from "react-icons/fi";
import { FaUndo } from "react-icons/fa";

import RatingBox from "@/app/components/RatingBox";
import { customFetch } from "@/app/utils/auth";

export default function Home() {
  const [totalEmployee, setTotalEmployee] = useState<string>("0");
  const [totalSupplier, setTotalSupplier] = useState<string>("0");
  const [totalProduct, setTotalProduct] = useState<string>("0");
  const [totalRevenue, setTotalRevenue] = useState<string>("0");


  useEffect(() => {
    const dashboardData = async () => {
      try {
        const url = `/dashboard`;
        const response = await customFetch(url, {
          method: "GET",
        });
        console.log("total employee",response);
        if (response) {
          setTotalEmployee(response.totalEmployees);
          setTotalProduct(response.totalProducts);
          setTotalSupplier(response.totalSuppliers);
          setTotalRevenue(response.revenue);
          
        } else {
          console.error("Invalid response format:", response);
          setTotalEmployee("0"); // Fallback in case of invalid response
        }
      } catch (error) {
        console.error("Failed to fetch total employees:", error);
        setTotalEmployee("0"); // Fallback in case of an error
      }
    };
    dashboardData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-4 2xl:gap-5">
        <CardDataStats title="Total Employees" total={totalEmployee || "0"}>
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
        <CardDataStats title="Total Suppliers" total={totalSupplier || "0"}>
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
        <CardDataStats title="Total Products" total={totalProduct || "0"}>
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
        <CardDataStats title="Total Profit" total={(parseFloat(totalRevenue) * 90 / 100).toFixed(2) || "0"}>
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
            <CardDataStats title="Total Returns" total= {totalRevenue || "0"}>
              <div
                className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
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
