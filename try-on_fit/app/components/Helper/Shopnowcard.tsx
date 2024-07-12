import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Shopnowcard() {
  return (
    <div className="w-60  py-4 bg-main-lighter pl-5">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
       </Card>
      {/* <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        Discover Collections
        </Button>
      </CardFooter> */}
      </div>
  );
}
