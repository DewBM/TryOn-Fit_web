'use client'

import React from "react";
import Image from "next/image";

   

export default function ConfirmItem({
   amount,name, color, price, size
} : {amount:number, name: String, color: String, price: String, size: String}
) {
  

   return (
      <div>
          <div id="cart-item" className="bg-main-lighter shadow-md flex items-center rounded px-8 pt-6 pb-100 mb-6 ml-11 mr-11">
            <div id="cartimg" className="flex-grow flew-center ml-6 mb-6 ">
            <Image src="/images/black_skinny_dress.png" alt = "Image not found" width={100} height={100} />
            </div>
            
            
            <div id ="cartdata" className = "flex-grow text-center">
                <p><b>{name}</b></p>
                <p><b>{color}</b></p>
                <p><b>{price} /per item</b></p>
                <p><b>{size}</b></p>
            </div>
            
            
            <div className="flex-grow text-center">
                <p><b>{amount}</b></p>
            </div>

            </div>

        
      </div>

   )
}