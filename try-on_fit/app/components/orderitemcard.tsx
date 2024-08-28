"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  images: string[];
  price: string[];
  quality: string[];
  title: string[];
  color: string[];
  status: string[];
  orderId:string[];
  orderplacedate:string[];
}

const Orderitemcard: React.FC<Props> = ({ 
  images = [], 
  price = [], 
  quality = [], 
  title = [], 
  color = [],
  status = [],
  orderId=[],
  orderplacedate=[]
}) => {
  // Function to get the appropriate CSS class for status
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered';
      
      case 'processing':
        return 'status-processing';
      default:
        return '';
    }
  };
     const router = useRouter();
     const haddlemanage=()=>{
      router.push("status");
     }
  return (
    <div className=" flex flex-col h-[200px] w-[90%] rounded-2xl border border-gray-300">
      <div className="flex flex-row pt-5 pl-5">
        <p className='text-xl font-bold'>Order ID:{orderId}<span className='text-sm text-green-600 font-light pl-3 pr-[27rem]'>Placed on:{orderplacedate}</span></p>
        <p className='text-xl font-light text-red-500 cursor-pointer' onClick={haddlemanage}>Manage</p>
      </div>
      <div className="flex flex-row py-2 px-6 gap-3">
        <div>
          {images.length > 0 ? (
            images.map((imgSrc, index) => (
              <Image
                key={index}
                alt={`Product image ${index}`}
                className="object-contain rounded-2xl"
                src={imgSrc}
                width={100}
                height={100}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="flex flex-col justify-center pl-6">
          <p className="text-medium font-bold">{title[0] || 'No title available'}</p>
          <p className="text-sm pt-3">{color[0] || 'No color information'}</p>
        </div>
        <div className="flex flex-col justify-center pl-[3rem]">
          <p className={`text-sm pt-3 ${getStatusClass(status[0] || '')}`}>
            {status[0] || 'No status information'}
          </p>
        </div>
        <div className="flex flex-col justify-center pl-[35rem]">
          <p className="text-lg font-bold">{price[0] || 'No price available'}</p>
          <p className="text-sm pt-3">Qty: {quality[0] || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Orderitemcard;
