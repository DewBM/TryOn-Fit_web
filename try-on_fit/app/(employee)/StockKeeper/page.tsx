"use client"
import { useState, useEffect } from "react";

import Header from "@/app/components/Header/index";

import CardDataStats from "@/app/components/DashboardCard";
import { FiBox, FiLayers, FiAlertCircle, FiTruck } from "react-icons/fi";
import SalesLineChart from "@/app/components/charts/InventoryLineChart";

// const lowStockItems = [
//   {
//     id: 1,
//     name: "Crop top",
//     quantity: 10,
//     image: "/images/1.webp",
//   },
//   {
//     id: 2,
//     name: "Blouse",
//     quantity: 5,
//     image: "/images/2.webp",
//   },
//   {
//     id: 3,
//     name: "Blouse",
//     quantity: 8,
//     image: "/images/3.webp",
//   },
//   {
//     id: 4,
//     name: "Blouse",
//     quantity: 11,
//     image: "/images/4.webp",
//   },
// ];

interface LowStockProduct {
  variant_id: string;
  product_name: string;
  stock_quantity: number;
}


export default function Home() {
  const [totalProducts,  setTotalProducts] = useState(null);
  const [totalCatergories,  setTotalCatergories] = useState(null);
  const [lowStockCount,  setLowStockCount] = useState(null);
  const [totalSuppliers,  setTotalSuppliers] = useState(null);
  const [lowStockProducts, setLowStockProduct] = useState<LowStockProduct[]>([]);
  const [salesData, setSalesData] = useState<{ month: string; sales: number }[]>([]);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/fetchTotalProducts");
        const result = await response.json();
  
        if (result.success && result.data) {
          setTotalProducts(Number(result.data));
        } else {
          setTotalProducts("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total products:", error);
        setTotalProducts("Error fetching data");
      }
    };
  
    const fetchTotalCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/fetchTotalCategories");
        const result = await response.json();
  
        if (result.success && result.data) {
          setTotalCatergories(Number(result.data));
        } else {
          setTotalCatergories("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total categories:", error);
        setTotalCatergories("Error fetching data");
      }
    };
  
    const getLowStockVariantCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/getLowStockVariantCount");
        const result = await response.json();
  
        if (result.success && result.data) {
          setLowStockCount(Number(result.data));
        } else {
          setLowStockCount("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching low stock count:", error);
        setLowStockCount("Error fetching data");
      }
    };
  
    const fetchTotalSuppliers = async () => {
      try {
        const response = await fetch("http://localhost:8080/supplier/fetchTotalSuppliers");
        const result = await response.json();
  
        if (result.success && result.data) {
          setTotalSuppliers(Number(result.data));
        } else {
          setTotalSuppliers("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching total suppliers:", error);
        setTotalSuppliers("Error fetching data");
      }
    };
  
    const getAllLowStockProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/getAllLowStockProducts");
        const result = await response.json();
  
        if (result.success && Array.isArray(result.data)) { // Changed isSuccess to success
          setLowStockProduct(result.data as LowStockProduct[]); // Ensure TypeScript understands the type
        } else {
          setLowStockProduct([]); // Default to an empty array if data is invalid
        }
      } catch (error) {
        console.error("Error fetching low stock products:", error);
        setLowStockProduct([]); // Handle errors with an empty array
      }
    };

    const fetchSalesData = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getTotalSalesPerMonth"); // Replace with your actual endpoint
        const result = await response.json();
  
        if (result.success && result.data) {
          // Filter out null months and convert totalOrders to numbers
          const formattedData = result.data
            .filter((item: { month: string | null; totalOrders: string }) => item.month && item.totalOrders)
            .map((item: { month: string; totalOrders: string }) => ({
              month: item.month,
              sales: Number(item.totalOrders), // Convert totalOrders to number
            }));
  
          setSalesData(formattedData); // Pass data to the chart
        } else {
          console.error("No data found or error fetching sales data");
        }
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };
    
  
    // Call all functions here
    fetchTotalProducts();
    fetchTotalCategories();
    getLowStockVariantCount();
    fetchTotalSuppliers();
    getAllLowStockProducts();
    fetchSalesData();
  }, []);
  
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
        <SalesLineChart data={salesData} />
        </div>
        <div className="col-span-1 border border-gray-300 rounded-lg p-2 overflow-y-auto max-h-80">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg p-2">
              Low Quantity Stock
            </span>
            {/* <a className="text-blue-500 text-sm" href="#">
              See All
            </a> */}
          </div>
          <div className="stock-list">
  {Array.isArray(lowStockProducts) && lowStockProducts.length > 0 ? (
    lowStockProducts.map((item) => (
      <div
        key={item.variant_id}
        className="flex items-center border-b border-gray-300 py-2"
      >
        <div className="flex-1 ml-4">
          <h2 className="font-semibold">{item.product_name}</h2>
          <p className="text-sm">
            Remaining Quantity: {item.stock_quantity} items
          </p>
        </div>
        <span className="text-red-500 text-sm font-semibold">Low</span>
      </div>
    ))
  ) : (
    <p>No low-stock items found.</p>
  )}
</div>
        </div>
      </div>
    </>
  );
}

