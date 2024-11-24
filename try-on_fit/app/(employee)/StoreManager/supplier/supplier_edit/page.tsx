"use client";
import React, { useEffect, useRef, useState } from "react";
import SupAddForm from "../../supplier_add/page";
import { SupplierType } from "../page";


const EditSup =({
    isEditSupOpen,
    onCloseEditSup,
  supplierData,
}: {
    isEditSupOpen: boolean;
    onCloseEditSup: () => void;
  supplierData ?: SupplierType;
}) => {
  console.log("CreateForm");
  return (
   <SupAddForm
    isOpen={isEditSupOpen}
    onClose={onCloseEditSup}
    defaultValues={supplierData}
    buttonLabel="Edit Supplier"
   ></SupAddForm>
  );
};

export default EditSup ;
