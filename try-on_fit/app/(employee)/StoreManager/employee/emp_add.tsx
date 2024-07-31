"use client";
import React, { useEffect, useRef } from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";
import { useFormState } from "react-dom";
import {createEmployee} from "../actions";


const EmpAddForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
      <div className="lg:col-span-6 lg:col-start-4 rounded  bg-slate-50 shadow-xl rounded-r-lg  pt-6 pb-8 mt-10 mb-10 ">
        <form className="lg:col-span-5 sm:col-span-4">
          <div className="grid grid-cols-11">
            <div className=" lg:col-span-7 lg:col-start-2 sm:col-span-4 mt-2 text-2xl font-extrabold mb-4 ">
              <h1>Employee Registration</h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName="First Name"
                name="firstName"
                inputType="text"
                key="EmpAdd-Fname"
                defaultValue=""
                placeholder="Enter First Name"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName="Last Name"
                name="lastName"
                inputType="text"
                key="EmpAdd-Lname"
                defaultValue=""
                placeholder="Enter Last Name"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <TextBox
                labelName="Email"
                name="email"
                inputType="email"
                key="EmpAdd-email"
                defaultValue=""
                placeholder="Enter Email"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
              <TextBox
                labelName="Phone"
                name="phone"
                inputType="tel"
                key="EmpAdd-phone"
                defaultValue=""
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
              <SelectBox
                labelName="Employee Roll"
                id="signup-gender"
                name="gender"
                options={[
                  { value: "", label: "" },
                  { value: "CusSupport", label: "Customer support" },
                  {
                    value: "DisCoordinator",
                    label: "Distribution coordinator",
                  },
                  { value: "Stockkeepr", label: "Stock keepr" },
                ]}
                autoComplete="gender"
                value={selectedValue}
                onChange={(newValue) => setSelectedValue(newValue)}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 sm:col-span-1 mt-3">
              <fieldset>
                <legend className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </legend>
                {/* Add a legend element for the label */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                  }}
                >
                  <RadioButton label="Male" value="male" name="gender" />
                  <RadioButton label="Female" value="female" name="gender" />
                  <RadioButton label="Other" value="other" name="gender" />
                </div>
              </fieldset>
            </div>
            <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3">
              <TextBox
                labelName="Street Address"
                name="streetAddress"
                inputType="text"
                key="EmpAdd-address1"
                defaultValue=""
                placeholder="Enter Street Address"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-2 sm:col-span-2 mt-3">
              <TextBox
                labelName="City"
                name="city"
                inputType="text"
                key="EmpAdd-city"
                defaultValue=""
                placeholder="Enter City"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
              <TextBox
                labelName="State/Province"
                name="stateProvince"
                inputType="text"
                key="EmpAdd-stateProvince"
                defaultValue=""
                placeholder="Enter State/Province"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-3 sm:col-span-4 mt-3">
              <Button
                type="submit"
                className=" py-1.5 b px-28 ml-10"
                // onClick={handleCloseModal}
              >
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
