import React from "react";
import { useRouter } from "next/navigation";

// Sample orders data
const orders = [
  {
    id: 1,
    orderNumber: "12345",
    customerName: "John Doe",
    status: "shipped",
    total: "$120.00",
    date: "2023-07-15",
  },
  {
    id: 2,
    orderNumber: "12346",
    customerName: "Jane Smith",
    status: "processing",
    total: "$80.00",
    date: "2023-07-12",
  },
  {
    id: 3,
    orderNumber: "8",
    customerName: "Jane Smith",
    status: "processing",
    total: "$80.00",
    date: "2023-07-12",
  },
];

export default function OrderDetails() {
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Order Details</h1>
      <div className="mt-4">
        <p><strong>Order Number:</strong> </p>
        <p><strong>Customer Name:</strong></p>
        <p><strong>Status:</strong> </p>
        <p><strong>Total:</strong> </p>
        <p><strong>Date:</strong> </p>
      </div>
    </div>
  );
}
