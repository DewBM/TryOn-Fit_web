'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import OrdersummaryCart from '@/app/components/ordersummarycart';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcard from '@/app/components/Cartcard';
import { fetchCart } from './action'; // Import your fetchCart function

interface CartItem {
  id: number;
  images: string[];
  title: string;
  color: string;
  price: number; // Changed to number for calculations
  quantity: number; 
}

interface OrderSummary {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
}

function Page({ userId }: { userId: string }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  // Assuming your token is stored in local storage
  const token = localStorage.getItem('token'); // Replace this with your method to get the token
  console.log("Token:", token); // Log the token for debugging

  // Function to fetch cart items using the fetchCart action
  const fetchCartItems = async () => {
    if (!token) {
      console.error("No token found. User might not be logged in.");
      setLoading(false);
      return;
    }
    
    try {
      const items = await fetchCart(userId, token); // Pass the token
      setCartItems(items);
      calculateOrderSummary(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate order summary
  const calculateOrderSummary = (items: CartItem[]) => {
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const delivery = 400; // Assuming a fixed delivery charge
    const discount = 200; // Assuming a fixed discount
    const total = subtotal + delivery - discount;

    setOrderSummary({ subtotal, delivery, discount, total });
  };

  useEffect(() => {
    fetchCartItems(); // Fetch cart items when the component mounts
  }, [userId]); // Add userId as a dependency to refetch if it changes

  // Function to handle deleting an item
  const handleDelete = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    calculateOrderSummary(updatedCartItems); // Recalculate order summary after deletion
  };

  // Function to handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    calculateOrderSummary(updatedCartItems); // Recalculate order summary after quantity change
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while loading
  }

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
        <div className="flex flex-col w-[80%] space-y-10">
          {cartItems.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <Cartcard
                key={item.id}
                images={item.images}
                title={[item.title]}
                color={[item.color]}
                price={[item.price.toString()]} // Ensure price is converted to string
                quantity={[item.quantity.toString()]} // Ensure quantity is converted to string
                onDelete={() => handleDelete(item.id)}
                onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
              />
            ))
          )}
        </div>
        <div className="flex flex-col w-[30%] space-y-5">
          <OrdersummaryCart
            order={[orderSummary.subtotal]}
            delivary={[orderSummary.delivery]}
            discount={[orderSummary.discount]}
            total={[orderSummary.total]}
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
