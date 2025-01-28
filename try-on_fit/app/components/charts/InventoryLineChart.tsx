"use client";
import React, { useRef, useState, useEffect } from "react";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesLineChartProps {
  data: { month: string; sales: number }[];
  height?: number;
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data = [], height = 400 }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setDimensions({
          width: chartContainerRef.current.offsetWidth,
          height: chartContainerRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if data is available
  if (!data || data.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Chart data based on sales
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Number of Sales",
        data: data.map((d) => d.sales),
        borderColor: "#4B8B3B",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Sales Trend",
        font: {
          size: 16,
        },
        color: "black",
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
          text: "Number of Sales",
        },
      },
    },
  };

  return (
    <div
      className="border border-gray-300 rounded-lg pt-5"
      ref={chartContainerRef}
      style={{ width: "100%", height: "100%" }}
    >
      <Line
        data={chartData}
        options={options}
        width={dimensions.width}
        height={dimensions.height || height}
      />
    </div>
  );
};

export default SalesLineChart;
