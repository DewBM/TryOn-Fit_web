"use client";
import React, { useEffect, useRef, useState } from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";
import { EmployeeRegistrationSchema, supplierRegistrationSchema } from "../stockManagerSchema";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { creatSupplier } from "../actions";
import { SupplierType } from "../supplier/page";

// const Dialog = () => {
const SupAddForm = ({
  isOpen,
  onClose,
  buttonLabel,
  defaultValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  buttonLabel: String;
  defaultValues?: SupplierType;
}) => {
  const [lastResult, action] = useFormState(creatSupplier, undefined);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [form, fields] = useForm({
    lastResult,
  // const [isOpen, setIsOpen] = useState(false);
  // const [lastResult, action] = useFormState(creatSupplier, undefined);
  // const [form, fields] = useForm({
  //   lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: supplierRegistrationSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
// const handleShowModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };
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

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <dialog
      ref={dialogRef}
      id="dialog"
      open={isOpen}
      className="z-50 bg-white shadow-md"
    >
      <div className="lg:col-span-6 lg:col-start-4 rounded bg-slate-50 shadow-xl rounded-r-lg pt-2 pb-8 mt-0 mb-10">
        <form
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
          noValidate
          className="lg:col-span-5 sm:col-span-4"
        >
          <div className="grid grid-cols-11">
            <div className="lg:col-span-7 lg:col-start-2 sm:col-span-4 mt-1 text-2xl font-extrabold mb-4">
              <h1>Supplier Information</h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName={"Supplier ID"}
                name={fields.supid.name}
                key={fields.supid.key as React.Key}
                defaultValue={defaultValues?.supplier_id as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.supid.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName={"Brand Name"}
                name={fields.brandName.name}
                key={fields.brandName.key as React.Key}
                defaultValue={defaultValues?.brand_name as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.brandName.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName={"First Name"}
                name={fields.firstName.name}
                key={fields.firstName.key as React.Key}
                defaultValue={defaultValues?.first_name as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.firstName.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName={"Last Name"}
                name={fields.lastName.name}
                key={fields.lastName.key as React.Key}
                defaultValue={defaultValues?.last_name as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.lastName.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName={"Email"}
                name={fields.email.name}
                key={fields.email.key as React.Key}
                defaultValue={defaultValues?.email as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.email.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName={"Phone"}
                name={fields.phone.name}
                key={fields.phone.key as React.Key}
                defaultValue={defaultValues?.contact_no as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.phone.errors}</div>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 sm:col-span-1 mt-3">
              <fieldset>
                <legend className="block text-sm font-medium leading-6 text-gray-900">
                  Availability
                </legend>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                  }}
                >
                  <RadioButton label="Available" value="available" name={fields.availability.name} />
                  <RadioButton label="Unavailable" value="unavailable" name={fields.availability.name} />
                </div>
              </fieldset>
            </div>
            <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3">
              <TextBox
                labelName={"Street Address"}
                name={fields.streetAddress.name}
                key={fields.streetAddress.key as React.Key}
                defaultValue={fields.streetAddress.initialValue as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.streetAddress.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-2 mt-3">
              <TextBox
                labelName={"City"}
                name={fields.city.name}
                key={fields.city.key as React.Key}
                defaultValue={fields.city.initialValue as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.city.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
              <TextBox
                labelName={"Province"}
                name={fields.stateProvince.name}
                key={fields.stateProvince.key as React.Key}
                defaultValue={fields.stateProvince.initialValue as React.HTMLInputTypeAttribute}
                inputType="text"
              />
              <div className="text-xs text-red-400">{fields.stateProvince.errors}</div>
            </div>
            <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3 flex justify-between">
              <Button
                type="submit"
                className="py-1.5 px-28 ml-10"
              >
                {buttonLabel}
              </Button>
              <Button
                type="button"
                className="py-1.5 px-28 border-1 "
                onClick={onClose}
                style={{
                  backgroundColor: "#ffffff", 
                  color: "#4d2d18", 
                  borderColor: "#4d2d18", 
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default SupAddForm;
