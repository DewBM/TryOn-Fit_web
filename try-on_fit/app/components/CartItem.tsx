'use client';

import React from "react";
import Image from "next/image";
import IncrementDecrementButton from "./IncrementDecrementButton";   
import DeleteButton from "./DeleteButton";

export default function CartItem({
   name, color, price, size
 } : {name: String, color: String, price: String, size: String}
 ) {
   return (
     <div className="bg-main-lighter shadow-md rounded p-4 md:p-6 mb-10 mx-2"> 
       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

         <div className="flex justify-center items-center mb-4 md:mb-0">
           <input type="checkbox" className="form-checkbox shadow-md h-6 w-6 text-main rounded"/>
         </div>

         <div className="flex justify-start items-center mb-4 md:mb-0">
           <Image src="/images/black_skinny_dress.png" alt="Image not found" width={100} height={100} />
         </div>

         <div className="text-left mb-4 md:mb-0">
           <p><b>{name}</b></p>
           <p><b>{color}</b></p>
           <p><b>{price} /per item</b></p>
           <p><b>{size}</b></p>
         </div>

         <div className="flex justify-center items-center mb-4 md:mb-0">
           <IncrementDecrementButton />
         </div>


         <div className="flex justify-center items-center mb-4 md:mb-0">
           <DeleteButton />
         </div>

       </div>

     </div>
   );
}
