

'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import OrdersummaryCart from '@/app/components/ordersummarycart';
import Needhelp from '@/app/components/needhelp';
import Payment from '@/app/components/payment';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Cartcard from '@/app/components/Cartcard';
import { Cartfetch } from './action';

interface CartItems {
  id: number;
  images: string[];
  title: string;
  color: string;
  price: number;
  quantity: number;
  variantId: number;
}

interface OrderSummary {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [checkout, setCheckout] = useState<CartItems[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState<boolean>(true);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });

  const calculateSelectedOrderSummary = () => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.has(item.id)
    );
    const subtotal = selectedCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const delivery = 400; 
    const discount = 200; 
    const total = subtotal + delivery - discount;

    setOrderSummary({ subtotal, delivery, discount, total });
  };

  useEffect(() => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.has(item.id)
    );
    setCheckout(selectedCartItems); // Update checkout array with selected items
    calculateSelectedOrderSummary(); // Recalculate order summary
  }, [selectedItems, cartItems]);



  
  // Save order summary to local storage

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     setLoading(true);
  //     try {
  //       const items = await Cartfetch(); // Fetch cart items
  //       console.log("Fetched cart items:", items);
  
  //       // Ensure the response structure matches the expectation
  //       if (items?.isSuccess && Array.isArray(items.cartItems)) {
  //         setCartItems(
  //           items.cartItems.map((item: any) => ({
  //             id: item.cartItemId,
  //             images: [], // Mock empty images
  //             title: item.name || "Unnamed Item",
  //             color: item.color || "N/A",
  //             price: item.price || 0,
  //             quantity: item.quantity || 1,
  //           }))
  //         );
  //       } else {
  //         console.warn("Invalid cart data format:", items);
  //         setCartItems([]); // Clear cart items if format is invalid
  //       }
  //     } catch (error) {
  //       console.error("Error fetching cart items:", error);
  //       setCartItems([]); // Clear cart items on error
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchCartItems();
  // }, []);
  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const items = await Cartfetch(); // Fetch cart items
        console.log("Fetched cart items:", items);
  
        if (items?.isSuccess && Array.isArray(items.cartItems)) {
          // Set cart items state
          setCartItems(
            items.cartItems.map((item:any) => ({
              id: item.cartItemId,
              images: item.img_front ? [`/${item.img_front}`] : [], // Ensure the path starts with '/'
              title: item.name || "Unnamed Item",
              color: item.color || "N/A",
              price: item.price || 0,
              quantity: item.quantity || 1,
              variantId: item.variantId || 0, 
              
            }))
          );
          
  
          // Save customer details to local storage
          const details = [
            {
              customerId: items.customerId || null,
              address: items.address || null,

            },
          ];
          localStorage.setItem("details", JSON.stringify(details));
          console.log("Customer details saved to local storage:", details);
        } else {
          console.warn("Invalid cart data format:", items);
          setCartItems([]); // Clear cart items if format is invalid
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setCartItems([]); // Clear cart items on error
      } finally {
        setLoading(false);
      }
    };
  
    fetchCartItems();
  }, []);
  
  
  useEffect(() => {
    localStorage.setItem('orderSummary', JSON.stringify(orderSummary));
  }, [orderSummary]);

  // Save checkout array to local storage
  useEffect(() => {
    localStorage.setItem('checkout', JSON.stringify(checkout));
  }, [checkout]);

  // Handle item deletion
  const handleDelete = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // Handle item selection change
  const handleSelectChange = (id: number, isSelected: boolean) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelection = new Set(prevSelectedItems);
      if (isSelected) {
        updatedSelection.add(id);
      } else {
        updatedSelection.delete(id);
      }
      return updatedSelection;
    });
  };

  console.log(cartItems);
  console.log(orderSummary);
  console.log('checkoutarray:', checkout);

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
              price={[item.price.toString()]}
              quantity={[item.quantity.toString()]}
              onDelete={() => handleDelete(item.id)}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.id, newQuantity)
              }
              onSelectchange={(isSelected) =>
                handleSelectChange(item.id, isSelected)
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
          {/* <Payment type={['Master']} acnumber={[123456789099]} /> */}
          <Delivaryaddress
            fline={['No:77/A, Old Kesbewa Rd']}
            sline={['Nugegoda']}
            city={['Colombo']}
            phone={[94765739623]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
