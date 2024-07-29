'use client'

import React from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";  
import Edit from "./Edit";

export default function ConfirmItem({
    amount, name, color, price, size
} : {amount: number, name: String, color: String, price: String, size: String}
) {
    return (
        <div className="bg-white shadow-md rounded grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-6 mb-20 mx-4 sm:px-6 sm:mx-6 md:mx-8 md:px-8 md:items-center">

            <div className="flex-grow flex justify-center md:justify-start mb-4 md:mb-0">
                <Image src="/images/black_skinny_dress.png" alt="Image not found" width={100} height={100} />
            </div>

            <div id="cartdata" className="flex-grow text-center md:text-left mb-4 md:mb-0">
               <p className="text-lg">{name}</p>
               <p className="text-l">{color}</p>
               <p className="text-l"><b>{price} /per item</b></p>
               <p><b>{size}</b></p>
            </div>

            <div className="flex justify-center mb-4 md:mb-0">
                <p><b>{amount}</b></p>
            </div>

            <div className="flex justify-center items-center mb-4 md:mb-0">
            <Edit />
            </div>

            <div className="flex justify-center items-center mb-4 md:mb-0">
            <DeleteButton />
            </div>
        </div>
    );
}
