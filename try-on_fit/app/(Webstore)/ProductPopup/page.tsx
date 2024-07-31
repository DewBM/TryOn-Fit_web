// "use client";

// import { useState } from 'react';
// import PitemPopup from '../../components/PitemPopup';

// const mockItem = {
//   ClickImageUrl: 'images/pic.png',
//   popupImageUrl: '/images/pic.png', 
//   name: 'Women Summer Coat',
//   code: '310724 - 02',
//   price: '4,500.00',
//   discount: '5% summer sale discount',
//   colors: ['#000000', '#FFFFFF', '#FF0000'],
//   description: 'Material: Polyester Material Composition: 92% Polyester, 8% Spandex Model Height 5\' 8", wearing size UK 10 (Size Guide) Please bear in mind that...',
// };

// export default function ProductPage() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [popupImageUrl, setPopupImageUrl] = useState('');

//   const handleImageClick = () => {
//     setPopupImageUrl(mockItem.popupImageUrl);
//     setIsPopupOpen(true);
//   };

//   return (
//     <>
//       <div className="bg-slate-50 p-4 sm:p-6 md:p-8">
//         <div className="flex flex-col items-center">
//           <img
//             src={mockItem.ClickImageUrl} // Image shown on the landing page
//             alt="Product"
//             className="cursor-pointer mb-4"
//             onClick={handleImageClick}
//           />
//         </div>

//         <PitemPopup
//           isOpen={isPopupOpen}
//           onClose={() => setIsPopupOpen(false)}
//           item={{ ...mockItem, imageUrl: popupImageUrl }} // Pass popup image to the popup
//         />
//       </div>
//     </>
//   );
// }


"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const mockItem = {
  ClickImageUrl: '/images/pic.png',
  popupImageUrl: '/images/pic.png',
  name: 'Women Summer Coat',
  code: '310724 - 02',
  price: '4,500.00',
  discount: '5% summer sale discount',
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  description: 'Material: Polyester Material Composition: 92% Polyester, 8% Spandex Model Height 5\' 8", wearing size UK 10 (Size Guide) Please bear in mind that...',
};

export default function ProductPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(mockItem.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="bg-slate-50 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center">
          <img
            src={mockItem.ClickImageUrl} // screen eka click karala popup eka open karanna
            alt="Product"
            className="cursor-pointer mb-4"
            onClick={handleImageClick}
          />
        </div>

        <Dialog open={isPopupOpen} onClose={closePopup} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Dialog.Panel className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-6 md:p-8 relative">
            <button className="absolute top-4 right-4 text-2xl font-bold" onClick={closePopup}>
              &times;

            </button>

            <div className="flex flex-col md:flex-row">

              <div className="w-full md:w-1/2 flex justify-center items-center p-4">

                <img src={mockItem.popupImageUrl} alt="Popup Image" className="max-w-full max-h-full" />

              </div>


              <div className="w-full md:w-1/2 p-4 flex flex-col">

                <h2 className="text-xl font-bold mb-2">{mockItem.name}</h2>
                <label className="text-main-dark mb-4">Code: {mockItem.code}</label>
                <label className="text-2xl text-main-dark mb-4">{mockItem.price}</label>
                <label className="text-xs text-red-700 font-semibold mb-4">{mockItem.discount}</label>

                <div className="mb-4">
                  <label className="font-semibold mb-2">Color</label>
                  <div className="flex">
                    {mockItem.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 rounded mr-2 cursor-pointer border-3 ${selectedColor === color ? 'border-black shadow-lg' : 'border-gray-300'}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      >
                      </div>

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

                

                <button
                  className="bg-main-dark text-white py-2 px-4 rounded mb-4"
                  onClick={() => window.location.href = '/cart/cartcheckout'}>
                  Add to cart
                </button>

                <button
                  className="bg-main-dark text-white py-2 px-4 rounded mb-4"
                  onClick={() => window.location.href = '/FitOn'}>
                  Add to fitOn
                </button>


                {/* <button className="bg-main-dark text-white py-2 px-4 rounded mb-4">Add to Cart</button>
                <button className="bg-main-dark text-white py-2 px-4 rounded mb-4">Add to Fiton</button> */}

                <hr className="my-4" />

                <div className="mb-4">
                  <p className="font-semibold">Product Details</p>
                  <p className="text-gray-600">{mockItem.description}</p>
                </div>


                <button
                  className="self-end bg-main-dark text-white py-2 px-4 rounded"
                  onClick={() => window.location.href = '/landing'}
                >
                  View More
                </button>

              </div>

            </div>

          </Dialog.Panel>

        </Dialog>

      </div>

    </>

  );





}






















































































































































































































































































































































