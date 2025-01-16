'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Ordersummarycheckout from '@/app/components/ordersummarycheckout';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcardcheckout from '@/app/components/Cartcardcheckout';
import Address from '@/app/components/Address';
import AddAddressModal from "@/app/components/AddAddressModal";
import EditAddressModal from "@/app/components/EditAddressModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import{handlePayment} from "../Cartcheckout/action"
import { handleOrder } from '../Cartcheckout/action';

function Page() {
  const [cartItems, setCartItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });
  // name: "Sapna Nethmini",
    // contactNumber: "+94 761516307",
    // number: "No.174/1",
    // village: "Middeniya",
    // town: "Hambantota",
    // country: "Sri Lanka",
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  

  // Fetch data from localStorage
  // useEffect(() => {
  //   const checkoutFromLocalStorage = localStorage.getItem('checkout');
  //   const parsedCheckout = JSON.parse(checkoutFromLocalStorage || '[]');
  //   setCartItems(parsedCheckout);
  //         console.log("parse",parsedCheckout);
  //   const orderSummaryFromLocalStorage = localStorage.getItem('orderSummary');
  //   const parsedOrderSummary = JSON.parse(orderSummaryFromLocalStorage || '{}');
  //   setOrderSummary({
  //     subtotal: parsedOrderSummary.subtotal || 0,
  //     delivery: parsedOrderSummary.delivery || 0,
  //     discount: parsedOrderSummary.discount || 0,
  //     total: parsedOrderSummary.total || 0,
  //   });
  // }, []);

  const [currentAddress, setCurrentAddress] = useState({
    address_line_1: " ",
    address_line_2: " ",
    city: " ",
    district: " ",
    postal_code: " ",
  });
  
  useEffect(() => {
    // Retrieve checkout data from local storage
    const checkoutFromLocalStorage = localStorage.getItem('checkout');
    const parsedCheckout = JSON.parse(checkoutFromLocalStorage || '[]');
    setCartItems(parsedCheckout);
    console.log('Parsed checkout:', parsedCheckout);
  
    // Retrieve order summary from local storage
    const orderSummaryFromLocalStorage = localStorage.getItem('orderSummary');
    const parsedOrderSummary = JSON.parse(orderSummaryFromLocalStorage || '{}');
    setOrderSummary({
      subtotal: parsedOrderSummary.subtotal || 0,
      delivery: parsedOrderSummary.delivery || 0,
      discount: parsedOrderSummary.discount || 0,
      total: parsedOrderSummary.total || 0,
    });
  
    
  }, []);
  useEffect(() => {
    // Retrieve details from local storage
    const detailsFromLocalStorage = localStorage.getItem('details');
    const parsedDetails = JSON.parse(detailsFromLocalStorage || '{}'); // Use {} as a fallback instead of an array

    console.log('Parsed details:', parsedDetails);

    // Check if the parsedDetails contains the address data properly
    if (parsedDetails && parsedDetails.address) {
        setCurrentAddress({
            address_line_1: parsedDetails.address.address_line_1 || "",
            address_line_2: parsedDetails.address.address_line_2 || "",
            city: parsedDetails.address.city || "",
            district: parsedDetails.address.district || "",
            postal_code: parsedDetails.address.postal_code || "",
        });
    } else {
        console.log("No valid address data found in localStorage.");
    }
}, []);

  
  
   
  
  // Handle delete item from cart
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    // Dynamically load PayHere script
    const script = document.createElement("script");
    script.src = "https://www.payhere.lk/lib/payhere.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
     
      // payhere.onCompleted = function (orderId) {
      //   // alert("Payment completed. OrderID: " + orderId);
      //   try {
      //     const orderData = {
      //       customer_id: 1, // Replace with the actual customer ID
      //       order_items: cartItems.map((item) => ({
      //         product_id: item.id,
      //         quantity: item.quantity,
      //       })),
      //     };

      //     const result = handleOrder(orderData);
      //     console.log('Order created successfully:', result);

      //   window.location.href = `/Invoice?orderId=${orderId}`
      //   window.location.href = `/Invoice?orderId=${result.order_id}`;
      // } catch (error) {
      //   console.error('Error processing order:', error);
      //   alert('Failed to create order. Please contact support.');
      // }
    
      // };
      
      
      
      payhere.onCompleted = function (orderId) {
        try {
          // Prepare the data you want to send to your backend (order details)
          // const orderData = {
          //   customer_id: 1,  // This should be the actual customer ID
          //   order_items: cartItems.map((item) => ({
          //     product_id: item.id,
          //     quantity: item.quantity,
          //   })),
          // };

          const orderData = {
            "customer_id": 7,
            "order_status": "Processing",
            "order_date": "2025-01-10T10:00:00Z",  // ISO format
            "delivery_date": "2025-01-15T10:00:00Z",  // ISO format
            "delivery_address": "123 Main Street, Colombo2",
            "sub_total": 3000,  // Number
            "discount": 400.00,  // Number
            "order_items": [
              {
                "order_Id": 1,  // Assuming it's a unique identifier for the order item
                "item_Id": "501",  // Item ID as a string
                "price": 3000,  // Number
                "quantity": 1,  // Number
                "discount": 400.00  // Number
              }
            ]
          };
          
          // Call your handleOrder function with the modified orderData
          handleOrder(orderData);
          
      
      
      
          // After the order is created, redirect to the invoice page (for example)
          // window.location.href = `/Invoice?orderId=${orderId}`;
        } catch (error) {
          console.error('Error processing order:', error);
          alert('Failed to create order. Please contact support.');
        }
      };
      
      
      
      payhere.onDismissed = function () {
        alert("Payment dismissed by the user.");
      };

      payhere.onError = function (error) {
        alert("Payment error: " + error);
      };
    };


    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    
    if (typeof payhere === "undefined") {
      alert("PayHere script not loaded. Please try again.");
      return;
    }

    const payment = {
      sandbox: true, 
      merchant_id: "1228889", 
      hash:"6D34958F4147F1AAF2A029C5E42D7D27",
      return_url: "http://localhost:3000/Invoice", 
      cancel_url: "http://localhost:3000/cancel",
      notify_url: "http://localhost:3000/notify",
      order_id: "12345",
      items: cartItems,
      amount: "1000.00" ,
      currency: "LKR",
      first_name: currentAddress.name,
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: currentAddress.contactNumber,
      address: currentAddress.village,
      city: currentAddress.town,
      country: currentAddress.country,
    };

   
    payhere.startPayment(payment);
  };
 
