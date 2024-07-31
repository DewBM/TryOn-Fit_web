"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Image, Button } from '@nextui-org/react';
import { Dialog } from '@headlessui/react';


const Product = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');



  const handleImageClick = () => {
    setPopupImageUrl('images/pic.png'); // Set the popup image URL dynamically if needed
    setIsPopupOpen(true);
  };



  const closePopup = () => {
    setIsPopupOpen(false);
  };



  return (

    <>
      <Card className="w-80 py-4 bg-main-lighter flex justify-center">

        <CardBody className="overflow-visible pt-2">

          <Image
            alt="Card background"
            className="object-contain rounded-lg pl-2 cursor-pointer"
            src="images/pic.png"
            style={{ width: '270px', height: '200px' }}
            onClick={handleImageClick}
          />

        </CardBody>


        <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">

          {/* Add props for the item */}

          <div className="text-lg font-semibold">Brown Summer Coat</div>
          <div className="text-xl text-main-dark">$70000</div>
          <div className="pt-5 flex flex-row gap-10">
            <button className="flex rounded-2xl border border-main-dark stroke-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light">Add to Fiton</button>
            <button className="flex rounded-2xl border border-main-dark stroke-1 px-2 py-1 justify-start cursor-pointer text-xs hover:bg-main-light">Add to Cart</button>
          </div>

        </CardHeader>

      </Card>

      {/* Popup Dialog */}
      <Dialog open={isPopupOpen} onClose={closePopup} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <Dialog.Panel className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-6 md:p-8 relative">
          <button className="absolute top-4 right-4 text-2xl font-bold" onClick={closePopup}>
            &times;
          </button>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4">


              <Image
                src={popupImageUrl}
                alt="Popup Image"
                className="max-w-full max-h-full"
                style={{ objectFit: 'contain' }}
              />

            </div>


            <div className="w-full md:w-1/2 p-4 flex flex-col">

              <h2 className="text-xl font-bold mb-2">Brown Summer Coat</h2>
              <label className="text-main-dark mb-4">Code: 310724 - 02</label>
              <label className="text-2xl text-main-dark mb-4">$70000</label>
              <label className="text-xs text-red-700 font-semibold mb-4">5% summer sale discount</label>

              
              <div className="mb-4">
                <label className="font-semibold mb-2">Color</label>
                <div className="flex">
                  {['#000000', '#FFFFFF', '#FF0000'].map((color, index) => (
                    <div
                    key={index}
                    className={`w-12 h-12 rounded mr-2 cursor-pointer border-3 ${selectedColor === color ? 'border-black shadow-lg' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />

                  )
                  )
                  }

                </div>

              </div>


              
              <div className="mb-4">
                <p className="font-semibold mb-2">Size</p>
                <div className="flex">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                    <button
                      key={index}
                      className={`px-2 py-1 mr-2 rounded ${selectedSize === size ? 'bg-main-dark text-white' : 'bg-gray-200'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                      
                    </button>
                  )
                  )
                  }

                </div>

              </div>


              <button className="bg-main-dark text-white py-2 px-4 rounded mb-4" onClick={() => window.location.href = '/cart/cartcheckout'}>
                Add to Cart
              </button>

              <button className="bg-main-dark text-white py-2 px-4 rounded mb-4" onClick={() => window.location.href = '/FitOn'}>
                Add to FitOn
              </button>


              <hr className="my-4" />
              <div className="mb-4">
                <p className="font-semibold">Product Details</p>
                <p className="text-gray-600">Material: Polyester Material Composition: 92% Polyester, 8% Spandex Model Height 5' 8", wearing size UK 10 (Size Guide) Please bear in mind that...</p>
              </div>
              
              <button className="self-end bg-main-dark text-white py-2 px-4 rounded" onClick={() => window.location.href = '/landing'}>
                View More
              </button>

            </div>

          </div>

        </Dialog.Panel>

      </Dialog>

    </>

  );

};




export default Product;




