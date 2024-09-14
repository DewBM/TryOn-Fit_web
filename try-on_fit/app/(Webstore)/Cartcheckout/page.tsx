'use client';

import React, { useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Ordersummarycheckout from '@/app/components/ordersummarycheckout';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcard from '@/app/components/Cartcard';
import Address from '@/app/components/Address';
import AddAddressModal from "@/app/components/AddAddressModal";
import EditAddressModal from "@/app/components/EditAddressModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Cartcardcheckout from '@/app/components/Cartcardcheckout';

function Page() {
  // Sample cart data
  const initialCartItems = [
    {
      id: 1,
      images: ["/images/1.webp"],
      title: "Sleeve Blouse",
      color: "Brown",
      price: "RS2900",
      quantity: 1,
    },
    {
      id: 2,
      images: ["/images/2.webp"],
      title: "Emerald T-shirt",
      color: "Green",
      price: "RS1900",
      quantity: 2,
    },
    {
        id: 3,
        images: ['/images/men/1.webp'],
        title: 'Sleeve shirt',
        color: "Brown",
        price: "RS2900",
        quantity: 1,
      },
      {
        id: 4,
        images: ['/images/women/5.webp'],
        title: "Emerald T-shirt",
        color: "Green",
        price: "RS1900",
        quantity: 2,
      },
    
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to handle deleting an item
  const handleDelete = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
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

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
      <div className="flex flex-col w-[80%] space-y-10">


      <div className="bg-white shadow-md rounded px-4 py-6 mb-20 mx-4 sm:mx-6 md:mx-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <p className="text-lg mb-5 md:mb-0">
              <FontAwesomeIcon icon={faCirclePlus} className="text-main-dark text-xl cursor-pointer px-10" onClick={() => setIsEditModalOpen(true)}/>
                <b>Change The Address</b>
              </p>

              <button
                className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter"
                onClick={() => setIsAddModalOpen(true)}
              >
                Add new
              </button>


              {/* <button
                className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter"
                onClick={() => setIsEditModalOpen(true)}
              >
                Change Details
              </button> */}


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
        <div className="flex flex-col w-[30%] space-y-5">
          <Ordersummarycheckout
            order={[13000.0]}
            delivary={[400.0]}
            discount={[200.0]}
            total={[13200.0]}
          />
          <Needhelp />
          <Payment
            type={["Master"]}
            acnumber={[123456789099]}
          />
          <Delivaryaddress
            fline={["No:77/A, Old Kesbewa Rd"]}
            sline={["Nugegoda"]}
            city={["Colombo"]}
            phone={[94765739623]}
          />
        </div>
      </div>
      <AddAddressModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

<EditAddressModal
  isOpen={isEditModalOpen}
  onClose={() => setIsEditModalOpen(false)}
  currentAddress={currentAddress}
/>
      <Footer />
    </div>
  );
}

export default Page;
