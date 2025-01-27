"use client"
import { useState, useEffect } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import { FiBox, FiLayers, FiAlertCircle, FiTruck } from "react-icons/fi";
import InventoryLineChart from "@/app/components/charts/InventoryLineChart";

const lowStockItems = [
  {
    id: 1,
    name: "Crop top",
    quantity: 10,
    image: "/images/1.webp",
  },
  {
    id: 2,
    name: "Blouse",
    quantity: 5,
    image: "/images/2.webp",
  },
  {
    id: 3,
    name: "Blouse",
    quantity: 8,
    image: "/images/3.webp",
  },
  {
    id: 4,
    name: "Blouse",
    quantity: 11,
    image: "/images/4.webp",
  },
];

export default function Home() {
  const [totalProducts,  setTotalProducts] = useState(null);
  const [totalCatergories,  setTotalCatergories] = useState(null);
  const [lowStockCount,  setLowStockCount] = useState(null);
  const [totalSuppliers,  setTotalSuppliers] = useState(null);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/fetchTotalProducts");
        const result = await response.json();
  
        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          // Convert data to a number (if necessary)
          setTotalProducts(Number(result.data));
        } else {
          setTotalProducts("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total orders today:", error);
        setTotalProducts("Error fetching data");
      }
    };

    const fetchTotalCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/fetchTotalCategories");
        const result = await response.json();
  
        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          // Convert data to a number (if necessary)
          setTotalCatergories(Number(result.data));
        } else {
          setTotalCatergories("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total orders today:", error);
        setTotalCatergories("Error fetching data");
      }
    };

    const getLowStockVariantCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/getLowStockVariantCount");
        const result = await response.json();
  
        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          // Convert data to a number (if necessary)
          setLowStockCount(Number(result.data));
        } else {
          setLowStockCount("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total orders today:", error);
        setLowStockCount("Error fetching data");
      }
    };

    const fetchTotalSuppliers = async () => {
      try {
        const response = await fetch("http://localhost:8080/supplier/fetchTotalSuppliers");
        const result = await response.json();
  
        // Check if the API response is successful and has the correct data
        if (result.success && result.data) {
          // Convert data to a number (if necessary)
          setTotalSuppliers(Number(result.data));
        } else {
          setTotalSuppliers("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total orders today:", error);
        setTotalSuppliers("Error fetching data");
      }
    };

    fetchTotalProducts();
    fetchTotalCategories();
    getLowStockVariantCount();
    fetchTotalSuppliers();
  },[]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="Total Products" total={totalProducts !== null ? totalProducts : "Loading..."}>
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiBox size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Categories" total={totalCatergories !== null ? totalCatergories : "Loading..."}>
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiLayers size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Out of Stock" total={lowStockCount !== null ? lowStockCount : "Loading..."}>
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiAlertCircle size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
        <CardDataStats title="Total Suppliers" total={totalSuppliers !== null ? totalSuppliers : "Loading..."}>
          <div
            className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
            style={{
              padding: "10px",
              backgroundColor: "var(--main-background)",
              boxShadow: "var(--main-drop-shadow)",
            }}
          >
            <FiTruck size={25} style={{ stroke: "var(--main-dark)" }} />
          </div>
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5 pt-4">
        <div className="col-span-1 md:col-span-2">
          <InventoryLineChart />
        </div>
        <div className="col-span-1 border border-gray-300 rounded-lg p-2">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg p-2">
              Low Quantity Stock
            </span>
            <a className="text-blue-500 text-sm" href="#">
              See All
            </a>
          </div>
          <div className="stock-list">
            {lowStockItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-300 py-2"
              >
                <img
                  src={item.image}
                  className="w-10 h-10 object-cover rounded p-1 border border-gray-300"
                  alt={item.name}
                />
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm">
                    Remaining Quantity: {item.quantity} items
                  </p>
                </div>
                <span className="text-red-500 text-sm font-semibold">Low</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
