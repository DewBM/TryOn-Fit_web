"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OrderDetailscard from "@/app/components/OrderDetailscard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";

const orders = [
  {
    id: 1,
    orderNumber: "12345",
    customerName: "John Doe",
    status: "Shipped",
    total: "$120.00",
    date: "2023-07-15",
    deliveryDate: null,
  },
  {
    id: 2,
    orderNumber: "12346",
    customerName: "Jane Smith",
    status: "Processing",
    total: "$80.00",
    date: "2023-07-12",
    deliveryDate: null,
  },
  {
    id: 3,
    orderNumber: "8",
    customerName: "Jane Smith",
    status: "Processing",
    total: "$80.00",
    date: "2023-07-12",
    deliveryDate: null,
  },
];

const statusOptions = [
  { uid: "Processing", name: "Processing" },
  { uid: "Shipped", name: "Shipped" },
  { uid: "Completed", name: "Completed" },
  { uid: "Confirmed", name: "Confirmed" },
  { uid: "Delivered", name: "Delivered" },
];
export default function OrderDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = Number(searchParams.get("id")); // Get the order ID from the URL
  const [order, setOrder] = useState(orders.find((o) => o.id === orderId));
  const [isSaving, setIsSaving] = useState(false); // Track saving state

  if (!order) {
    return <div>Order not found!</div>;
  }

  // Handle status change
  const handleStatusChange = (newStatus: string) => {
    const updatedOrder = { ...order, status: newStatus };
    setOrder(updatedOrder);
  };

  // Handle delivery date change
  const handleDeliveryDateChange = (date: string) => {
    const updatedOrder = { ...order, deliveryDate: date };
    setOrder(updatedOrder);
  };

  // Simulate saving the updated order (front-end only)

  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #e4e5e8",
        borderRadius: "10px",
      }}
    >
      <OrderDetailscard
        title={`Order #${order.orderNumber}`}
        details={[
          { label: "Customer Name", value: order.customerName },
          { label: "Status", value: order.status },
          { label: "Total", value: order.total },
          { label: "Date", value: order.date },
          {
            label: "Delivery Date",
            value: order.deliveryDate || "Not specified",
          },
        ]}
      />
      <div style={{ marginTop: "30px", marginLeft: "18px" }}>
        <div className="grid-cols-3 grid mt-3">
          <div className="font-bold">Update Order Status</div>

          <div style={{ marginBottom: "16px" }}>
            <button>
              <Dropdown>
                <DropdownTrigger
                  style={{ backgroundColor: "#e4e5e8", fontWeight: "bold" }}
                >
                  <Button>{order.status || "Set Status"}</Button>
                </DropdownTrigger>
                <DropdownMenu
                  selectionMode="single"
                  selectedKeys={new Set([order.status])}
                  onSelectionChange={(keys) => {
                    const selectedStatus = Array.from(keys).join("");
                    handleStatusChange(selectedStatus);
                  }}
                >
                  {statusOptions.map((status) => (
                    <DropdownItem
                      style={{ backgroundColor: "#f9f0ea", color: "#4d2d18" }}
                      key={status.uid}
                    >
                      {status.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="font-bold">Update Delivery Date</div>
          <div style={{ marginBottom: "16px" }}>
            <Input
              className="font-bold  main-darker"
              type="date"
              label="Set Delivery Date"
              value={order.deliveryDate || ""}
              onChange={(e) => handleDeliveryDateChange(e.target.value)}
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div>
          <Button style={{ backgroundColor: "#4d2d18", color: "#fff" }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
