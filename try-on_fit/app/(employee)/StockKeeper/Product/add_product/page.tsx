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
import FlipBox from "@/app/components/FlipBox";

export default function AddProduct() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [size, setSize] = useState<string>(""); // add this state variable

  const [activeSize, setActiveSize] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState("");

  // const [activeSizes, setActiveSizes] = useState({
  //   S: false,
  //   M: false,
  //   L: false,
  //   XL: false,
  //   XXL: false,
  //   XXXL: false,
  // });

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

  // const handleSizeClick = (size: string) => {
  //   setSize(size);
  //   setShowSection(true); // show the section when a size is selected
  //   setActiveSize(size);
  // };

  type SizeKey = "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

  const [activeSizes, setActiveSizes] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
    XXXL: false,
  });

  const handleSizeClick = (size: SizeKey) => {
    // setSize(size);
    setShowSection(true);
    setActiveSizes((prevActiveSizes) => {
      if (size in prevActiveSizes) {
        return { ...prevActiveSizes, [size]: !prevActiveSizes[size] };
      }
      return prevActiveSizes;
    });
  };

  return (
    <div className="grid  lg:grid-cols-11 sm: mb-0  rounded mx-8 ">
      <form
        action="{AddProduct}"
        className="bg-main lg:col-span-9 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 m-2"
        noValidate
      >
        <div className="grid grid-cols-12 ml-10">
          <div className="bg-main col-span-12 lg:col-span-12 sm:col-span-6 mb-6">
            <h1
              className="font-semibold text-3xl
"
            >
              New Product Entry Form
            </h1>
          </div>
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
              value={selectedValue}
              onChange={(newValue) => setSelectedValue(newValue)}
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
                Age Group
              </legend>
              {/* Add a legend element for the label */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                }}
              >
                <RadioButton label="Adult" value="adult" name="agegroup" />
                <RadioButton label="Kids" value="kids" name="agegroup" />
              </div>
            </fieldset>
          </div>
          <div className="bg-main  lg:col-span-12 sm:col-span-2 mb-20  ">
            <p
              className="mb-3 mt-4 text-sm text-neutral-600	
"
            >
              Provide front and back clothing views
            </p>
            <div className="lg:col-span-12 sm:col-span-2 lg:col-start-1">
              <FlipBox />
            </div>
            {selectedImage && (
              <span className="text-teal-500	">
                Image uploaded successfully!
              </span>
            )}
          </div>
          <div className="bg-main  lg:col-span-10 sm:col-span-2 lg:col-start-1 mb-4 ">
            <Button
              type="button"
              className="py-1.5 ml-6  m-0"
              onClick={handleButtonClickColor}
            >
              Add color +
            </Button>
            {showColorSection && (
              <div className="bg-main lg:col-start-1 lg:col-span-12 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 pl-6 grid grid-cols-12 ml-14 mt-3">
                <div className="bg-main col-span-6 lg:col-span-6 sm:col-span-2 mt-6 text-sm font-normal leading-6 text-gray-900 ">
                  <p>Enter color HEX code </p>
                </div>
                <div className="bg-main  lg:col-span-5 sm:col-span-2 lg:col-start-7 mb-4 mt-3 ">
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
                {/* // </div> */}
                <div className="bg-main lg:col-span-12 sm:col-span-4 mb-4">
                  <p className="mb-3 mt-4 text-sm font-medium leading-6 text-gray-900">
                    Select Sizes
                  </p>
                  <div className="flex flex-wrap px-2">
                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.S ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("S")}
                    >
                      S
                    </Button>
                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.M ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("M")}
                    >
                      M
                    </Button>
                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.L ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("L")}
                    >
                      L
                    </Button>
                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.XL ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("XL")}
                    >
                      XL
                    </Button>

                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.XXL ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("XXL")}
                    >
                      2XL
                    </Button>
                    <Button
                      className={`px-3 py-1 ${
                        activeSizes.XXXL ? "bg-orange-600" : "bg-green-500"
                      }`}
                      type="button"
                      onClick={() => handleSizeClick("XXXL")}
                    >
                      3XL
                    </Button>
                  </div>
                  {showSection && (
                    <div className="bg-gray-50 lg:col-start-1 col-span-12 shadow-xl rounded-lg pt-3 pb-8 mb-1 mr-6 grid grid-cols-12 pl-3">
                      <div className="bg-main lg:col-span-8 sm:col-span-4 mb-4 row-span-2 ">
                        <NumberBox
                          labelName="Enter total quantity"
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
                          + Measurements
                        </Button>
                      </div>
                      {measurementSections.map((section, index) => (
                        <div
                          key={index}
                          className="bg-neutral-100	 lg:col-start-1 col-span-11 shadow-xl rounded-lg  pb-1 mb-1 m-2 grid grid-cols-12 pl-5"
                        >
                          <div className="bg-main lg:col-span-5 sm:col-span-4 mb-4 row-span-2 lg:col-start-1 m-0">
                            <TextBox
                              labelName="Measurement Name"
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
                      <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-6 mt-3">
                        <Button
                          type="submit"
                          className="py-1 ml-8 px-8 m-0"
                          onClick={handleCloserSubmitButtonClick}
                        >
                          Add
                        </Button>
                      </div>
                      <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-1 mt-3">
                        <Button
                          type="submit"
                          className="py-1 ml-3 px-4  m-0"
                          onClick={handleCloserClancleButtonClick}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                {/* // </div> */}
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-7">
                  <Button
                    type="submit"
                    className="py-1 ml-8 px-8 m-0"
                    onClick={handleCloserSubmitButtonClickColor}
                  >
                    Add
                  </Button>
                </div>
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2">
                  <Button
                    type="submit"
                    className="py-1 ml-3 px-4  m-0"
                    onClick={handleCloserClancleButtonClickColor}
                  >
                    Cancle
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-8">
            <Button
              type="submit"
              className="py-2 ml-8  px-14 m-0"
              onClick={handleCloserSubmitButtonClickColor}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
