"use client";

import { useEffect, useState } from "react";
import MultiDatePickerCard from "@/app/components/reportsDateCards";
import ReportSalesChart from "@/app/components/reportSalesChart";
import { customFetch } from "@/app/utils/auth";

export default function Home() {
  const [selectType, setSelectionType] = useState<string>("date");
  const [selectedDates, setSelectedDates] = useState<{ startDate: string; endDate: string }>({ startDate: "", endDate: "" });
  const [selectedMonth, setSelectedMonth] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [selectReportType, setDataType] = useState<string>("");
  const [reportData, setreportDataArray] = useState<reportDataArrayType>({suppliers: [], revenues: []});
  const [reportMonthData, setreportMonthDataArray] = useState<reportDataArrayType>({suppliers: [], revenues: []});
  const [reportYearData, setreportYearDataArray] = useState<reportDataArrayType>({suppliers: [], revenues: []});


  type reportDataArrayType = {
    suppliers: number[];
    revenues: number[];
  };

  useEffect(() => {
    const getReportData = async () => {
      try {
        // Construct the query string for the API request
        if(selectedDates.startDate !== "" && selectedDates.endDate !== ""&& selectType == "date"){
        const queryString = new URLSearchParams({
          startDate: selectedDates.startDate ,
          endDate: selectedDates.endDate ,
          selectionType: selectType, // Include selectedType in the query string
         
        }).toString();
        

        // Define the API URL
        const url = `/report?${queryString}`;
        console.log("Fetching data from:", url);

        // Fetch the data
        const reportDataArray: any = await customFetch(url, {
          method: "GET",
        });
      
        // Set the fetched data in state
        console.log("Fetched Report Data:", reportDataArray);
        setreportDataArray(reportDataArray.responseData);






      }else if (selectedMonth !== "" && selectType == "month") {
        console.log("Selected month:", selectedMonth);
        const queryString = new URLSearchParams({
          month: selectedMonth,
          selectionType: selectType,
          year: selectedYear,
        }).toString();

        const url = `/report?${queryString}`;
        console.log("Fetching data from:", url);

        const reportDataArray: any = await customFetch(url, { method: "GET" });
        console.log("report  month data:", reportDataArray);
        setreportMonthDataArray(reportDataArray.responseMonthlyData);
      }
      
      
      
      
      
      
      
      else if(selectedYear !== "" && selectType == "year"){
        const queryString = new URLSearchParams({
          year: selectedYear,
          selectionType: selectType, // Include selectedType in the query string
        }).toString();
        

        // Define the API URL
        const url = `/report?${queryString}`;
        console.log("Fetching data from:", url);

        // Fetch the data
        const reportyearDataArray: any = await customFetch(url, {
          method: "GET",
        });
      
        // Set the fetched data in state
        console.log("Fetched Report Data:", reportyearDataArray);
        setreportYearDataArray(reportyearDataArray.responseMyearlyData);






      }else{
        console.log("No data to fetch");
      }




      } catch (error) {
              console.error("Error fetching report data:", error);
            }
          };
      
          getReportData();
        }, [selectedDates, selectType, selectReportType,selectedMonth,selectedYear]); // Add selectType as a dependency


  // Function to handle downloading the report
  const handleDownload = async () => {
    console.log("Selected Start Date:", selectedDates.startDate);
    console.log("Selected End Date:", selectedDates.endDate);
    console.log("Selected reportType:", selectReportType);
    console.log("Selected Type:", selectType);

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
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
            setSelectedDates={(dates: { startDate: string; endDate: string }) => setSelectedDates(dates)}
            setSelectedMonth={setSelectedMonth}
            setSelectedYear={setSelectedYear}
            setSelectionType={setSelectionType} // Updates selectType
            setDataType={setDataType}
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
              onClick={()=>window.print()}
              className="bg-main-dark text-white rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2"
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
            selectReportType={selectReportType}
            reportData={reportData}
            reportMonthData={reportMonthData}
            reportYearData={reportYearData}
            // revenue={reportData[0]?.revenue || []} // Provide a default value to handle empty arrays
/>

        </div>
      </div>
    </div>
  );
}
