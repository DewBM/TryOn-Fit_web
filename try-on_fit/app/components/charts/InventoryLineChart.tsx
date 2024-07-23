"use client";
import React, { useEffect, useState, useRef } from "react";
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

const InventoryLineChart = () => {
  const [menColor, setMenColor] = useState<string>("");
  const [womenColor, setWomenColor] = useState<string>("");
  const [childrenColor, setChildrenColor] = useState<string>("");
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    setMenColor(rootStyle.getPropertyValue("--main-red").trim());
    setWomenColor(rootStyle.getPropertyValue("--main-blue").trim());
    setChildrenColor(rootStyle.getPropertyValue("--main-green").trim());
  }, []);

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

  const data = {
    labels: [
      "2024-01",
      "2024-02",
      "2024-03",
      "2024-04",
      "2024-05",
      "2024-06",
      "2024-07",
    ],
    datasets: [
      {
        label: "Women",
        data: [150, 250, 380, 470, 660, 350, 500],
        borderColor: womenColor,
        backgroundColor: "white",
        fill: true,
      },
      {
        label: "Men",
        data: [280, 190, 400, 410, 505, 315, 380],
        borderColor: menColor,
        backgroundColor: "white",
        fill: true,
      },
      {
        label: "Children",
        data: [240, 320, 560, 690, 540, 745, 545],
        borderColor: childrenColor,
        backgroundColor: "white",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Inventory Trends Over Time",
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
          text: "Stock Level",
        },
      },
    },
  };

  return (
    <div
      className="border border-gray-300 rounded-lg pt-5"
      ref={chartContainerRef}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Line
          data={data}
          options={options}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </div>
  );
};

export default InventoryLineChart;