console.log("address",currentAddress);
  return (
    <div>
      <NavBar />
      <script type="text/javascript" src="https://sandbox.payhere.lk/payhere.js"></script>
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
        <div className="flex flex-col w-[80%] space-y-10">
          <div className="bg-white shadow-md rounded px-4 py-6 mb-20 mx-4 sm:mx-6 md:mx-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <p className="text-lg mb-5 md:mb-0">
                <FontAwesomeIcon icon={faCirclePlus} className="text-main-dark text-xl cursor-pointer px-10" onClick={() => setIsEditModalOpen(true)} />
                <b>Change The Address</b>
              </p>
              <button
                className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter"
                onClick={() => setIsAddModalOpen(true)}
              >
                Add new
              </button>
            </div>
            {currentAddress && (
  <Address
    address_line_1={currentAddress.address_line_1}
    address_line_2={currentAddress.address_line_2}
    city={currentAddress.city}
    district={currentAddress.district}
    postal_code={currentAddress.postal_code}
  />
)}

          </div>

          
          {cartItems.map((item) => (
            <Cartcardcheckout
              key={item.id}
              images={item.images}
              title={[item.title]}
              color={[item.color]}
              price={[item.price]}
              quantity={[item.quantity.toString()]}
              onDelete={() => handleDelete(item.id)}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
              
            />
          ))}
        </div>


        {/* Order summary */}
        <div className="flex flex-col w-[30%] space-y-5">
          <div className="flex justify-center rounded-2xl border border-gray-300 w-[80%] strock-2 flex-col">
            <div className="flex flex-col px-12">
              <p className='text-lg font-semibold py-6 px-10'>Order Sumary</p>

              <div className="flex flex-row justify-between">
                <p className='test sm py-2'>Order</p>
                <p className='test sm py-2'>RS.{orderSummary.subtotal}</p>
              </div>

              <div className="flex flex-row justify-between">
                <p className='test sm py-2'>Delivary</p>
                <p className='test sm py-2'>RS.{orderSummary.delivery}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className='test sm py-2'>Discount</p>
                <p className='test sm py-2 text-red-600'>-RS.{orderSummary.discount}</p>
              </div>
              <hr />
              <div className="flex flex-row justify-between pb-8">
                <p className='test sm py-2'>Total</p>
                <p className='test sm py-2'>RS.{orderSummary.total}</p>
              </div>
              <button
                className=" border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter bg-main-dark text-white" onClick={handlePayment}>
                Pay Now!
              </button>
            </div>
          </div>

          <Needhelp />
          
        </div>
      </div>

      <AddAddressModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditAddressModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} currentAddress={currentAddress} />
      <Footer />
    </div>
  );
}

export default Page;
