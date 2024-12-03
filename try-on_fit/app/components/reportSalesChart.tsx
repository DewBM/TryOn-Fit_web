"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

type reportDataArrayType = {
  suppliers: number[];
  revenues: number[];
};

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface SalesChartProps {
  selectType: string;
  selectedDates: { startDate: string; endDate: string };
  selectedMonth: string;
  selectedYear: string;
  selectReportType: string;
  reportData: reportDataArrayType
  // revenue: number[];
}

const ReportSalesChart: React.FC<SalesChartProps> = ({
  selectType,
  selectedDates,
  selectedMonth,
  selectedYear,
  selectReportType,
  reportData,
  // revenue,
}) => {
  const [chartData, setChartData] = useState<any>(null);
  

  useEffect(() => {
    const fetchSalesData = () => {
      // console.log(revenue);
      let labels: string[] = [];
      let dataset1: number[] = [];
      let dataset2: number[] = [];

      console.log("Report Data:", reportData);

      if (selectedDates.startDate && selectedDates.endDate && selectType === "date") {
        if (reportData && reportData.suppliers)
          labels = reportData.suppliers.map((supplier) => supplier.toString()); // Suppliers from reportData
        if (reportData && reportData.revenues)
          dataset1 = reportData.revenues; // Revenue from reportData
        // dataset1 = reportData.suppliers!=undefined ?  reportData.revenue : []; // Revenue from reportData
        // labels = reportData.map(data => data.suppliers.map(supplier => supplier.toString())).flat(); // Suppliers from reportData
        // dataset1 = reportData.map(data => data.revenue).flat(); // Revenue from reportData
        // dataset2 = [Math.random() * 100, Math.random() * 100]; // Random data

      console.log("Labels:", labels);
      console.log("Dataset1:", dataset1);

      } else if (selectType === "month") {
        const year = parseInt(selectedYear);
        const month = parseInt(selectedMonth) - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        labels = Array.from({ length: daysInMonth }, (_, i) => `${i + 1}-${selectedMonth}-${year}`);
        dataset1 = Array.from({ length: daysInMonth }, () => Math.random() * 1000);
        dataset2 = Array.from({ length: daysInMonth }, () => Math.random() * 500);
      } else if (selectType === "year") {
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ];
        labels = months;
        dataset1 = months.map(() => Math.random() * 1000);
        dataset2 = months.map(() => Math.random() * 500);
      }

      setChartData({
        labels,
        datasets: [
          {
            label: "Sales",
            data: dataset1,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Revenue",
            data: dataset2,
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
          },
        ],
      });
    };

    fetchSalesData();
  }, [selectedDates, selectedMonth, selectedYear, selectType, reportData]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
        {selectReportType}
      </h3>
      <Line data={chartData} />
    </div>
  );
};

export default ReportSalesChart;
