'use client';

import React, { useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Ordersummary from '@/app/components/ordersummary';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcard from '@/app/components/Cartcard';

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

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
        <div className="flex flex-col w-[80%] space-y-10">
          {cartItems.map((item) => (
            <Cartcard
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
          <Ordersummary
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
      <Footer />
    </div>
  );
}

export default Page;
