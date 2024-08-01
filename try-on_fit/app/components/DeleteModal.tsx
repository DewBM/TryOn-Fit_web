"use client";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 border border-red-500">
            <FaExclamationTriangle className="text-red-500" />
          </div>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Are you sure?
          </h3>
        </div>
        <div className="my-2 mx-10">
          <p className="text-sm text-gray-500 text-center">
            This action cannot be undone. All values associated with this field
            will be lost.
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={onClose}
            className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Delete field
          </button>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={onClose}
            className="mt-3 px-12 inline-flex justify-center rounded-md border border-red-500 shadow-sm  py-2 bg-white text-base font-medium text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
