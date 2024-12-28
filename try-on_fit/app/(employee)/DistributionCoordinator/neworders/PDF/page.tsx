"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export interface OrderItem {
  orderId: number;
  itemId: string;
  quantity: number;
  price: number;
  discount: number | null;
  variantId: string;
  variantName: string;
  variantColor: string;
  size: string;
}

export interface OrderSummary {
  sub_total: number | null;
}

export interface OrderDetails {
  name: string;
  address: string;
  contactNumber: string;
  items: OrderItem[];
  summary: OrderSummary;
}

function PDFPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrderDetails = async (orderId: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/order/fetchOrderDetails/${orderId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }

      const data = await response.json();
      if (data.isSuccess) {
        const orderData = data.data;
        const order = orderData.order;

        
        const items = orderData.items.map((item: any) => ({
          orderId: Number(item.order_id),
          itemId: item.item_id,
          quantity: Number(item.quantity),
          price: Number(item.variant.price),
          discount: item.disount ? Number(item.disount) : null,
          variantId: item.variant.variant_id,
          variantName: item.variant.name,
          variantColor: item.variant.color,
          size: item.variant.size, 
        }));

        
        setOrderDetails({
          name: order.customer_name,
          address: order.delivery_address,
          contactNumber: "", 
          items,
          summary: {
            sub_total: orderData.summary.sub_total ? Number(orderData.summary.sub_total) : 0,
          },
        });
      } else {
        throw new Error(data.msg || "Unknown error from the server.");
      }
    } catch (error: any) {
      setError("Unable to fetch order details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (orderId) {
      setIsLoading(true);
      setError(null);
      fetchOrderDetails(orderId);
    } else {
      setIsLoading(false);
      setError("Invalid order ID");
    }
  }, [orderId]);

  if (!orderId) {
    return <div>Error: Order ID not found in the URL.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!orderDetails) {
    return <div>Error: Unable to fetch order details.</div>;
  }

  const { name, address, contactNumber, items, summary } = orderDetails;

  return (
    <div className="pt-1 pb-24">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="bg-main-dark text-white py-2 px-4 rounded"
          onClick={() => window.print()}
        >
          <i className="fa fa-print mr-2"></i> Print
        </button>
      </div>
      <div className="border rounded-lg shadow-lg bg-white">
        <div className="p-8" id="invoice">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
            Order Details
          </h1>
          <div className="flex mb-8">
            <div className="text-left">
              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Order ID:</h2>
                <h2 className="font-semibold text-lg">{orderId}</h2>
              </div>
              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Name:</h2>
                <h2 className="font-semibold text-lg">{name}</h2>
              </div>
              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Address:</h2>
                <h2 className="font-semibold text-lg">{address}</h2>
              </div>
              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Contact Number:</h2>
                <h2 className="font-semibold text-lg">{contactNumber}</h2>
              </div>
            </div>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  DESCRIPTION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  SIZE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  UNIT PRICE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  QUANTITY
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  TOTAL PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.itemId}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.variantId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.variantName} ({item.variantColor})
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.size || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={6}
                  className="subtotal-cell text-right font-bold"
                >
                  SUB TOTAL
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {summary.sub_total || 0}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                  className="subtotal-cell text-right font-bold"
                >
                  DELIVERY
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {summary.sub_total ? 0 : 0}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                  className="subtotal-cell text-right font-bold"
                >
                  TOTAL
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {summary.sub_total || 0}
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
