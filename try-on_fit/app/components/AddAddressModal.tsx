
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-saddlebrown bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-200">

      <h2 className="text-xl font-bold mb-4">Add new Shipping Address</h2>


      <form>
         
        <div className = "text-start text-lg font-bold mb-4 text-black">Contact Information</div>
        <div className="mb-4 flex space-x-4">

          <div className="w-1/2">
            <label className="block text-saddlebrown">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div className="w-1/2">
            <label className="block text-saddlebrown">Contact Number</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

        </div>
        


        <div className = "text-start text-lg font-bold mb-4 text-black">Address</div>
        <div className="mb-4 flex space-x-4">

          <div className="w-1/2">
          <label className="block text-saddlebrown">No:</label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">Village</label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">Town</label>
          <input type="text" className="w-full p-2 border rounded" />

          <label className="block text-saddlebrown">Country</label>
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
