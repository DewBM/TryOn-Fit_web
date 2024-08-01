"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
  price: string[];
  quality: string[];
  title: string[];
  color: string[];
}

const Return: React.FC<Props> = ({ images = [], price = [], quality = [], title = [], color = [] }) => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
    if (e.target.value.trim() === '') {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reason.trim() === '') {
      setError('This field is required.');
    } else {
      setError('');
      console.log('Reason for return:', reason);
    }
  };

  return (
    <div className="flex flex-col h-[350px] w-[90%] rounded-2xl border border-gray-300 pt-5">
      <div className="pl-6">
        <div className="h-[150px] w-[90%] rounded-2xl border border-gray-300">
          <div className="flex flex-row py-2 px-6">
            <div>
              {images.length > 0 ? (
                images.map((imgSrc, index) => (
                  <Image
                    key={index}
                    alt={`Product image ${index}`}
                    className="object-contain rounded-2xl"
                    src={imgSrc}
                    width={100} // Set the width
                    height={100}
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="flex flex-col justify-center pl-6">
              <p className="text-medium font-bold">{title[0]}</p>
              <p className="text-sm pt-3">{color[0]}</p>
            </div>
            <div className="flex flex-col justify-center pl-[35rem]">
              <p className="text-lg font-bold">{price[0]}</p>
              <p className="text-sm pt-3">Qty: {quality[0]}</p>
            </div>
          </div>
        </div>

        <div className="pt-9">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <label className="block text-lg font-semibold mb-2">
              Reason for returning the product
              {error && <span className="text-red-500 text-sm"> {error}</span>}
            </label>
            <textarea
              value={reason}
              onChange={handleInputChange}
              className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300`}
              placeholder="Enter your reason here..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Return;
