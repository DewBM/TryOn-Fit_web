
'use client'
import React from "react";
import { Card, Image } from "@nextui-org/react";
import Button from "../Button"; // Assuming Button component accepts className and onClick props

interface Props {
  images: string[];
  title: string;
  onClick: () => void;
}

const Shopnowcard = ({ images, title, onClick }: Props) => {
  return (
    <div>
      <Card radius="lg" className="border-hidden object-contain px-10 pt-10 pb-8 rounded-lg" >
        {images.map((imgSrc, index) => (
          <Image
            key={index}
            alt={`Card background ${index}`}
            className="object-contain rounded-lg"
            src={imgSrc}
            style={{ width: '270px', height: '200px' }}
          />
        ))}

        <div className="pt-4 flex justify-center">
          <button type="submit" className="w-[200px] ml-3 cursor-pointer rounded-xl bg-main-dark text-white py-4 text-lg font-medium" onClick={onClick}>
            {title}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Shopnowcard;
