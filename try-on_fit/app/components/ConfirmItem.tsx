'use client'

import React from "react";
import Image from "next/image";

export default function ConfirmItem({
    amount, name, color, price, size
} : {amount: number, name: String, color: String, price: String, size: String}
) {
    return (
        <div className="bg-main-lighter shadow-md rounded px-4 py-6 mb-6 mx-4 sm:px-6 md:px-8 md:flex md:items-center">
            <div id="cartimg" className="flex-grow flex justify-center md:justify-start mb-4 md:mb-0">
                <Image src="/images/black_skinny_dress.png" alt="Image not found" width={100} height={100} />
            </div>

            <div id="cartdata" className="flex-grow text-center md:text-left mb-4 md:mb-0">
                <p><b>{name}</b></p>
                <p><b>{color}</b></p>
                <p><b>{price} /per item</b></p>
                <p><b>{size}</b></p>
            </div>

            <div className="flex-grow text-center md:text-left">
                <p><b>{amount}</b></p>
            </div>
        </div>
    );
}
