'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleOrder } from '../Cartcheckout/action';

type OrderSummary = {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
};

type Checkout = {
  id:number;
  variantId: number;
  images: string[];
  title: string;
  color: string;
  price: number | string;
  quantity: number;
};

function InvoicePage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Checkout[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const placeOrder = async () => {
      try {
        const checkoutFromLocalStorage = localStorage.getItem('checkout');
        const detailsFromLocalStorage = localStorage.getItem('details');
  
        if (!checkoutFromLocalStorage || !detailsFromLocalStorage) {
          throw new Error('Missing checkout or details data in local storage');
        }
  
        const parsedCheckout: Checkout[] = JSON.parse(checkoutFromLocalStorage);
        const parsedDetailsArray = JSON.parse(detailsFromLocalStorage);
  
        // Ensure parsedDetailsArray is valid and contains data
        if (!Array.isArray(parsedDetailsArray) || parsedDetailsArray.length === 0) {
          throw new Error('Invalid details data format');
        }
  
        // Accessing the first object from the array
        const parsedDetails = parsedDetailsArray[0];
  
        console.log("Parsed Details:", parsedDetails);
  
        // Extracting customer ID properly
        const customerId = parsedDetails?.customer_id || parsedDetails?.customerId || 0;
  
        console.log("Customer ID:", customerId);
  
        // Build delivery address string from parsed details
// Access the address object correctly from parsedDetails
const address = parsedDetails?.address?.data; // Accessing the `data` property
console.log("Address Object:", address);
console.log("Address Line 1:", address?.address_line_1);
console.log("Address Line 2:", address?.address_line_2);
console.log("City:", address?.city);
console.log("District:", address?.district);
console.log("Postal Code:", address?.postal_code);

// Build delivery address string
const deliveryAddress = address
  ? `${address.address_line_1 || 'N/A'}, ${address.address_line_2 || 'N/A'}, 
     ${address.city || 'N/A'}, ${address.district || 'N/A'}, 
     ${address.postal_code || 'N/A'}`
  : 'Address not available';

// Log the final delivery address
console.log("Delivery Address:", deliveryAddress);
console.log("parsed",parsedCheckout);

        // Prepare order data
        const currentDate = new Date();
        const deliveryDate = new Date();
        deliveryDate.setDate(currentDate.getDate() + 4);
  
        const orderData = {
          customer_id: Number(customerId),  // Convert to number
          order_status: 'Processing',
          order_date: currentDate.toISOString(),
          delivery_date: deliveryDate.toISOString(),
          delivery_address: deliveryAddress.trim(),
          sub_total: parsedCheckout
            .reduce((sum, item) => sum + (parseFloat(item.price as string) || 0) * (item.quantity || 0), 0),
          discount: 400.00,  // Convert to number
          order_items: parsedCheckout.map((item) => ({
            item_id: item.variantId.toString(),
            price: parseFloat(item.price as string) || 0,  // Ensure it's a number for the API
            quantity: Number(item.quantity),  // Convert to number
           
            discount:400.00,  // Convert to number
          })),
        };
      
        
  
        // Call the API to place order
        const result = await handleOrder(orderData);
        console.log('Order placed successfully:', result);
      } catch (error) {
        console.error('Error placing order:', error);
      }
    };
  
    placeOrder();
  }, []);
  

  const handleCustomerSupport = () => {
    router.push('/faq');
  };

  useEffect(() => {
    const checkoutFromLocalStorage = localStorage.getItem('checkout');
    const parsedCheckout = checkoutFromLocalStorage ? JSON.parse(checkoutFromLocalStorage) : [];
    setCartItems(parsedCheckout);

    const orderSummaryFromLocalStorage = localStorage.getItem('orderSummary');
    const parsedOrderSummary = orderSummaryFromLocalStorage ? JSON.parse(orderSummaryFromLocalStorage) : {};
    setOrderSummary({
      subtotal: parsedOrderSummary?.subtotal || 0,
      delivery: parsedOrderSummary?.delivery || 0,
      discount: parsedOrderSummary?.discount || 0,
      total: parsedOrderSummary?.total || 0,
    });
  }, []);

  return (
    <div className="pt-16 pb-24">
      <div className="flex justify-end mb-4">
        <button type="button" className="bg-main-dark text-white py-2 px-4 rounded" onClick={() => window.print()}>
          <i className="fa fa-print mr-2"></i> Print
        </button>
      </div>
      <div className="border rounded-lg shadow-lg bg-white">
        <div className="p-8" id="invoice">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Invoice</h1>
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <h2 className="font-bold text-lg">TryOnFit</h2>
              <p>No.66/A, Kaduwela Road, Battaramulla</p>
              <p>Western, Sri Lanka</p>
              <p>+94 11 123 456</p>
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
                  <td className="border border-gray-300 px-4 py-2 text-right">Rs. {Number(item.price).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(Number(item.price) * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">SUBTOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">Rs. {orderSummary.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">DELIVERY</td>
                <td className="border border-gray-300 px-4 py-2 text-right">Rs. {orderSummary.delivery.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">GRAND TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">Rs. {orderSummary.total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-8 text-center">
            <p className="font-bold">Thank you!</p>
            <p className="text-sm text-gray-500">Further information? Contact our Help Center.</p>
            <button className="align-middle border bg-main-dark font-bold text-white px-8 py-4 rounded-lg" onClick={handleCustomerSupport}>
              Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
