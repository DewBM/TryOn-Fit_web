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
      "2024-11-05",
      "2024-11-06",
      "2024-11-07",
      "2024-11-08",
      "2024-11-09",
      "2024-11-10",
      "2024-11-11",
      "2024-11-12",
      "2024-11-13",
      "2024-11-14",
      "2024-11-15",
      "2024-11-16",
      "2024-11-17",
      "2024-11-18",
      "2024-11-19",
      "2024-11-20",
      "2024-11-21",
      "2024-11-22",
      "2024-11-23",
      "2024-11-24",
      "2024-11-25",
      "2024-11-26",
      "2024-11-27",
      "2024-11-28",
      "2024-11-29",
      "2024-11-30",
      "2024-12-01",
      "2024-12-02",
      "2024-12-03",
      "2024-12-04",
    ],
    datasets: [
      {
        label: "Inquiries",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9
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
