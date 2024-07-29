"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ReturnRatesChartProps {
  data: { date: string; returns: number; reason: string }[];
}

const ReturnRatesChart: React.FC<ReturnRatesChartProps> = ({ data }) => {
  // Aggregate returns by issue type
  const aggregatedData: { [key: string]: number } = data.reduce(
    (acc, { reason, returns }) => {
      acc[reason] = (acc[reason] || 0) + returns;
      return acc;
    },
    {} as { [key: string]: number }
  );

  // Prepare data for the chart
  const labels = Object.keys(aggregatedData);
  const values = Object.values(aggregatedData);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Number of Returns",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
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
        text: "Total Returns This week",
        font: {
          size: 16,
          color: "black",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Return Issue Type",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ReturnRatesChart;
