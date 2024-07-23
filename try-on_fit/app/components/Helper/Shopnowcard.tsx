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
    <div >
      <Card radius="lg" className="border-hidden object-contain px-10 pt-10 pb-8 rounded-lg bg-main-lighter">
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
        <Button type="submit" className="w-[200px] ml-3">
      {title}
        </Button>
      </div>
      </Card>
    </div>
  );
};

export default Shopnowcard;
