"use client";
import React, { useEffect, useRef, useState } from "react";
import SupAddForm from "../../supplier_add/page";

// const Dialog = () => {
const CreateSup =({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  console.log("CreateForm");
  return (
   <SupAddForm
    isOpen={isOpen}
    onClose={onClose}
    buttonLabel="Register"
   ></SupAddForm>
  );
};

export default CreateSup ;
