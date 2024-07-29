"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["T-Shirt", "Frocks", "Blouse", "Trousers", "Shirts", "Skirts"],
    datasets: [
      {
        label: "Stock Proportion",
        data: [150, 50, 100, 80, 120, 30],
        backgroundColor: [
          "rgba(77, 45, 24, 1.0)",
          "rgba(77, 45, 24, 0.8)",
          "rgba(77, 45, 24, 0.6)",
          "rgba(77, 45, 24, 0.4)",
          "rgba(77, 45, 24, 0.3)",
          "rgba(77, 45, 24, 0.15)",
        ],
        borderColor: [
          "rgba(77, 45, 24, 1.0)",
          "rgba(77, 45, 24, 0.8)",
          "rgba(77, 45, 24, 0.6)",
          "rgba(77, 45, 24, 0.4)",
          "rgba(77, 45, 24, 0.3)",
          "rgba(77, 45, 24, 0.15)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="border border-gray-300 rounded-lg pt-6 pb-6 flex flex-col items-center">
      <div className="text-16 text-center font-bold">
        Stock Turnover by Product Category
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "300px", height: "300px" }}
      >
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
