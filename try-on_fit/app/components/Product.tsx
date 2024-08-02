"use client"; // Indicates this is a client-side component

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image"; // Correct Image import from next/image
import ItemCard from "./Helper/ItemCard";

interface Props {
  images: string[]; // Changed to an array of strings
  name: string;
  price: number;
}

const Product: React.FC<Props> = ({ images, name, price }) => {
  return (
    <Card className="w-40 py-4 bg-main-lighter flex justify-center">
      <CardBody className="overflow-visible justify-center items-center pt-2">
        {images.map((imgSrc, index) => (
          <Image
            key={index}
            alt={`Card background ${index}`}
            className="object-contain rounded-2xl"
            src={imgSrc}
            width={100} // Set the width
            height={100} 
          />
        ))}
      </CardBody>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
        <ItemCard  name={name} price={price} />
        {/* <div className="pt-5 flex flex-row gap-10">
          <button className="flex rounded-2xl border border-main-dark stroke-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light">Add to Fiton</button>
          <button className="flex rounded-2xl border border-main-dark stroke-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light">Add to Cart</button>
        </div> */}
      </CardHeader>
    </Card>
  );
};

export default Product;
