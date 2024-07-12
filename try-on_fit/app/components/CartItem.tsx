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
          <div id="cart-item" className="bg-main-lighter justify-left shadow-md flex items-center rounded px-8 pt-6 pb-100 mb-4 ">
            <input type="checkbox" className="form-checkbox shadow-md h-6 w-6 text-main rounded"/>
            <div id="cartimg" className="flex-shrink ml-6 mb-6 ">
            <Image src="/images/black_skinny_dress.png" alt = "Image not found" width={100} height={100} />
            </div>
            
            
            <div id ="cartdata" className = "flex-grow text-center">
                <p><b>{name}</b></p>
                <p><b>{color}</b></p>
                <p><b>{price} /per item</b></p>
                <p><b>{size}</b></p>
            </div>
            
            
            <IncrementDecrementButton />
            


            <div id  ="itemremove" className = "flex-shrink-0">
            <Button type ="button"><Image src ="/images/delete.png" alt= "Image not found" color="white" width = {40} height ={40}></Image>
            </Button>



            </div>
            </div>

        
      </div>

   )
}