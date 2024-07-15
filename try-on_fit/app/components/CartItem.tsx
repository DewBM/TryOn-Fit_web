'use client'

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import IncrementDecrementButton from "./IncrementDecrementButton";   

export default function CartItem({
   name, color, price, size
 } : {name: String, color: String, price: String, size: String}
 ) {
   return (
     <div>
       {/* Changed flex direction to column on small screens and row on medium screens and above */}
       <div id="cart-item" className="bg-main-lighter shadow-md flex flex-col md:flex-row items-center rounded px-4 md:px-8 pt-6 pb-6 mb-4">
         
         {/* Added margin-bottom on small screens to separate items vertically, removed on medium screens and above */}
         <input type="checkbox" className="form-checkbox shadow-md h-6 w-6 text-main rounded mb-4 md:mb-0"/>
         
         {/* Added margin-bottom on small screens, and margin-left on medium screens and above */}
         <div id="cartimg" className="flex-shrink-0 mb-4 md:mb-0 md:ml-6">
           <Image src="/images/black_skinny_dress.png" alt="Image not found" width={100} height={100} />
         </div>
         
         {/* Added margin-bottom on small screens to separate items vertically, removed on medium screens and above */}
         <div id="cartdata" className="flex-grow text-center mb-4 md:mb-0">
           <p><b>{name}</b></p>
           <p><b>{color}</b></p>
           <p><b>{price} /per item</b></p>
           <p><b>{size}</b></p>
         </div>
         
         {/* Added margin-bottom on small screens to separate items vertically, removed on medium screens and above */}
         <IncrementDecrementButton/>
 
         <div id="itemremove" className="flex-shrink-0">
           <Button type="button">
             <Image src="/images/delete.png" alt="Image not found" color="white" width={40} height={40} />
           </Button>
         </div>
       </div>
     </div>
   );
 }