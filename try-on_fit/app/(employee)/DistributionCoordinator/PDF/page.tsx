'use client';

import React, { useEffect, useState } from 'react';
import  { useRouter } from 'next/navigation';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import Image from 'next/image';

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

function PDFPage({ orderId, status, deliveryaddress, telephonenumber }: Props) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Checkout[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  const handlecustomer=()=>{
    router.push('/faq')
  }
  useEffect(() => {
    // Sample checkout data
    const sampleCheckout = [
      {
        id: 101,
        images: ["https://via.placeholder.com/150"],
        title: "Stylish T-Shirt",
        color: "Blue",
        price: 1200.0,
        quantity: 2,
        size: "M",
        variantId: "101",
      },
      {
        id: 102,
        images: ["https://via.placeholder.com/150"],
        title: "Casual Jeans",
        color: "Black",
        price: 3500.0,
        quantity: 1,
        size: "L",
        variantId: "102",
      },
      {
        id: 103,
        images: ["https://via.placeholder.com/150"],
        title: "Sports T-Shirt",
        color: "Red",
        price: 5000.0,
        quantity: 1,
        size: "S",
        variantId: "103",
      },
    ];

    const sampleOrderSummary = {
      subtotal: 10900.0,
      delivery: 500.0,
      discount: 1000.0,
      total: 10400.0,
    };

    setCartItems(sampleCheckout);
    setOrderSummary(sampleOrderSummary);
  }, []);

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

              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Customer Name:</h2>
                <h2 className="font-semibold text-lg">{status}</h2>
              </div>

              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Delivery Address:</h2>
                <h2 className="font-semibold text-lg">{deliveryaddress}</h2>
              </div>

              <div className="flex flex-row">
                <h2 className="font-semibold text-lg">Contact Number:</h2>
                <h2 className="font-semibold text-lg">{telephonenumber}</h2>
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
                  VARIENT ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.size || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {item.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {item.variantId || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
            <tr>
  <td colSpan={7} className="text-right font-bold bg-gray-100 px-4 py-2">
    SUB TOTAL
  </td>
  <td className="border border-gray-300 px-4 py-2 text-right">
    Rs. {orderSummary.subtotal.toFixed(2)}
  </td>
</tr>
              <tr>
              <td colSpan={7} className="text-right font-bold bg-gray-100 px-4 py-2"> DELIVERY</td>
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
