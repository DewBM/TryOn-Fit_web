"use client";
import SupplierCard from "@/app/components/SupplierCard";
import SupplierContactDetailsSection from "@/app/components/SupplierContactDetailsSection";
import SupplierpersonalDetailsSection from "@/app/components/SupplierpersonaldetailsSection";
import SupplierCategories from "@/app/components/SupplierCategories";
import { useEffect, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { SupplierType } from "../page";
import { Chip, ChipProps } from "@nextui-org/react";

const ViewSup = ({
  isOpen,
  onClose,
  supplierData,
}: {
  isOpen: boolean;
  onClose: () => void;
  supplierData?: SupplierType;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
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
      { label: "Registered date", value: supplierData?.register_date || "N/A" },
      { label: "Stock Keeper", value: "Kevin Andersan" },
    ],
    personalData: [
      { label: "Full name", value: supplierData?.supplier_name.toString() || "N/A" },
      { label: "Supplier Id", value: supplierData?.supplier_id.toString() || "N/A" },
      { label: "Brand Name", value: supplierData?.brand_name.toString() || "N/A" },
      { label: "Register Date", value: supplierData?.register_date.toString() || "N/A" },
    ],
    contactData: [
      { label: "Address", value: supplierData?.address || "N/A" },
      { label: "Telephone No", value: supplierData?.contact_no || "N/A" },
      { label: "E-mail", value: supplierData?.email || "N/A" },
      
      
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

  const statusColorMap: Record<string, ChipProps["color"]> = {
    available: "success",
    unavailable: "danger",
  };

  const statusColor = statusColorMap[supplierData?.status || ""] || "default";

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <DialogPanel ref={dialogRef} className="bg-white rounded-lg overflow-hidden w-full max-w-2xl max-h-[80vh] p-4 md:p-6 relative">
        <div className="container mx-auto p-4">
          <h1 className="text-lg font-semibold mb-5" style={{ display: 'flex', alignItems: 'center' }}>
            Supplier details
            <span style={{ marginLeft: '10px', fontSize: '70%' }}>{supplierData?.status}</span>
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColor}
              size="md"
              variant="dot"
            />
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-3 flex flex-col space-y-4 w-full"> 
            <div className="bg-white p-4 rounded shadow border">
                <SupplierpersonalDetailsSection
                  title="Supplier data"
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
          {/* Uncomment and use if needed */}
          {/* <div className="bg-white p-4 rounded shadow border mt-4">
            <SupplierCategories categories={supplierInfo.categories} />
          </div> */}
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ViewSup;
