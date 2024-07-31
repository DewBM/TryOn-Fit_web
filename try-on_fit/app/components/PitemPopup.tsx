// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// type ItemType = {
//   imageUrl: string;
//   name: string;
//   code: string;
//   price: string;
//   discount: string;
//   colors: string[];
//   description: string;
// };

// const PitemPopup = ({ isOpen, onClose, item }: { isOpen: boolean, onClose: () => void, item: ItemType }) => {
//   const [selectedColor, setSelectedColor] = useState(item.colors[0]);
//   const [selectedSize, setSelectedSize] = useState('');

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-6 md:p-8 relative">
//         <button className="absolute top-4 right-4 text-2xl font-bold" onClick={onClose}>
//           &times;
//         </button>
//         <div className="flex flex-col md:flex-row">
//           <div className="w-full md:w-1/2 flex justify-center items-center p-4">
//             <img src={item.imageUrl} alt="Image not Loading" className="max-w-full max-h-full" />
//           </div>
//           <div className="w-full md:w-1/2 p-4 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">{item.name}</h2>
//             <p className="text-main-dark mb-4">Code: {item.code}</p>
//             <p className="text-2xl text-main-dark mb-4">{item.price}</p>
//             <p className="text-xs text-red-700 font-semibold mb-4">{item.discount}</p>
//             <div className="mb-4">
//               <p className="font-semibold mb-2">Color</p>
//               <div className="flex">
//                 {item.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className={`w-8 h-8 rounded-full mr-2 cursor-pointer border-1 ${selectedColor === color ?  'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: color }}
//                     onClick={() => setSelectedColor(color)}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="font-semibold mb-2">Size</p>
//               <div className="flex">
//                 {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
//                   <button
//                     key={index}
//                     className={`px-2 py-1 mr-2 rounded ${selectedSize === size ? 'bg-main-dark text-white' : 'bg-gray-200'}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <button className="bg-main-dark text-white py-2 px-4 rounded mb-4">Add to Cart</button>
//             <button className="bg-main-dark text-white py-2 px-4 rounded mb-4">Add to Fiton</button>
//             <hr className="my-4" />
//             <div className="mb-4">
//               <p className="font-semibold">Product Details</p>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//             <button
//               className="self-end bg-main-dark text-white py-2 px-4 rounded"
//               onClick={() => window.location.href = '/productspage'}
//             >
//               View More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// PitemPopup.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   item: PropTypes.shape({
//     imageUrl: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     code: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     colors: PropTypes.arrayOf(PropTypes.string).isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default PitemPopup;


















































































































