"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Correct import for router
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Image from "next/image";

interface Props {
  orderId: string;
  telephonenumber: string;
  status: string;
  deliveryaddress: string;
}

type OrderSummary = {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
};

type Checkout = {
  id: number;
  images: string[];
  title: string;
  color: string;
  price: number;
  quantity: number;
  size: string;
  variantId: string;
};

function PDFPage() {
  const [isClient, setIsClient] = useState(false); // To detect client-side rendering
  const [orderId, setOrderId] = useState<string | null>(null); // State to store orderId
  const [cartItems, setCartItems] = useState<Checkout[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });
  const [orderDetails, setOrderDetails] = useState<any>(null); // Store the order details

  const router = useRouter(); // Call useRouter() directly in the component body

  // Detect client-side rendering (window object available)
  useEffect(() => {
    setIsClient(true); // When component mounts, set isClient to true
  }, []);

  useEffect(() => {
    if (router.query.orderId) {
      setOrderId(router.query.orderId as string); // Capture the orderId from query
    }
  }, [router]); // Runs when router changes

  useEffect(() => {
    if (orderId) {
      // Fetch the order details based on the orderId
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/order/getOrderDetails/${orderId}`);
          const data = await response.json();

          if (data.isSuccess) {
            setOrderDetails(data.data); // Assuming this is the order's details
            // Sample checkout data (this can be replaced with the actual data from the API)
            setCartItems(data.data.cartItems); // Update with actual cart items
            setOrderSummary(data.data.orderSummary); // Update with actual order summary
          } else {
            console.error(data.msg);
          }
        } catch (error) {
          console.error("Error fetching order details: ", error);
        }
      };

      fetchOrderDetails();
    }
  }, [orderId]);

  if (!isClient) {
    return <div>Loading...</div>; // Render a loading state until the component is fully mounted on the client side
  }

  return (
    <div className="pt-0 pb-0">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="bg-main-dark text-white py-1 px-4 rounded"
          onClick={() => window.print()}
        >
          <i className="fa fa-print "></i> Print
        </button>
      </div>
      <div className="border rounded-lg shadow-lg bg-white">
        <div className="p-8" id="invoice">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
            Order Details{" "}
          </h1>
          <div className="flex mb-8 ">
            <div className="text-left">
              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Order Id:</h2>
                <h2 className="font-semibold text-lg">{orderId}</h2>
              </div>

              {orderDetails && (
                <>
                  <div className="flex flex-row">
                    <h2 className="font-semibold text-lg">Customer Name:</h2>
                    <h2 className="font-semibold text-lg">{orderDetails.customerName}</h2>
                  </div>

                  <div className="flex flex-row">
                    <h2 className="font-semibold text-lg">Delivery Address:</h2>
                    <h2 className="font-semibold text-lg">{orderDetails.deliveryAddress}</h2>
                  </div>

                  <div className="flex flex-row">
                    <h2 className="font-semibold text-lg">Contact Number:</h2>
                    <h2 className="font-semibold text-lg">{orderDetails.telephoneNumber}</h2>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Render cart items and order summary */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Product ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">DESCRIPTION</th>
                <th className="border border-gray-300 px-4 py-2 text-right">SIZE</th>
                <th className="border border-gray-300 px-4 py-2 text-right">UNIT PRICE</th>
                <th className="border border-gray-300 px-4 py-2 text-right">QUANTITY</th>
                <th className="border border-gray-300 px-4 py-2 text-right">VARIENT ID</th>
                <th className="border border-gray-300 px-4 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{item.size || "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">Rs. {item.price.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{item.variantId || "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7} className="text-right font-bold bg-gray-100 px-4 py-2">SUB TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.subtotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="text-right font-bold bg-gray-100 px-4 py-2">DELIVERY</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.delivery.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="text-right font-bold bg-gray-100 px-4 py-2">GRAND TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-8 text-center">
            <p className="font-bold">Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFPage;

