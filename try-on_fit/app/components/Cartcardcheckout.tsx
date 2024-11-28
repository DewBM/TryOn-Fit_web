import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  images: string[];
  price: string[];
  quantity: string[];
  title: string[];
  color: string[];
  onDelete: () => void;
  onQuantityChange: (newQuantity: number) => void;
}

function Cartcardcheckout({ images, price, quantity, title, color, onDelete, onQuantityChange }: Props) {
  // Safely parse the quantity, defaulting to 1 if undefined or empty
  const initialQuantity = quantity && quantity.length > 0 ? parseInt(quantity[0], 10) : 1;
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);
  const [isSelected, setIsSelected] = useState(false);
  const handleIncrease = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };
 
  const handleCheckboxChange = () => {
    setIsSelected(prev => !prev); // Toggle selection state
  };
  return (
    <div className="h-[150px] w-[90%] rounded-2xl border border-gray-300">
      <div className="flex flex-row py-2 ">
        <div className="flex flex-row justify-center pt-[3rem] px-10 ">
       
           </div>
          <div className="">
          {images.map((imgSrc, index) => (
            <Image
              key={index}
              alt={`Card background ${index}`}
              className="object-contain rounded-2xl"
              src={imgSrc}
              width={100}
              height={100}
            />
          ))}
         
        </div>
        <div className="flex flex-row pl-[10rem] gap-20">
        <div className="flex flex-col justify-center ">
          <p className="text-medium font-bold text-balance">{title}</p>
          <p className="text-sm pt-3">{color}</p>
        </div>
        <div className="flex flex-col justify-center ">
          <p className="text-lg font-bold">{price}</p>
          <p className="text-sm pt-3">Qty: {currentQuantity}</p>
        </div>
        <div className="flex flex-row items-center pl-6">
        <p className="text-lg font-bold">{quantity}</p> 
          </div>
        </div>
        
        </div>
        </div>
     
  );
}

export default Cartcardcheckout;
