// // AddNewModal.tsx
"use client";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import TextBoxB from "./TextBox_B";

interface AddNewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCollect: (newOptionValue: string) => void;
}

const AddNewModal: React.FC<AddNewModalProps> = ({
  isOpen,
  onClose,
  onCollect,
}) => {
  if (!isOpen) return null;

  const handleCollect = () => {
    const newOptionValue =
      document.querySelector<HTMLInputElement>("#newvalue")?.value;
    if (newOptionValue) {
      onCollect(newOptionValue);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        style={{ maxWidth: 350 }}
      >
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
          <h3 className="text-lg mt-4 leading-6 font-medium text-gray-900">
            Add New Option
          </h3>
        </div>
        <div className="my-2 mx-10 mt-6">
          <TextBoxB
            labelName=""
            name="newvalue"
            key="newvalue"
            inputType="text"
            defaultValue=""
            height="h-10s"
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={handleCollect}
            className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-blue-600 text-base font-normal text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Collect
          </button>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={onClose}
            className="mt-3 px-8 inline-flex justify-center rounded-md border border-red-500 shadow-sm  py-2 bg-white text-base font-normal text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewModal;