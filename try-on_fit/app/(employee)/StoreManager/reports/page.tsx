"use client";  // Add this line at the top of your file

import { useState } from "react";
import Header from "@/app/components/Header";
import CardDataStats from "@/app/components/DashboardCard";
import SalesChart from "@/app/components/charts/SalesChart";
import { FiUser, FiTruck, FiDollarSign, FiShoppingBag } from "react-icons/fi";
import { FaUndo } from "react-icons/fa";
import MultiDatePickerCard from "@/app/components/reportsDateCards";
import ReportSalesChart from "@/app/components/reportSalesChart";

export default function Home() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  return (
    <>
      {/* Date Picker Card */}
      <div className="p-8">
        <MultiDatePickerCard
          setSelectedDates={setSelectedDates}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />
      </div>

      {/* Dashboard Grid Layout */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="col-span-4 sm:col-span-3">
            {/* Sales Chart Component */}
            <ReportSalesChart
              selectedDates={selectedDates}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </div>
         
        </div>
      </div>
    </>
  );
}
