
"use client"; 

import React from "react";
import Button from "./Button";

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function AddAddressModal({ isOpen, onClose }: AddAddressModalProps) {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-saddlebrown bg-opacity-50 backdrop-blur">
      
    <div className="bg-white rounded-lg p-6 w-[50%]">

      <h2 className="text-xl font-bold mb-4">Add new Shipping Address</h2>


      <form>
        
        {/* <div className="mb-4 flex space-x-4"> */}

          {/* <div className="w-1/2">
            <label className="block text-saddlebrown">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div className="w-1/2">
            <label className="block text-saddlebrown">Contact Number</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

        </div> */}
        


        <div className = "text-start text-lg font-bold mb-4 text-black">Address Line_1</div>
        <div className="mb-4 flex space-x-4">

          <div className="w-1/2">
          <label className="block text-saddlebrown"></label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">Address Line_2</label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">City</label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">District </label>
          <input type="text" className="w-full p-2 border rounded" />


          <label className="block text-saddlebrown">Postal Code </label>
          <input type="text" className="w-full p-2 border rounded" />

          </div>
        </div>


        <div className="flex justify-end">

          <button type="button" className="bg-white font-bold text-saddlebrown border-1 m-5 p-2 rounded-lg border-saddlebrown" onClick={onClose}>Cancel</button>

          <Button>&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;</Button>

        </div>

      </form>

    </div>

  </div>

  );








}
