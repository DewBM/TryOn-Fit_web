"use client";
import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import { useFormState } from "react-dom";
import { LoginSchema } from "@/app/utils/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React, { useState } from "react";
import Form from "@/app/components/Form";
import TextB_Dsble from "@/app/components/TextB_Dsble";
import Checkbox from "@/app/components/checkbox";
import { PlusIcon } from "@/app/components/PlusIcon";
import TextBoxB from "@/app/components/TextBox_B";

export default function page() {
  const [isChecked, setIsChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleAddNewClick = () => {
    setShowForm(true); // toggle form visibility when "Add New+" is clicked
  };

  const sizeOptions = [
    { label: "XS", name: "xs", value: "XS" },
    { label: "S", name: "s", value: "Small" },
    { label: "M", name: "m", value: "Medium" },
    { label: "L", name: "l", value: "Large" },
    { label: "XL", name: "xl", value: "XL" },
    { label: "XXL", name: "xxl", value: "XXL" },
    { label: "XXXL", name: "xxxl", value: "XXXL" },
    { label: " 32", name: "numeric_32", value: "32" },
    { label: " 34", name: "numeric_34", value: "34" },
    { label: " 36", name: "numeric_36", value: "36" },
    { label: " 38", name: "numeric_38", value: "38" },
    { label: " 40", name: "numeric_40", value: "40" },
  ] as const;

  const measurementOptions = [
    { label: "Basic", name: "basic", value: "Basic" },
    { label: "Hip", name: "hip", value: "Hip" },
    { label: "Waist", name: "waist", value: "Waist" },
    { label: "Chest", name: "chest", value: "Chest" },
    { label: "Shoulder", name: "shoulder", value: "Shoulder" },
    { label: "Sleeve Length", name: "sleeve_length", value: "Sleeve Length" },
    { label: "Inseam", name: "inseam", value: "Inseam" },
    { label: "Outseam", name: "outseam", value: "Outseam" },
    { label: "Bust", name: "bust", value: "Bust" },
    { label: "Length", name: "length", value: "Length" },
  ] as const;

  type SizeName = (typeof sizeOptions)[number]["name"];
  type MeasurementName = (typeof measurementOptions)[number]["name"];

  const [sizes, setSizes] = React.useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
    numeric_32: false,
    numeric_34: false,
    numeric_36: false,
    numeric_38: false,
    numeric_40: false,
  });

  const [measurements, setMeasurements] = React.useState({
    basic: false,
    hip: false,
    waist: false,
    chest: false,
    shoulder: false,
    sleeve_length: false,
    inseam: false,
    outseam: false,
    bust: false,
    length: false,
  });

  const handleSizeChange = (name: SizeName, checked: boolean) => {
    setSizes({ ...sizes, [name]: checked });
  };

  const handleMeasurementChange = (name: MeasurementName, checked: boolean) => {
    setMeasurements({ ...measurements, [name]: checked });
  };

  return (
    <div className="grid  lg:grid-cols-12 w-auto">
      <div className="lg:col-span-12 lg:col-start-1">
        <div className="grid bg-main lg:grid-cols-12 mt-4  mb-0 sm:grid-cols-6 rounded ml-8 px-2">
          <div className="lg:col-span-12 lg:col-start-1  text-black font-bold text-2xl mt-3 px-3">
            Add New Category
          </div>
          {/* <hr className="h-px bg-black border-0 dark:bg-gray-700 lg:col-span-10 ml-3"></hr> */}
          <div className="lg:col-span-4 lg:col-start-1 my-4 pl-3">
            <p className="font-medium text-medium mb-9">Select the Sizes</p>
            <div className="rounded-md bg-main  overflow-auto h-80 w-2/3 pl-3 py-2 font-style border border-slate-200 ">
              {sizeOptions.map((option) => (
                <Checkbox
                  key={option.name}
                  label={option.label}
                  checked={sizes[option.name]}
                  onChange={(e) =>
                    handleSizeChange(option.name, e.target.checked)
                  }
                  id={`size-${option.name}`}
                  name={option.name}
                  value={option.value}
                />
              ))}
            </div>
          </div>
          <div className=" lg:col-span-8 lg:col-start-5 my-4 w-2/3">
            <div className="grid lg:grid-cols-12">
              <p className="font-medium text-medium  lg:col-span-5 lg:col-start-1">
                Select Measurement
              </p>

              <Button
                onClick={handleAddNewClick}
                className="bg-main-dark text-white mb-5 ml-2 w-14 lg:col-span-3 lg:col-start-6 pr-0 pl-0 mt-1 text-sm"
              >
                New +
              </Button>
              <div className="lg:col-span-6 rounded-md border border-slate-200  bg-main py-2 pl-3 overflow-auto h-80 mr-4 ">
                {measurementOptions.map((option) => (
                  <Checkbox
                    key={option.name}
                    label={option.label}
                    checked={measurements[option.name]}
                    onChange={(e) =>
                      handleMeasurementChange(option.name, e.target.checked)
                    }
                    id={`measurement-${option.name}`}
                    name={option.name}
                    value={option.value}
                  />
                ))}
              </div>
              <div className="lg:col-span-6 h-72 ">
                {showForm && ( // conditionally render form and measurement card
                  <div className="w-full lg:col-start-8 border border-slate-200 rounded-md bg-main ">
                    <div className="grid lg:grid-cols-6">
                      <div className="lg:col-span-4 lg:col-start-1  text-black font-sembold text-medium mt-4 ml-4 px-3">
                        <p>Add Here</p>
                      </div>
                      <div className="lg:col-start-6 lg:col-span-1 mt-1">
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="lg:col-start-1 lg:col-span-6 mt-1">
                        <hr className="h-px bg-slate-400 mx-5 mb-5"></hr>
                      </div>
                      <div className="lg:col-span-6 lg:col-start-1 px-6 ">
                        <TextBoxB
                          labelName="Name"
                          name="name"
                          key="name"
                          inputType="text"
                          defaultValue=""
                          placeholder=""
                          height="h-9"
                        />
                      </div>
                      <div className="lg:col-span-6 lg:col-start-1 px-6 mt-3 mb-4">
                        <TextBoxB
                          labelName="Description"
                          name="description"
                          key="description"
                          inputType="text"
                          defaultValue=""
                          placeholder=""
                          height="h-16"
                        />
                      </div>
                      <Button
                        className="bg-main-dark text-white mb-5 ml-7 w-20 lg:col-span-3 pl-1 pr-1 mt-1 text-sm lg:col-start-1"
                        onClick={() => setShowForm(false)}
                      >
                        Collect
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
