"use client";
import SupplierCard from "@/app/components/SupplierCard";
import SupplierContactDetailsSection from "@/app/components/SupplierContactDetailsSection";
import SupplierpersonalDetailsSection from "@/app/components/SupplierpersonaldetailsSection";
import SupplierCategories from "@/app/components/SupplierCategories";
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { SupplierType } from "../page";



// const SupplierPage = () => {
  // const router = useRouter();
  // const { search } = router.query;
  // console.log(search);
  const ViewSup = ({
    isOpen,
    onClose,
    supplierData,
  }: {
    isOpen: boolean;
    onClose: () => void;
    supplierData ?:  SupplierType;
  }) => {
    // const [lastResult, action] = useFormState(createEmployee, undefined);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    console.log(supplierData)

    useEffect(() => {
      const handleClickOutside = (event: { target: any }) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target)) {
          onClose();
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.body.classList.add("h-screen", "overflow-hidden");
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove("h-screen", "overflow-hidden");
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove("h-screen", "overflow-hidden");
      };
    }, [isOpen, onClose]);
  
  const supplierInfo = {
    photo: "/images/emp-1.jpg",
    name: "Kevin Andersan",
    role: "Stock Keeper",
    cardDetails: [
      { label: "Supplier ID", value: supplierData?.supplier_id || "N/A" },
      { label: "Registered date", value: "10/05/2019" },
      { label: "Stock Keeper", value: "Kevin Andersan" },
    ],
    personalData: [
      { label: "Full name", value: "Kusal Mendis" },
      { label: "Birthdate", value: "22/04/1994" },
      { label: "Gender", value: "Male" },
      { label: "City", value: "Colombo" },
    ],
    contactData: [
      { label: "E-mail", value: "menda123@gmail.com" },
      { label: "Telephone No", value: "070 12345678" },
      { label: "Address", value: "Nugegoda, Colombo" },
    ],
    categories: {
      All: [
        "T-Shirt",
        "Laptop",
        "Smartphone",
        "Shirt",
        "Pants",
        "Jacket",
        "Milk",
        "Bread",
        "Cheese",
      ],
      Mens: ["T-Shirt", "Laptop", "Smartphone"],
      Womens: ["Shirt", "Pants", "Jacket"],
      Kids: ["Milk", "Bread", "Cheese"],
    },
  };

  return (
    // <dialog
    //   ref={dialogRef}
    //   id="dialog"
    //   open={isOpen}
    //   className="z-50 bg-white shadow-md"
    // >
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <DialogPanel className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-6 md:p-8 relative">
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-semibold mb-5">Employee details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SupplierCard
          name={supplierInfo.name}
          title={supplierInfo.role}
          details={supplierInfo.cardDetails}
        />
        <div className="col-span-2 flex flex-col space-y-4">
          <div className="bg-white p-4 rounded shadow border">
            <SupplierpersonalDetailsSection
              title="Personal data"
              details={supplierInfo.personalData}
            />
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <SupplierContactDetailsSection
              title="Contact"
              details={supplierInfo.contactData}
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow border mt-4">
        <SupplierCategories categories={supplierInfo.categories} />
      </div>
    </div>
    </DialogPanel>
    </Dialog>
  );
};

export default ViewSup;
