'use client';

import React, { useEffect, useState } from 'react';
import logo from "../../../public/images/logo.png"

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
};

function InvoicePage() {
  const [cartItems, setCartItems] = useState<Checkout[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    // Retrieve checkout items from localStorage
    const checkoutFromLocalStorage = localStorage.getItem('checkout');
    const parsedCheckout = JSON.parse(checkoutFromLocalStorage || '[]');
    setCartItems(parsedCheckout);

    // Retrieve order summary from localStorage
    const orderSummaryFromLocalStorage = localStorage.getItem('orderSummary');
    const parsedOrderSummary = JSON.parse(orderSummaryFromLocalStorage || '{}');
    setOrderSummary({
      subtotal: parsedOrderSummary.subtotal || 0,
      delivery: parsedOrderSummary.delivery || 0,
      discount: parsedOrderSummary.discount || 0,
      total: parsedOrderSummary.total || 0,
    });
  }, []);

  return (
    <div className="pt-16 pb-24">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="bg-black text-white py-2 px-4 rounded"
          onClick={() => window.print()}
        >
          <i className="fa fa-print mr-2"></i> Print
        </button>
      </div>
      <div className="border rounded-lg shadow-lg bg-white">
        <div className="p-8" id="invoice">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Invoice</h1>
          <div className="flex justify-between mb-8">
            <img src="../../../public/images/logo.png" alt="Logo" className="h-12" />
            
            <div className="text-right">
              <h2 className="font-bold text-lg">TryOnFit</h2>
              <p>No.66/A, Kaduwela Road, Battaramulla</p>
              <p>Western, Sri Lanka</p>
              <p>+94 77 123 456</p>
              <p>TryOnFit.customercare@gmail.com</p>
            </div>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">DESCRIPTION</th>
                <th className="border border-gray-300 px-4 py-2 text-right">UNIT PRICE</th>
                <th className="border border-gray-300 px-4 py-2 text-right">QUANTITY</th>
                <th className="border border-gray-300 px-4 py-2 text-right">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {item.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">SUBTOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.subtotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">DELIVERY</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.delivery.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">GRAND TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {orderSummary.total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-8 text-center">
            <p className="font-bold">Thank you!</p>
            <p className="text-sm text-gray-500">
              For any inquiries, contact us via{' '}
              <a href="mailto:TryOnFit.customercare@gmail.com" className="text-blue-500 underline">
                TryOnFit.customercare@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
