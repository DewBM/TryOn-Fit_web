'use client'

import { useState } from 'react';
import CartItem from "@/app/components/CartItem";
import Total from "@/app/components/Total";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

export default function CartCheckout() {
    // Initial state for items
    const initialItems = [

        { id: 1, 
          name: "Skinny Dress", 
          color: "Color", 
          price: "Rs.3000.00", 
          size: "XL", 
          status: 'unavailable' as const },

        { id: 2, 
          name: "Summer Skinny Dress", 
          color: "Color", 
          price: "Rs.3000.00", 
          size: "XL", 
          status: 'available' as const },

        { id: 3, 
          name: "Summer Skinny Dress", 
          color: "Color", 
          price: "Rs.3000.00", 
          size: "XL", 
          status: 'available' as const },

        
    ];

    // track whether all items are selected
    const [selectAll, setSelectAll] = useState(false);
    
    // track each item's selection
    const [items, setItems] = useState(initialItems.map(item => ({ ...item, isSelected: false })));

    // Handler for the "Select All" checkbox
    const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        setItems(items.map(item => ({ ...item, isSelected: checked })));
    };


    // Handler for individual item checkboxes
    const handleItemChange = (id: number) => {
        setItems(prevItems => {
            const newItems = prevItems.map(item => 
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            );
            // Check if all items are selected
            setSelectAll(newItems.every(item => item.isSelected));
            return newItems;
        });

    };

    return (
        <> 
            <NavBar />
            <div className="bg-slate-50 shadow-md rounded p-4 md:p-6 mb-10 mx-2">
                <div id="page" className="flex flex-col md:flex-row w-full p-4 sm:p-6 md:p-8 mt-40 ">
                    
                    <div className="w-full md:w-3/5 md:ml-20 md:mr-20">
                        <div className="bg-white shadow-md rounded p-4 md:p-6 mb-10 mx-2"> 
                            <p className="text-lg"><b>Shopping Cart</b></p>
    
                            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                                <div className="flex justify-center items-center mt-6 mb-4 md:mb-10">
                                    <input 
                                        type="checkbox" 
                                        className="form-checkbox shadow-md h-6 w-6 accent-slate-950 rounded" 
                                        checked={selectAll} 
                                        onChange={handleSelectAllChange} 
                                    />
                                </div>
    
                                <div className="col-span-2 flex justify-start items-center mt-6 mb-4 md:mb-10">
                                    <p className="justify-start">Select All Items</p>
                                </div>
                            </div>

                        </div>
    
                        {items.map(item => (
                            <CartItem 
                                key={item.id}
                                name={item.name} 
                                color={item.color} 
                                price={item.price} 
                                size={item.size} 
                                status={item.status}
                                isSelected={item.isSelected} 
                                onCheckboxChange={() => handleItemChange(item.id)} 
                            />
                        ))}

                    </div>
    
                    <div id="sub" className="bg-white shadow-md rounded w-full md:w-1/5 mt-8 md:mt-0 md:ml-20 py-6 max-h-80 flex flex-col items-center">
                        <h3 className="text-center font-bold mb-4 mt-3">Order Summary</h3>
                        <Total subamount={4500} 
                               discount={500} />
                    </div>
    
                </div>
            </div>
            <Footer />
        </>
    );
}
