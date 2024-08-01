"use client";
import React, { useEffect, useRef } from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";
import { useFormState } from "react-dom";
import { createEmployee } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {EmployeeRegistrationSchema} from "../stockManagerSchema";

const EmpAddForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [lastResult, action] = useFormState(createEmployee, undefined);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: EmployeeRegistrationSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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

  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <dialog
      ref={dialogRef}
      id="dialog"
      open={isOpen}
      className="z-50 bg-white shadow-md"
    >
      <div className="lg:col-span-6 lg:col-start-4 rounded bg-slate-50 shadow-xl rounded-r-lg pt-6 pb-8 mt-10 mb-10">
        <form 
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
          noValidate
          className="lg:col-span-5 sm:col-span-4"
        >
          <div className="grid grid-cols-11">
            <div className="lg:col-span-7 lg:col-start-2 sm:col-span-4 mt-2 text-2xl font-extrabold mb-4">
              <h1>Employee Registration</h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName="First Name"
                name={fields.firstName.name}
                inputType="text"
                key={fields.firstName.key as React.Key}
                defaultValue={fields.firstName.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter First Name"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName="Last Name"
                name={fields.lastName.name}
                inputType="text"
                key={fields.lastName.key as React.Key}
                defaultValue={fields.lastName.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName="Email"
                name={fields.email.name}
                inputType="email"
                key={fields.email.key as React.Key}
                defaultValue={fields.email.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Email"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName="Phone"
                name={fields.phone.name}
                inputType="tel"
                key={fields.phone.key as React.Key}
                defaultValue={fields.phone.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
            <SelectBox
  labelName="Employee Role"
  id="signup-role"
  name={fields.employeeRole.name} // Ensure the name matches the schema
  options={[
    { value: "", label: "Select Role" },
    { value: "CusSupport", label: "Customer Support" },
    { value: "DisCoordinator", label: "Distribution Coordinator" },
    { value: "Stockkeeper", label: "Stockkeeper" },
  ]}
  autoComplete="role"
  value={selectedValue}
  onChange={(newValue) => setSelectedValue(newValue)}
/>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 sm:col-span-1 mt-3">
              <fieldset>
                <legend className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </legend>
                <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}>
                  <RadioButton label="Male" value="male" name={fields.gender.name} />
                  <RadioButton label="Female" value="female" name={fields.gender.name} />
                  <RadioButton label="Other" value="other" name={fields.gender.name} />
                </div>
              </fieldset>
            </div>
            <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3">
              <TextBox
                labelName="Street Address"
                name={fields.streetAddress.name}
                inputType="text"
                key={fields.streetAddress.key as React.Key}
                defaultValue={fields.streetAddress.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Street Address"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-2 mt-3">
              <TextBox
                labelName="City"
                name={fields.city.name}
                inputType="text"
                key={fields.city.key as React.Key}
                defaultValue={fields.city.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter City"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
              <TextBox
                labelName="State/Province"
                name={fields.stateProvince.name}
                inputType="text"
                key={fields.stateProvince.key as React.Key}
                defaultValue={fields.stateProvince.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter State/Province"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-3 sm:col-span-4 mt-3">
              <Button type="submit" className="py-1.5 px-28 ml-10">
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EmpAddForm;
