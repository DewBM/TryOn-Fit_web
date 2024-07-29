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

interface OrderVolumeChartProps {
  data: { date: string; orders: number }[];
  height?: number; 
}

const OrderVolumeChart: React.FC<OrderVolumeChartProps> = ({
  data,
  height = 400,
}) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Order Volume",
        data: data.map((d) => d.orders),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        fill: true,
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
        text: "Order Volume Over Time",
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
          text: "Date",
          font: {
            size: 13, 
            color: "black", 
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Orders",
          font: {
            size: 13, 
            color: "black", 
          },
        },
      },
    },
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-2"
      
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default OrderVolumeChart;
