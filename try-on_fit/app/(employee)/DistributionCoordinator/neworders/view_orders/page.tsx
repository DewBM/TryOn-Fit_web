"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OrderDetailscard from "@/app/components/OrderDetailscard";
import { ChevronDownIcon } from "@/app/components/ChevronDownIcon";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

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
  const [order, setOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const orderId = searchParams.get("order_id");

  // Fetch order details
  useEffect(() => {
    if (!orderId) return;

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/order/getOrdersById/${orderId}`);
        const data = await response.json();

        if (data.isSuccess && data.data && data.data.length > 0) {
          const orderDetails = data.data[0];

          setOrder({
            orderNumber: orderDetails.orderId,
            productName: orderDetails.variantName,
            productCategory: orderDetails.productCategory,
            price: orderDetails.price,
            discount: orderDetails.discount,
            design: orderDetails.design,
            quantity: orderDetails.quantity,
            variantColor_: orderDetails.variantColor,
            itemId: orderDetails.itemId,
            status: orderDetails.orderStatus,
          });
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch order details", error);
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Handle changing the order status
  const handleStatusChange = async (newStatus: string) => {
    if (!order) return;

    try {
      // Optimistically update the local state
      setOrder((prevOrder) => ({
        ...prevOrder,
        status: newStatus,
      }));

      const response = await fetch("http://localhost:8080/order/updateStatus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: order.orderNumber,
          status: newStatus,
        }),
      });

      const result = await response.json();
      
      if (!result.isSuccess) {
        console.error(result.msg);
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleSubmit = () => {
    router.push('/DistributionCoordinator/neworders');  // Redirect to orders page
  };

  if (isLoading) return <div>Loading...</div>;
  if (!order) return <div>No order found</div>;

  
 
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
          { label: "Product Name", value: order.productName },
          { label: "Product Category", value: order.productCategory },
          { label: "Price", value: order.price },
          { label: "Discount", value: order.discount },
          { label: "Design", value: order.design },
          { label: "Quantity", value: order.quantity },
          { label: "Variant Color", value: order.variantColor_ },
          { label: "Item ID", value: order.itemId },
          { label: "Status", value: order.status },
        ]}
      />
      <div style={{ marginTop: "30px", marginLeft: "18px" }}>
        <div className="grid-cols-3 grid mt-3">
          <div className="font-bold">Update Order Status</div>
  
          <Dropdown>
                        <DropdownTrigger>
                        <Button
  variant="light"
  size="md"
  style={{ backgroundColor: "#808080", color: "#fff", width: "10px" }}
>
  {order.status} <ChevronDownIcon />
</Button>

                        </DropdownTrigger>
                        <DropdownMenu
              selectionMode="single"
              onSelectionChange={(selectedKeys) => {
                const newStatus = Array.from(selectedKeys).join("");
                handleStatusChange(newStatus);
              }}
            >
              {statusOptions
                .filter((status) => status.name !== order.status)
                .map((status) => (
                  <DropdownItem key={status.uid}>{status.name}</DropdownItem>
                ))}
            </DropdownMenu>
                      </Dropdown>
        </div>
  
        <div className="mt-10">

          <p >Are You Sure ?<Button
            onClick={handleSubmit}
            style={{ backgroundColor: "#4d2d18", color: "#fff",  marginLeft: "200px"}}
          >
            Submit
          </Button></p>
          
        </div>
      </div>
    </div>
  );

}


