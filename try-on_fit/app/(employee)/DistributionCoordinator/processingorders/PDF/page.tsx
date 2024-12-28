"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export interface OrderItem {
  orderId: number;
  itemId: number;
  quantity: number;
  price: number;
  discount: number;
  variantId: string; // Ensure this matches the variant_id in the backend
  variantName: string; // Matches the name in the variant object
  variantColor: string; // Matches the color in the variant object
  design: string; // Matches design in the variant object
}

export interface OrderSummary {
  sub_total: number;
  delivery: number;
  total: number;
}

function PDFPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId"); // Get orderId from query string

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrderDetails = async (orderId: string) => {
    try {
      const response = await fetch(`http://localhost:8080/order/fetchOrderDetails/${orderId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }

      const data = await response.json();
      console.log("Fetched Data: ", data); // Check the structure of data

      return data;
    } catch (error) {
      console.error("Error fetching order details:", error);
      return {
        isSuccess: false,
        msg: "An error occurred while fetching order details.",
        data: null,
        error: error.message || "Unknown error",
      };
    }
  };

  useEffect(() => {
    if (orderId && !isNaN(Number(orderId))) {
      setIsLoading(true);
      fetchOrderDetails(orderId)
        .then((response) => {
          if (response.isSuccess) {
            // Mapping the items to match the expected OrderItem structure
            const mappedItems = response.data.items.map((item: any) => ({
              orderId: item.order_id,
              itemId: item.item_id,
              quantity: item.quantity,
              price: parseFloat(item.price), // Ensure it's a number
              discount: item.discount ? parseFloat(item.discount) : 0, // Handle null or undefined discount
              variantId: item.variant.variant_id,
              variantName: item.variant.name,
              variantColor: item.variant.color,
              design: item.variant.design,
            }));
            setOrderItems(mappedItems);
            setOrderSummary(response.data.summary);
          } else {
            console.error(response.error);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      console.error("Invalid order ID");
    }
  }, [orderId]);

  if (!orderId) {
    return <div>Error: Order ID not found in the URL.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-5 pb-24">
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
                <h2 className="font-semibold text-lg">Order Id:</h2>
                <h2 className="font-semibold text-lg">{orderId}</h2>
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
              {orderItems.map((item, index) => (
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
                    {item.design || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {orderSummary && (
                <>
                  <tr>
                    <td
                      colSpan={6}
                      className="subtotal-cell text-right font-bold"
                    >
                      SUB TOTAL
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      Rs. {orderSummary.sub_total}
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
                      Rs. {orderSummary.delivery || 0}
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
                      Rs.{" "}
                      {isNaN(orderSummary.sub_total)
                        ? "N/A"
                        : orderSummary.sub_total}
                    </td>
                  </tr>
                </>
              )}
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
