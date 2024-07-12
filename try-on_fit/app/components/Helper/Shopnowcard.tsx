import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Button from "../Button";
import image from "next/image";

interface Props {
  images: string[];
  title:String
}

const Shopnowcard = ({ images ,title}: Props) => {
  return (
    <div className="px-10 pt-10 pb-8 rounded-lg bg-main-lighter">
      <Card radius="lg" className="border-hidden object-contain  pt-6 pb-4 bg-main-dark">
        {images.map((imgSrc, index) => (
          <Image
            key={index}
            alt={`Card background ${index}`}
            className="object-contain rounded-lg"
            src={imgSrc}
            style={{ width: '270px', height: '200px' }}
          />
        ))}
      </Card>

      <div className="pt-4 flex justify-center">
        <Button type="submit" className="w-[200px] ml-3">
      {title}
        </Button>
      </div>
    </div>
  );
};

export default Shopnowcard;
