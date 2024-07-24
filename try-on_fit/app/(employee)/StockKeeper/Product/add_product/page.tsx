"use client";
import React from "react";
import TextBox from "@/app/components/TextBox";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import RadioButton from "@/app/components/RadioButton";
import ColorInput from "@/app/components/ColorInput";
import { useState } from "react";
import NumberBox from "@/app/components/NumberBox";

export default function AddProduct() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const [measurementSections, setMeasurementSections] = useState([1]);
  const [showSection, setShowSection] = useState(false);
  const [showColorSection, setShowColorSection] = useState(false);

  const [buttonClickme, setButtonClickme] = useState("primary");

  const handleAddMeasurement = () => {
    setMeasurementSections([
      ...measurementSections,
      measurementSections.length + 1,
    ]);
  };

  const handleButtonClickColor = () => {
    setShowColorSection(true);
  };

  const handleCloserClancleButtonClickColor = () => {
    setShowColorSection(false);
  };

  const handleCloserSubmitButtonClickColor = () => {
    setShowColorSection(false);
  };

  const handleButtonClick = () => {
    setShowSection(true);
  };

  const handleCloserClancleButtonClick = () => {
    setShowSection(false);
  };

  const handleCloserSubmitButtonClick = () => {
    setShowSection(false);
    setButtonClickme(buttonClickme === "primary" ? "secondary" : "primary");
  };

  return (
    <div className="grid  lg:grid-cols-12 sm: mb-0  rounded mx-8 ">
      <form
        action="{AddProduct}"
        className="bg-main lg:col-span-9 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 m-2"
        noValidate
      >
        <div className="grid grid-cols-12">
          <div className="bg-main col-span-3 lg:col-span-3 sm:col-span-2 mb-4 ">
            <TextBox
              labelName="Product ID"
              name="pid"
              key="pid"
              inputType="text"
              defaultValue=""
            />
          </div>
          <div className="bg-main col-span-3 lg:col-span-3 sm:col-span-2 lg:col-start-7 mb-4 ">
            <TextBox
              labelName="Supplier ID"
              name="sid"
              key="sid"
              inputType="text"
              defaultValue=""
            />
          </div>
          <div className="bg-main  lg:col-span-4 sm:col-span-2 mb-4  ">
            <TextBox
              labelName="Product Name"
              name="pName"
              key="pName"
              inputType="text"
              defaultValue=""
            />
          </div>
          <div className="bg-main  lg:col-span-4 sm:col-span-2 lg:col-start-7 mb-4 ">
            <SelectBox
              labelName="Category"
              id="Product-category"
              name="category"
              options={[
                { value: "", label: "" },
                { value: "T-Shirts", label: "T-Shirts" },
                { value: "Shirts", label: "Shirts" },
                { value: "other", label: "Other" },
              ]}
              autoComplete="category"
              value={"fields.category.value ??"}
            />
          </div>
          <div className="bg-main  lg:col-span-4 sm:col-span-2 mb-4  ">
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
          <div className="bg-main  lg:col-span-4 sm:col-span-2 lg:col-start-7 mb-4 ">
            <fieldset>
              <legend className="block text-sm font-medium leading-6 text-gray-900">
                Age
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
              </div>
            </fieldset>
          </div>
          <div className="bg-main  lg:col-span-4 sm:col-span-2 mb-4  ">
            <p className="mb-3">Upload an image (optional)</p>
            <div className="">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            {selectedImage && (
              <span className="text-teal-500	">
                Image uploaded successfully!
              </span>
            )}
          </div>
          <div className="bg-main  lg:col-span-8 sm:col-span-2 lg:col-start-1 mb-4 ">
            <Button
              type="button"
              className="py-1.5 ml-6  m-0"
              onClick={handleButtonClickColor}
            >
              + color
            </Button>
            {showColorSection && (
              <div className="bg-main lg:col-start-1 col-span-8 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 m-2 grid grid-cols-12">
                <div className="bg-main col-span-8 lg:col-span-4 sm:col-span-2 mb-4 ">
                  <p>enter color HEX code and check color here </p>
                </div>
                <div className="bg-main  lg:col-span-4 sm:col-span-2 lg:col-start-5 mb-4 ">
                  <ColorInput />
                </div>
                <div className="bg-main lg:col-span-10 sm:col-span-4 mb-4 row-span-2 ">
                  <TextBox
                    labelName="Design"
                    name="design"
                    key="design"
                    inputType="text"
                    defaultValue=""
                  />
                </div>
                <div className="bg-main lg:col-span-10 sm:col-span-4 mb-4 row-span-2 ">
                  <TextBox
                    labelName="Description"
                    name="description"
                    key="description"
                    inputType="text"
                    defaultValue=""
                  />
                </div>
                <div className="bg-main lg:col-span-12 sm:col-span-4 mb-4 row-span-2 ">
                  <Button
                    type="button"
                    className={`py-1 ml-4  m-0 ${
                      buttonClickme === "primary"
                        ? "bg-main-light"
                        : "bg-red-600"
                    }`}
                    onClick={handleButtonClick}
                  >
                    S
                  </Button>
                  {showSection && (
                    // <div>
                    <div className="bg-main-light lg:col-start-1 col-span-12 shadow-xl rounded-lg pt-3 pb-8 mb-1 m-2 grid grid-cols-12 pl-3">
                      <div className="bg-main lg:col-span-6 sm:col-span-4 mb-4 row-span-2 ">
                        <NumberBox
                          labelName="Add the quantity"
                          name="quantity"
                          key="quantity"
                          inputType="number"
                          defaultValue=""
                          className="min=1"
                        />
                      </div>
                      <div className="bg-main lg:col-span-6 sm:col-span-4 mb-4 row-span-2 lg:col-start-1">
                        <Button
                          type="button"
                          className="py-1 ml-4  m-0"
                          onClick={handleAddMeasurement}
                        >
                          + mersument
                        </Button>
                      </div>
                      {measurementSections.map((section, index) => (
                        <div
                          key={index}
                          className="bg-main-lighter lg:col-start-1 col-span-11 shadow-xl rounded-lg  pb-1 mb-1 m-2 grid grid-cols-12 pl-5"
                        >
                          <div className="bg-main lg:col-span-5 sm:col-span-4 mb-4 row-span-2 lg:col-start-1 m-0">
                            <TextBox
                              labelName="Measurement"
                              name="mesurement"
                              key="mesurement"
                              inputType="text"
                              defaultValue=""
                            />
                          </div>

                          <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
                            <TextBox
                              labelName="Min"
                              name="min"
                              key="min"
                              inputType="text"
                              defaultValue=""
                            />
                          </div>
                          <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
                            <TextBox
                              labelName="Max"
                              name="max"
                              key="max"
                              inputType="text"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      ))}
                      <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-5">
                        <Button
                          type="submit"
                          className="py-1.5 ml-6 px-4  m-0"
                          onClick={handleCloserSubmitButtonClick}
                        >
                          submit
                        </Button>
                      </div>
                      <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
                        <Button
                          type="submit"
                          className="py-1.5 ml-6 px-4  m-0"
                          onClick={handleCloserClancleButtonClick}
                        >
                          cancle
                        </Button>
                      </div>
                    </div>
                    // </div>
                  )}
                </div>
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-5">
                  <Button
                    type="submit"
                    className="py-1.5 ml-6 px-4  m-0"
                    onClick={handleCloserSubmitButtonClickColor}
                  >
                    submit
                  </Button>
                </div>
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
                  <Button
                    type="submit"
                    className="py-1.5 ml-6 px-4  m-0"
                    onClick={handleCloserClancleButtonClickColor}
                  >
                    cancle
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
