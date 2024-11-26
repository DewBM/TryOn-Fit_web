"use client";  // Add this line at the top of your file

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

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface SalesChartProps {
  selectedDates: string[];
  selectedMonth: string;
  selectedYear: string;
}

const ReportSalesChart: React.FC<SalesChartProps> = ({ selectedDates, selectedMonth, selectedYear }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Generate mock data based on selection type (for demonstration purposes)
    const fetchSalesData = () => {
      let labels: string[] = [];
      let data: number[] = [];

      if (selectedDates.length > 0) {
        // If multiple dates are selected
        labels = selectedDates;
        data = selectedDates.map(() => Math.floor(Math.random() * 100)); // Random sales data
      } else if (selectedMonth) {
        // If a month is selected
        const monthName = new Date(2023, parseInt(selectedMonth) - 1).toLocaleString("default", { month: "long" });
        labels = [monthName];
        data = [Math.floor(Math.random() * 1000)]; // Random sales for the selected month
      } else if (selectedYear) {
        // If a year is selected
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        labels = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          data = [20,30,40]
        // data = months.map(() => Math.floor(Math.random() * 1000)); // Random sales for each month in the year
      }

      setChartData({
        labels,
        datasets: [
          {
            label: "Sales",
            data,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    };

    fetchSalesData();
  }, [selectedDates, selectedMonth, selectedYear]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Sales Chart</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ReportSalesChart;
