"use client"; // Add this line at the top of your file

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
  selectType: string;
  selectedDates: string[];
  selectedMonth: string;
  selectedYear: string;
}

const ReportSalesChart: React.FC<SalesChartProps> = ({
  selectType,
  selectedDates,
  selectedMonth,
  selectedYear,
}) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Generate mock data based on selection type (for demonstration purposes)
    const fetchSalesData = () => {
      let labels: string[] = [];
      let dataset1: number[] = [];
      let dataset2: number[] = [];

      if (selectedDates.length > 0 && selectType === "date") {
        // If multiple dates are selected
        labels = selectedDates;
        dataset1 = selectedDates.map(() => Math.floor(Math.random() * 100)); // Random sales data for dataset 1
        dataset2 = selectedDates.map(() => Math.floor(Math.random() * 100)); // Random sales data for dataset 2
      } else if (selectType === "month") {
        // If a month is selected
        const year = parseInt(selectedYear); // Use the selected year
        const month = parseInt(selectedMonth) - 1; // Month is 0-indexed (0 = January)
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Generate the dates for the entire month
        labels = Array.from({ length: daysInMonth }, (_, i) => `${i + 1}-${selectedMonth}-${year}`);
        dataset1 = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 1000)); // Random data for dataset 1
        dataset2 = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 500)); // Random data for dataset 2
      } else if (selectType === "year") {
        // If a year is selected
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ];
        labels = months;
        dataset1 = months.map(() => Math.floor(Math.random() * 1000)); // Random sales for dataset 1
        dataset2 = months.map(() => Math.floor(Math.random() * 500)); // Random sales for dataset 2
      }

      // Update chart data with multiple datasets
      setChartData({
        labels,
        datasets: [
          {
            label: "Sales Dataset 1",
            data: dataset1,
            fill: false,
            borderColor: "rgb(75, 192, 192)", // Cyan color
            tension: 0.1,
          },
          {
            label: "Sales Dataset 2",
            data: dataset2,
            fill: false,
            borderColor: "rgb(255, 99, 132)", // Pink color
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
