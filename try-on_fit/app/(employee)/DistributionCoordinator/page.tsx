"use client"
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

  // Fetch Total Orders Today
  useEffect(() => {
    const fetchTotalOrdersToday = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalOrdersToday");
        const result = await response.json();
  
        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          // Convert data to a number (if necessary)
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

        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          setTotalConfirmedOrders(Number(result.data)); // Assuming result.data is a number
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

        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          setTotalProcessingOrders(Number(result.data)); // Assuming result.data is a number
        } else {
          setTotalProcessingOrders("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total confirmed orders:", error);
        setTotalProcessingOrders("Error fetching data");
      }
    };

    const fetchTotalShiipedOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalShippedOrders");
        const result = await response.json();

        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          setTotalShippedOrders(Number(result.data)); // Assuming result.data is a number
        } else {
          setTotalShippedOrders("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total confirmed orders:", error);
        setTotalShippedOrders("Error fetching data");
      }
    };
  
    fetchTotalOrdersToday();
    fetchTotalConfirmedOrders();
    fetchTotalProcessingOrders();
    fetchTotalShiipedOrders();
  }, []);
  

  // Data for the Order Volume chart
  const chartData = [
    { date: "2024-07-01", orders: 50 },
    { date: "2024-07-02", orders: 40 },
    { date: "2024-07-03", orders: 70 },
    { date: "2024-07-04", orders: 60 },
    { date: "2024-07-05", orders: 90 },
    { date: "2024-07-06", orders: 80 },
    { date: "2024-07-07", orders: 75 },
  ];

  // Data for the Return Rates chart
  const returnData = [
    { date: "2024-07-01", returns: 5, reason: "Size Issue" },
    { date: "2024-07-02", returns: 3, reason: "Quality Issue" },
    { date: "2024-07-03", returns: 7, reason: "Color Mismatch" },
    { date: "2024-07-04", returns: 6, reason: "Late Delivery" },
    { date: "2024-07-05", returns: 9, reason: "Other" },
    { date: "2024-07-06", returns: 8, reason: "Size Issue" },
    { date: "2024-07-07", returns: 7, reason: "Quality Issue" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-4 2xl:gap-8">
        <CardDataStats title="Total Orders Today" total={totalOrdersToday !== null ? totalOrdersToday : "Loading..."}>
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
        <CardDataStats title="New Orders" total={totalConfirmedOrders !== null ? totalConfirmedOrders : "Loading..."}>
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
        <CardDataStats title="Processing Orders" total={totalProcessingOrders !== null ? totalProcessingOrders : "Loading..."}>
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
        <CardDataStats title="Shipped" total={totalShippedOrders !== null ? totalShippedOrders : "Loading..."}>
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
            <OrderVolumeChart data={chartData} />
          </div>
          <div className="col-span-1">
            <ReturnRatesChart data={returnData} />
          </div>
        </div>
      </div>
    </>
  );
}
