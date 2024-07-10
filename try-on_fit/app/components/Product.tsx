import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import image from "next/image"
import ItemCard from "./Helper/ItemCard"
export default function Product(){
  return(
    <Card className=" w-60  py-4 bg-main-lighter ">
     
      <CardBody className="overflow-visible pt-2">
        <Image
          alt="Card background"
          className="object-contain rounded-lg"
          src="images/pic.png"
          style={{ width: '270px', height: '200px' }}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
        <ItemCard name="Brown Summer Coat" price="$70000"/>
       
       </CardHeader>
    </Card>
  
  );
}

