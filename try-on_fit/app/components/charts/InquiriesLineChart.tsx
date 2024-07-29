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
      "2024-06-21",
      "2024-06-22",
      "2024-06-23",
      "2024-06-24",
      "2024-06-25",
      "2024-06-26",
      "2024-06-27",
      "2024-06-28",
      "2024-06-29",
      "2024-06-30",
      "2024-07-01",
      "2024-07-02",
      "2024-07-03",
      "2024-07-04",
      "2024-07-05",
      "2024-07-06",
      "2024-07-07",
      "2024-07-08",
      "2024-07-09",
      "2024-07-10",
      "2024-07-11",
      "2024-07-12",
      "2024-07-13",
      "2024-07-14",
      "2024-07-15",
      "2024-07-16",
      "2024-07-17",
      "2024-07-18",
      "2024-07-19",
      "2024-07-20",
    ],
    datasets: [
      {
        label: "Inquiries",
        data: [
          10, 15, 8, 12, 20, 25, 18, 22, 30, 35, 28, 25, 30, 27, 22, 20, 15, 18,
          25, 28, 32, 35, 30, 27, 20, 22, 25, 28, 30, 32,
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
