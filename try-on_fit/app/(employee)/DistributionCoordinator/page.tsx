"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header/index";
import CardDataStats from "@/app/components/DashboardCard";
import OrderVolumeChart from "@/app/components/charts/OrderVolumeChart";
import ReturnRatesChart from "@/app/components/charts/ReturnRatesChart";
import { FiPackage, FiPlusCircle, FiClock, FiCheckCircle } from "react-icons/fi";

export default function Home() {
  const [totalOrdersToday, setTotalOrdersToday] = useState(null);
  const [totalConfirmedOrders, setTotalConfirmedOrders] = useState(null);
  const [totalProcessingOrders, setTotalProcessingOrders] = useState(null);
  const [totalShippedOrders, setTotalShippedOrders] = useState(null);
  const [chartData, setChartData] = useState<{ date: string; orders: number }[]>(
    []
  );
  const [loadingChartData, setLoadingChartData] = useState(true);
  const [chartError, setChartError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalOrdersToday = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalOrdersToday");
        const result = await response.json();

        if (result.success && result.data) {
          setTotalOrdersToday(Number(result.data));
        } else {
          setTotalOrdersToday("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total orders today:", error);
        setTotalOrdersToday("Error fetching data");
      }
    };

    const fetchTotalConfirmedOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalConfirmedOrders");
        const result = await response.json();

        if (result.success && result.data) {
          setTotalConfirmedOrders(Number(result.data));
        } else {
          setTotalConfirmedOrders("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total confirmed orders:", error);
        setTotalConfirmedOrders("Error fetching data");
      }
    };

    const fetchTotalProcessingOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalProcessingOrders");
        const result = await response.json();

        if (result.success && result.data) {
          setTotalProcessingOrders(Number(result.data));
        } else {
          setTotalProcessingOrders("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total processing orders:", error);
        setTotalProcessingOrders("Error fetching data");
      }
    };

    const fetchTotalShippedOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalShippedOrders");
        const result = await response.json();

        if (result.success && result.data) {
          setTotalShippedOrders(Number(result.data));
        } else {
          setTotalShippedOrders("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total shipped orders:", error);
        setTotalShippedOrders("Error fetching data");
      }
    };

    const fetchChartData = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getWeeklyOrderVolume");
        if (!response.ok) {
          throw new Error(`Failed to fetch chart data: ${response.statusText}`);
        }
        const result = await response.json();
        if (result.success && result.data) {
          setChartData(
            result.data.map((item: { date: string; totalOrders: number }) => ({
              date: item.date,
              orders: item.totalOrders,
            }))
          );
        } else {
          setChartError("Failed to fetch chart data.");
        }
      } catch (error) {
        setChartError(
          error instanceof Error ? error.message : "Unknown error occurred."
        );
      } finally {
        setLoadingChartData(false);
      }
    };

    fetchTotalOrdersToday();
    fetchTotalConfirmedOrders();
    fetchTotalProcessingOrders();
    fetchTotalShippedOrders();
    fetchChartData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-4 2xl:gap-8">
        <CardDataStats
          title="Total Orders Today"
          total={totalOrdersToday !== null ? totalOrdersToday : "Loading..."}
        >
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiPackage size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats
          title="New Orders"
          total={totalConfirmedOrders !== null ? totalConfirmedOrders : "Loading..."}
        >
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiPlusCircle size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats
          title="Processing Orders"
          total={
            totalProcessingOrders !== null ? totalProcessingOrders : "Loading..."
          }
        >
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiClock size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats
          title="Shipped"
          total={totalShippedOrders !== null ? totalShippedOrders : "Loading..."}
        >
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiCheckCircle size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="col-span-1">
            {loadingChartData ? (
              <p>Loading chart data...</p>
            ) : chartError ? (
              <p>Error loading chart data: {chartError}</p>
            ) : (
              <OrderVolumeChart data={chartData} />
            )}
          </div>
          {/* <div className="col-span-1">
           
          </div> */}
        </div>
      </div>
    </>
  );
}
