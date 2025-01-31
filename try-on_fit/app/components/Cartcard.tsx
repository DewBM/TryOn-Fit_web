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
  onSelectchange:(isSelected:boolean)=> void;
}

function Cartcard({ images, price, quantity, title, color, onDelete, onQuantityChange ,onSelectchange}: Props) {

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
    const newSelection = !isSelected;
    setIsSelected(newSelection);
    onSelectchange(newSelection); 
  };
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupImageUrl, setPopupImageUrl] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    
  
    const handleImageClick = (imgSrc: string) => {
      setPopupImageUrl(imgSrc); // Set the popup image URL dynamically
      setIsPopupOpen(true);
    };
  
  return (
    <div className="h-[150px] w-[90%] rounded-2xl border border-gray-300">
      <div className="flex flex-row py-2 ">
        <div className="flex flex-row justify-center pt-[3rem] px-10 ">
        <input 
            type="checkbox" 
            className="form-checkbox shadow-md h-6 w-6 accent-slate-950 rounded" 
            checked={isSelected}
            onChange={handleCheckboxChange} 
          />
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

{/* {images.map((images, index) => (
            <Image
              key={index}
              alt={`Card background ${index}`}
              className="object-contain rounded-2xl"
              src={images}
              width={100}
              height={100}
            />
          ))} */}

           {/* <Image
                          src={popupImageUrl}
                          alt="Popup Image"
                          className="max-w-full max-h-full"
                          style={{ objectFit: 'contain' }}
                          width={100}
                          height={100}
                        /> */}
         
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
            <div className="flex flex-row rounded-xl py-2 border ">
          <button className="font-bold text-xl hover:text-main-dark px-2" onClick={handleDecrease}>-</button>
          <p className="text-xl px-4">{currentQuantity}</p>
          <button className="font-bold text-xl  hover:text-main-dark px-2" onClick={handleIncrease}>+</button>
          </div>
        </div>
        <div className="flex flex-col justify-center pl-6">
          <button onClick={onDelete} className="text-black hover:text-main-dark">
            <FontAwesomeIcon icon={faTrash} className="w-6 h-6" />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cartcard;
