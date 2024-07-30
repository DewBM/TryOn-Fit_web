"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

interface EditAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAddress: {
    name: string;
    contactNumber: string;
    number: string;
    village: string;
    town: string;
    country: string;
  };
}


export default function EditAddressModal({ isOpen, onClose, currentAddress }: EditAddressModalProps) {
  const [formValues, setFormValues] = useState({
    name: '',
    contactNumber: '',
    number: '',
    village: '',
    town: '',
    country: ''
  });



  useEffect(() => {
    if (currentAddress) {
      setFormValues({
        ...formValues,
        ...currentAddress
      });
    }
  }, [currentAddress]);


  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-saddlebrown bg-opacity-50 backdrop-blur">
      <div className="bg-white rounded-lg p-6 w-200">
        <h2 className="text-xl font-bold mb-4">Edit Shipping Address</h2>


        <form>
          <div className="text-start text-lg font-bold mb-4 text-black">Contact Information</div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">

              <label className="block text-saddlebrown">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              />

            </div>

            <div className="w-1/2">
              <label className="block text-saddlebrown">Contact Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.contactNumber}
                onChange={(e) => setFormValues({ ...formValues, contactNumber: e.target.value })}
              />
            </div>

          </div>

          <div className="text-start text-lg font-bold mb-4 text-black">Address</div>
          <div className="mb-4 flex space-x-4">

            <div className="w-1/2">

              <label className="block text-saddlebrown">No:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.number}
                onChange={(e) => setFormValues({ ...formValues, number: e.target.value })}
              />


              <label className="block text-saddlebrown">Village</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.village}
                onChange={(e) => setFormValues({ ...formValues, village: e.target.value })}
              />


              <label className="block text-saddlebrown">Town</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.town}
                onChange={(e) => setFormValues({ ...formValues, town: e.target.value })}
              />


              <label className="block text-saddlebrown">Country</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formValues.country}
                onChange={(e) => setFormValues({ ...formValues, country: e.target.value })}
              />


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
