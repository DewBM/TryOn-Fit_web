'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import OrdersummaryCart from '@/app/components/ordersummarycart';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcard from '@/app/components/Cartcard';
import { fetchCart } from './action';

interface CartItems {
  id: number;
  images: string[];
  title: string;
  color: string;
  price: number;
  quantity: number;
}

interface OrderSummary {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  // Calculate order summary
  const calculateOrderSummary = (items: CartItems[]) => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const delivery = 400; // Fixed delivery charge
    const discount = 200; // Fixed discount
    const total = subtotal + delivery - discount;

    setOrderSummary({ subtotal, delivery, discount, total });
  };

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await fetchCart();
        if (Array.isArray(items)) {
          setCartItems(items);
          calculateOrderSummary(items);
        } else {
          console.warn("fetchCart returned non-array data:", items);
          setCartItems([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        setCartItems([]); // Handle error gracefully
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchCartItems();
  }, []);

  // Handle delete item
  const handleDelete = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    calculateOrderSummary(updatedCartItems);
  };

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    calculateOrderSummary(updatedCartItems);
  };

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
        <div className="flex flex-col w-[80%] space-y-10">
          {loading ? (
            <div>Loading...</div>
          ) : cartItems.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <Cartcard
                key={item.id}
                images={item.images}
                title={[item.title]}
                color={[item.color]}
                price={[item.price.toString()]} // Convert to string
                quantity={[item.quantity.toString()]} // Convert to string
                onDelete={() => handleDelete(item.id)}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(item.id, newQuantity)
                }
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
};

export default Page;
