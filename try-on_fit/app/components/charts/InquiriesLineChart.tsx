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

const InquiriesLineChart = () => {
  const data = {
    labels: [
      "2024-12-31",
      "2025-01-01",
      "2025-01-02",
      "2025-01-03",
      "2025-01-04",
      "2025-01-05",
      "2025-01-06",
      "2025-01-07",
      "2025-01-08",
      "2025-01-09",
      "2025-01-10",
      "2025-01-11",
      "2025-01-12",
      "2025-01-13",
      "2025-01-14",
      "2025-01-15",
      "2025-01-16",
      "2025-01-17",
      "2025-01-18",
      "2025-01-19",
      "2025-01-20",
      "2025-01-21",
      "2025-01-22",
      "2025-01-23",
      "2025-01-24",
      "2025-01-25",
      "2025-01-26",
      "2025-01-27",
      "2025-01-28",
      "2025-01-29",
    ],
    datasets: [
      {
        label: "Inquiries",
        data: [
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 6
        ],
        borderColor: "rgb(77, 45, 24)",
        backgroundColor: "rgba(77, 45, 24, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Inquiries Over Time",
        size:"20",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Inquiries",
        },
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-lg pt-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default InquiriesLineChart;
