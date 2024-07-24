"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import TextBox from "@/app/components/TextBox";
import ColorInput from "@/app/components/ColorInput";

export default function AddProduct() {
  const [measurementSections, setMeasurementSections] = useState([1]);
  const [showSection, setShowSection] = useState(false);
  const [buttonClickme, setButtonClickme] = useState("primary");

  const handleAddMeasurement = () => {
    setMeasurementSections([
      ...measurementSections,
      measurementSections.length + 1,
    ]);
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
        <div>
          <Button
            type="button"
            className={`py-1 ml-4  m-0 ${
              buttonClickme === "primary" ? "bg-main-light" : "bg-red-600"
            }`}
            onClick={handleButtonClick}
          >
            Click me!
          </Button>
          {showSection && (
            <div>
              <div className="bg-main-light lg:col-start-1 col-span-11 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 m-2 grid grid-cols-12">
                <div className="bg-main lg:col-span-6 sm:col-span-4 mb-4 row-span-2 lg:col-start-1">
                  <Button
                    type="button"
                    className="py-1 ml-4  m-0"
                    onClick={handleAddMeasurement}
                  >
                    + measurement
                  </Button>
                </div>
                {measurementSections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-main-lighter lg:col-start-1 col-span-12 shadow-xl rounded-r-lg pt-3 pb-8 mb-1 m-2 grid grid-cols-12"
                  >
                    <div className="bg-main lg:col-span-5 sm:col-span-4 mb-4 row-span-2 lg:col-start-1">
                      <TextBox
                        labelName="Measurement"
                        name="mesurement"
                        key="mesurement"
                        inputType="text"
                        defaultValue=""
                      />
                    </div>
                    {/* <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
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
                    </div> */}
                    <div className="bg-main  lg:col-span-4 sm:col-span-2 lg:col-start-5 mb-4 ">
                      <ColorInput />
                    </div>
                  </div>
                ))}
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 lg:col-start-5">
                  <Button
                    type="submit"
                    onClick={handleCloserSubmitButtonClick}
                    className="py-1.5 ml-6 px-4  m-0"
                  >
                    submit
                  </Button>
                </div>
                <div className="bg-main lg:col-span-3 sm:col-span-1 mb-4 row-span-2 ml-3">
                  <Button
                    type="submit"
                    onClick={handleCloserClancleButtonClick}
                    className="py-1.5 ml-6 px-4  m-0"
                  >
                    cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
