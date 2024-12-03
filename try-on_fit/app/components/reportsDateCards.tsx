"use client";

import React, { useState } from "react";

interface MultiDatePickerCardProps {
  setSelectedDates: (dates: { startDate: string; endDate: string }) => void;
  setSelectedMonth: (month: string) => void;
  setSelectedYear: (year: string) => void;
  setSelectionType: (selectType: string) => void;
  setDataType: (dataType: string) => void;
}

const MultiDatePickerCard: React.FC<MultiDatePickerCardProps> = ({
  setSelectedDates,
  setSelectedMonth,
  setSelectedYear,
  setSelectionType,
  setDataType,
}) => {
  const [dataType, setDataTypeState] = useState<"sales" | "orders" | "returns">("sales");
  const [selectionType, setSelectionTypeState] = useState<"date" | "month" | "year">("date");
  const [selectedDates, setSelectedDatesState] = useState<{ startDate: string; endDate: string }>({
    startDate: "",
    endDate: "",
  });
  const [selectedMonth, setSelectedMonthState] = useState<string>("1");
  const [selectedYear, setSelectedYearState] = useState<string>("2023");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const handleDateChange = (field: "startDate" | "endDate", value: string) => {
    const updatedDates = { ...selectedDates, [field]: value };
    setSelectedDatesState(updatedDates);
    setSelectedDates(updatedDates); // Pass to parent
  };

  return (
    <div className="rounded-lg border border-stroke bg-white px-8 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Data Type Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Select Report Type:
        </h3>
        <select
          value={dataType}
          onChange={(e) => {
            const value = e.target.value as "sales" | "orders" | "returns";
            setDataTypeState(value);
            setDataType(value); // Pass to parent
          }}
          className="mt-1 block w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="sales">Sales and Revenue Data</option>
          <option value="orders">Orders</option>
          <option value="returns">Returns</option>
        </select>
      </div>

      {/* Selection Type */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Choose Selection Type:
        </h3>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              value="date"
              checked={selectionType === "date"}
              onChange={() => {
                setSelectionTypeState("date");
                setSelectionType("date");
                setSelectedMonth("1");
                setSelectedYear("2023");
              }}
              className="mr-2"
            />
            Date
          </label>
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              value="month"
              checked={selectionType === "month"}
              onChange={() => {
                setSelectionTypeState("month");
                setSelectionType("month");
                setSelectedDates({ startDate: "", endDate: "" });
              }}
              className="mr-2"
            />
            Month
          </label>
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              value="year"
              checked={selectionType === "year"}
              onChange={() => {
                setSelectionTypeState("year");
                setSelectionType("year");
                setSelectedDates({ startDate: "", endDate: "" });
                setSelectedMonth("1");
              }}
              className="mr-2"
            />
            Year
          </label>
        </div>
      </div>

      {/* Input Fields Based on Selection Type */}
      <div className="space-y-6">
        {selectionType === "date" && (
          <div>
            <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              value={selectedDates.startDate}
              onChange={(e) => handleDateChange("startDate", e.target.value)}
              className="mt-1 block w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <label
              htmlFor="end-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              value={selectedDates.endDate}
              onChange={(e) => handleDateChange("endDate", e.target.value)}
              className="mt-1 block w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
        )}

        {selectionType === "month" && (
          <div>
            <label
              htmlFor="month"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Select Month
            </label>
            <select
              id="month"
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonthState(e.target.value);
                setSelectedMonth(e.target.value); // Pass to parent
              }}
              className="mt-1 block w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectionType === "year" && (
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Select Year
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYearState(e.target.value);
                setSelectedYear(e.target.value); // Pass to parent
              }}
              className="mt-1 block w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiDatePickerCard;
