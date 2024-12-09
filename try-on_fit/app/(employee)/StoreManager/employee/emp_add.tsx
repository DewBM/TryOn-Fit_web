import React, { useEffect, useRef, useState } from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";
import { useFormState } from "react-dom";
import { createEmployee } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { EmployeeRegistrationSchema } from "../stockManagerSchema";

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
      const result = parseWithZod(formData, { schema: EmployeeRegistrationSchema });
      console.log(result);
      return result;
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

  const [selectedValue, setSelectedValue] = useState("");

  
  return (
    <dialog
      ref={dialogRef}
      id="dialog"
      open={isOpen}
      className="z-50 bg-white shadow-md"
    >
      <div className="lg:col-span-6 lg:col-start-4 rounded bg-slate-50 shadow-xl rounded-r-lg pt-4 pb-8 mt-0 mb-1">
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
              <div className="text-xs text-red-400">{fields.firstName.errors}</div>
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
              <div className="text-xs text-red-400">{fields.lastName.errors}</div>
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
              <div className="text-xs text-red-400">{fields.email.errors}</div>
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
              <div className="text-xs text-red-400">{fields.phone.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <SelectBox
                labelName="Employee Role"
                // id="signup-role"
                key={fields.employeeRole.key as React.Key}
                name={fields.employeeRole.name} // Ensure the name matches the schema
                options={[
                  { value: "", label: "Select Role" },
                  { value: "CusSupport", label: "Customer Support" },
                  { value: "DisCoordinator", label: "Distribution Coordinator" },
                  { value: "Stockkeeper", label: "Stock Keeper" },
                ]}
                autoComplete="role"
                value={selectedValue}
                onChange={(newValue: React.SetStateAction<string>) => setSelectedValue(newValue)} // Add this line
                defaultValue={fields.gender.initialValue as React.HTMLInputTypeAttribute}
                />
              <div className="text-xs text-red-400">{fields.employeeRole.errors}</div>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 sm:col-span-1 mt-3">
              <fieldset>
                <legend className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </legend>
                <div  style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}>
                  <RadioButton label="Male" value="male" name={fields.gender.name} />
                  <RadioButton label="Female" value="female" name={fields.gender.name} />
                  {/* <RadioButton label="Other" value="other" name={fields.gender.name} /> */}
                </div>
              </fieldset>
              {/* <div className="text-xs text-red-400">{fields.username.errors}</div> */}
            </div>
            <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3">
              <TextBox
                labelName="Address"
                name={fields.streetAddress.name}
                inputType="text"
                key={fields.streetAddress.key as React.Key}
                defaultValue={fields.streetAddress.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Address"
              />
              <div className="text-xs text-red-400">{fields.streetAddress.errors}</div>
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
              <div className="text-xs text-red-400">{fields.city.errors}</div>
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
              <TextBox
                labelName="Province"
                name={fields.stateProvince.name}
                inputType="text"
                key={fields.stateProvince.key as React.Key}
                defaultValue={fields.stateProvince.initialValue as React.HTMLInputTypeAttribute}
                placeholder="Enter Province"
              />
              <div className="text-xs text-red-400">{fields.stateProvince.errors}</div>
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
