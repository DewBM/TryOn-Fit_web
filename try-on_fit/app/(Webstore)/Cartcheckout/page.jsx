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

function Page() {
  const [cartItems, setCartItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    name: "Sapna Nethmini",
    contactNumber: "+94 761516307",
    number: "No.174/1",
    village: "Middeniya",
    town: "Hambantota",
    country: "Sri Lanka",
  });

  // Fetch data from localStorage
  useEffect(() => {
    const checkoutFromLocalStorage = localStorage.getItem('checkout');
    const parsedCheckout = JSON.parse(checkoutFromLocalStorage || '[]');
    setCartItems(parsedCheckout);

    const orderSummaryFromLocalStorage = localStorage.getItem('orderSummary');
    const parsedOrderSummary = JSON.parse(orderSummaryFromLocalStorage || '{}');
    setOrderSummary({
      subtotal: parsedOrderSummary.subtotal || 0,
      delivery: parsedOrderSummary.delivery || 0,
      discount: parsedOrderSummary.discount || 0,
      total: parsedOrderSummary.total || 0,
    });
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
      // Initialize PayHere event handlers
      payhere.onCompleted = function (orderId) {
        alert("Payment completed. OrderID: " + orderId);
      };

      payhere.onDismissed = function () {
        alert("Payment dismissed by the user.");
      };

      payhere.onError = function (error) {
        alert("Payment error: " + error);
      };
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup: Remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    
    if (typeof payhere === "undefined") {
      alert("PayHere script not loaded. Please try again.");
      return;
    }

    // Payment configuration object
    const payment = {
      sandbox: true, 
      merchant_id: "1228889", 
      return_url: "http://localhost:3000/return", // Ensure these URLs match PayHere settings
      cancel_url: "http://localhost:3000/cancel",
      notify_url: "http://localhost:3000/notify",
      order_id: "12345",
      items: "Sample Item Payment",
      amount: orderSummary.total.toString(),
      currency: "LKR",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "0771234567",
      address: "No. 1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
    };

   
    payhere.startPayment(payment);
  };

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
            <Address
              name="Sapna Nethmini"
              number="No.174/1"
              village="Middeniya"
              town="Hambantota"
              country="Sri Lanka"
              tele="+94 761516307"
            />
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
          <Payment type={["Master"]} acnumber={[123456789099]} />
          <Delivaryaddress
            fline={["No:77/A, Old Kesbewa Rd"]}
            sline={["Nugegoda"]}
            city={["Colombo"]}
            phone={[94765739623]}
          />
        </div>
      </div>

      {/* Modals for address */}
      <AddAddressModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditAddressModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} currentAddress={currentAddress} />
      <Footer />
    </div>
  );
}

export default Page;
