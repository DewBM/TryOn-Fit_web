"use client";
import React from "react";
import SupAddForm from "../../supplier_add/page";
import { SupplierType } from "../page";
import Button from "@/app/components/Button";

const EditSup = ({
  isEditSupOpen,
  onCloseEditSup,
  supplierData,
}: {
  isEditSupOpen: boolean;
  onCloseEditSup: () => void;
  supplierData?: SupplierType;
}) => {
  console.log("CreateForm");
  return (
    <SupAddForm
      isOpen={isEditSupOpen}
      onClose={onCloseEditSup} 
      defaultValues={supplierData}
      buttonLabel="Save"
      
    />
    
  );
};

export default EditSup;
