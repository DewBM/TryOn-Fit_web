'use client'
import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Slider } from "@nextui-org/react";
import Statuscard from "@/app/components/statuscard";
import OrderNumber from "@/app/components/OrderNumber";
import { orderfetch } from "./action";

   function Page() {
  const [orders, setOrders] = useState<any[]>([]); // Store orders data as an array
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error messages

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderfetch();
        if (response.isSuccess) {                                         
          setOrders(response.data); // Set fetched orders
        } else {
          setError(response.msg || "Failed to fetch orders");
        }
      } catch (err) {
        setError("An error occurred while fetching orders");
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const getSliderValue = (status: string | null | undefined) => {
    if (!status) {
      console.error("Invalid order status:", status); // Log if status is missing
      return 0; // Default value
    }

    switch (status) {
      case "Confirmed":
        return 0;
      case "Processing":
        return 0.25;
      case "Shipped":
        return 0.50;
      case "Delivered":
        return 0.75;
      case "Completed":
        return 1;
      default:
        console.error("Invalid order status:", status); // Log invalid status
        return 0; // Default value
    }
  };
  
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Invalid Date'; // Handle undefined/null gracefully
  
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date'; // Check if the date is valid
  
    // Use toLocaleDateString with local formatting
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };
  


  return (
    <div>
      {/* <NavBar newArrivalsRef={null} shopNew={null} aboutUs={null} /> */}
      <div className="w-full flex flex-row py-[5rem] justify-between">
        <div className="flex flex-col w-full space-y-10 mx-20">
          {orders.map((order, index) => {
            // Ensure there's data inside the status.data array
            const orderStatus = order.status?.data?.[0]?.orderStatus || "Confirmed"; // Default to "Confirmed" if not available
            return (
              <div key={order.orderId} className="order-container  rounded-2xl border border-gray-300">
                {/* Order Number */}
                <OrderNumber
                  orderId={order.orderId}
                  orderDate={formatDate(order.order_date)}  // Pass formatted order date
                  estimateDate={formatDate(order.delivery_date)}  // Pass formatted delivery date
                />

                {/* Status Slider */}
                <div className="h-[150px] w-full pt-15 ml-24">
                  <Slider
                    showTooltip={false}
                    step={0.25}
                    color="foreground"
                    maxValue={1}
                    minValue={0}
                    showSteps={true}
                    marks={[
                      { value: 0, label: "Confirmed" },
                      { value: 0.25, label: "Processing" },
                      { value: 0.50, label: "Shipped" },
                      { value: 0.75, label: "Delivered" },
                      { value: 1, label: "Completed" },
                    ]}
                    value={getSliderValue(orderStatus)} // Use value instead of defaultValue
                    className="w-[80%] mx-20 my-16"
                  />
                </div>

                {/* Order Items */}
                <div className="space-y-3">
                  {order.status?.data?.map((item: any) => (
                    <Statuscard
                      key={item.itemId}
                      images={[item.img_front || "/default-image.png"]} // Add default image fallback
                      price={[item.variantPrice]}
                      quantity={[item.quantity]}
                      title={[item.variantName]}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
//  images: item.img_front ? [`https://gtuwqwohqrzqpgzencnd.supabase.co/storage/v1/object/public/product_images/${item.img_front}`] : [],