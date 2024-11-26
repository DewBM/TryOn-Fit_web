"use client";

import { useState } from "react";
import MultiDatePickerCard from "@/app/components/reportsDateCards";
import ReportSalesChart from "@/app/components/reportSalesChart";

export default function Home() {
  const [selectType, setSelectionType] = useState<string>("");
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  // Mock function to handle downloading the report
  const handleDownload = () => {
    const data = {
      type: selectType,
      dates: selectedDates,
      month: selectedMonth,
      year: selectedYear,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "report-data.json"; // File name for the download
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Reports Dashboard
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Track sales, revenue, orders, and returns with ease.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Section - Date Picker */}
        <div className="xl:col-span-1 bg-white dark:bg-boxdark rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Filter Options
          </h2>
          <MultiDatePickerCard
            setSelectedDates={setSelectedDates}
            setSelectedMonth={setSelectedMonth}
            setSelectedYear={setSelectedYear}
            setSelectionType={setSelectionType}
            setDataType={() => {
              console.log("Data type not implemented");
            }}
          />
        </div>

        {/* Right Section - Sales Chart */}
        <div className="xl:col-span-2 bg-white dark:bg-boxdark rounded-lg p-6 shadow-md">
          {/* Sales Overview Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Sales Overview
            </h2>
            <button
              onClick={handleDownload}
              className="bg-main-dark text-white rounded-md  px-4 py-2 text-sm font-medium   focus:outline-none focus:ring-2 "
            >
              Download Report
            </button>
          </div>

          {/* Chart Component */}
          <ReportSalesChart
            selectType={selectType}
            selectedDates={selectedDates}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </div>
  );
}
