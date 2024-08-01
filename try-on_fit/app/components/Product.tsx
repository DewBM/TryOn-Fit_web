"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image ,Button} from "@nextui-org/react";
import image from "next/image"
import ItemCard from "./Helper/ItemCard"
interface props{
  image:string[];
  name:string[];
  price:number[];
}
export default function Product({image,name,price}:props){
  return(
    <Card className=" w-80  py-4 bg-main-lighter flex justify-center ">
     
      <CardBody className="overflow-visible pt-2">
        <Image
          alt="Card background"
          className="object-contain rounded-lg pl-2"
          // ading img props
          src="images/pic.png"
          style={{ width: '270px', height: '200px' }}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
        {/* // ading props for that  */}
        <ItemCard name="Brown Summer Coat" price="$70000"/>
       {/* <div className=" pt-5 flex flex-row gap-10">
        

        <button className=" flex rounded-2xl border border-main-dark strock-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light"> Add to Fiton</button>
        <button className=" flex rounded-2xl border border-main-dark strock-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light"> Add to Cart</button>
       </div> */}
       </CardHeader>
    </Card>
  
  );
}

