import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import image from "next/image"


interface Props{
    name:String;
    price:String;
}

const ItemCard = ({name,price}:Props) => {
    return(
       <div><p className="text-poppins uppercase font-semibold text-sm  ">{name}</p>
        <small className="text-default-500">RS.{price}</small></div>
        
       
      
    );

}
export default  ItemCard;