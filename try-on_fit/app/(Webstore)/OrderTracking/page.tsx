'use client'; // Add this line at the top of the file

import React, { useState, useEffect } from 'react';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  CalendarDateRangeIcon,
  MapPinIcon,
  TruckIcon,
  CheckIcon,
  ChevronDoubleRightIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'

// Define types for order details
interface OrderDetails {
  order_id: number;
  delivery_date: string;
  delivery_address: string;
  order_status: string; // The current status of the order
}


const solutions = [
  { name: 'Estimate Date', description: '2024-Dec (19-20)', href: '#', icon: CalendarDateRangeIcon },
  { name: 'Address', description: 'No.20/perakum matawatha/Colombo', href: '#', icon: MapPinIcon },
  { name: 'Delivery Service', description: "CA-Service(+9411 2233445)", href: '#', icon: TruckIcon },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const App = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  // Fetch order details once on component mount
  useEffect(() => {
    fetch('http://localhost:8080/order/getOrderDetailsByOrderId/17') // Update the order ID if necessary
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess) {
          setOrderDetails(data.data[0]);
        }
      })
      .catch(error => console.error('Error fetching order details:', error));
  }, []);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  // Format the delivery date as "YYYY-MMM (DD)"
  const formatDeliveryDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', ''); // "2025-Jan 1"
  };

  // Define the solutions dynamically based on fetched data
  const dynamicSolutions = [
    { name: 'Estimate Date', description: formatDeliveryDate(orderDetails.delivery_date), href: '#', icon: CalendarDateRangeIcon },
    { name: 'Address', description: orderDetails.delivery_address, href: '#', icon: MapPinIcon },
    { 
      name: 'Delivery Service', 
      description: (
        <>
          CA-Service <span >(+94112233445 )</span>
        </>
      ), 
      href: '#', 
      icon: TruckIcon 
    }
      ];

  // Define the status order for comparison
  const statusOrder = ["Delivered", "Shipped", "Completed", "Processing", "Confirmed"];

  const getStatusClass = (status: string): string => {
    const currentStatusIndex = statusOrder.indexOf(orderDetails.order_status);
    const statusIndex = statusOrder.indexOf(status);
    // Return the appropriate class for the status
    if (statusIndex > currentStatusIndex) {
      return "bg-amber-950 border-amber-950 border-200"; // Past status
    } else if (statusIndex === currentStatusIndex) {
      return "bg-white border-double border-4  border-amber-950";  // Current status
    } else {
      return "bg-white border-2 border-gray-300"; // Future status
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/4">
          <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
          <p className="text-lg mb-6">Order ID: <span className="font-bold">#000{orderDetails.order_id}</span></p>
          <div className="relative">
            <div className="absolute h-full border-l-2 border-amber-950 left-4 top-0 z-0"></div> {/* Line with z-index 0 */}
            <div className="space-y-6">
            {statusOrder.map((status, index) => (
  <div className="flex items-start" key={index}>
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusClass(
        status
      )} z-10`}
      style={{ backgroundColor: getStatusClass(status).includes("bg-amber-950") ? "#421F06" : "#FFF" }}
    >
      <CheckIcon
        className={`w-4 h-4 ${
          getStatusClass(status).includes("bg-amber-950") ? "text-white" : "text-gray-50" /* Default text color */}
        `}
      />
    </div>
    <div className="ml-4">
      <h2 className={`font-bold ${status === orderDetails.order_status ? "text-amber-950" : "text-gray-900"}`}>
        {status}
      </h2>
      <p className="text-gray-800">
        {status === "Delivered" && "Your order has been Delivered."}
        {status === "Shipped" && "Your order is on its way to you."}
        {status === "Completed" && "Your order is packed and ready to ship."}
        {status === "Processing" && "Your order is being reviewed and prepared."}
        {status === "Confirmed" && "Your order has been placed successfully."}
      </p>
    </div>
  </div>
))}

            </div>
          </div>
        </div>

        {/* //// */}
        <div className="md:w-1/4 mt-6 md:mt-10 md:ml-12">
          <div className="space-y-6">
            {dynamicSolutions.map((item) => (
              <div key={item.name} className="group mt-6 relative flex gap-x-6 rounded-lg px-4 pt-4 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
            <a href="https://www.example.com" className="flex items-center text-amber-950 hover:text-blue-700">
              <span className="ml-20 mt-10">Order Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mt-10 ml-4">
                <path fillRule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/4 ">
          <a href="https://www.example.com" className="flex items-center text-gray-400 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;
