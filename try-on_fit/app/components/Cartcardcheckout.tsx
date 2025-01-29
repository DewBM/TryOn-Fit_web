import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  images: string[];         // Array of image URLs
  price: string;            // Single price string
  quantity: number;         // Single quantity number
  title: string;            // Single title string
  color: string;            // Single color string
  onDelete: () => void;     // Delete handler
  onQuantityChange: (newQuantity: number) => void;  // Quantity change handler
}

function Cartcardcheckout({
  images, price, quantity, title, color, onDelete, onQuantityChange
}: Props) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
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
    setIsSelected(prev => !prev);
  };

  return (
    <div className="h-[150px] w-[90%] rounded-2xl border border-gray-300">
      <div className="flex flex-row py-2">
        <div className="flex flex-row justify-center pt-[1rem] px-10">
          {images.map((imgSrc, index) => (
            <Image
              key={index}
              alt={`Card background ${index}`}
              className="object-contain rounded-2xl"
              src={imgSrc}
              width={100}
              height={100}
              priority
            />
          ))}
        </div>
        <div className="flex flex-row pl-[10rem] gap-20">
          <div className="flex flex-col justify-center">
            <p className="text-medium font-bold text-balance">{title}</p>
            <p className="text-sm pt-3">{color}</p>
          </div>
          <div className="flex flex-col justify-center">
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
