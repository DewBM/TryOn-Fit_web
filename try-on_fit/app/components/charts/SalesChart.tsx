"use client";
import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Sales",
        data: [
          5000, 7000, 8000, 6000, 7500, 8500, 9500, 10500, 11000, 10000, 12000,
          13000,
        ],
        borderColor: "rgba(77, 45, 24, 1)",
        backgroundColor: "rgba(77, 45, 24, 0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Trends Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales ($)",
        },
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
