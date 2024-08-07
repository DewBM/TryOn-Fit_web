import React, { useState } from "react";
import TextBox from "./TextBox"; // assuming TextBox is a separate component
import Button from "./Button"; // assuming Button is a separate component
import SelectBox from "./SelectBox";
import AddNewModal from "@/app/components/AddNewModal";

interface MeasurementSectionProps {
  section: {
    id: number;
    name: string;
    min: string;
    max: string;
    value: string;
  };
  index: number;
  measurementSections: { id: number; name: string; min: string; max: string }[];
  handleRemoveMeasurement: (id: number) => void;
  handleAddMeasurement: () => void;
  lastSectionButtonText: string;
}

const MeasurementSection: React.FC<MeasurementSectionProps> = ({
  section,
  index,
  measurementSections,
  handleRemoveMeasurement,
  handleAddMeasurement,
  lastSectionButtonText,
}) => {
  const [selectedmeasurementValue, setselectedmeasurementValue] = useState("");
  const [newOptionValue, setNewOptionValue] = useState("");
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
  const [measurementOptions, setmeasurementOptions] = useState([
    { value: "", label: "" },
    { value: "Waist", label: "Waist" },
    { value: "Hip", label: "Hip" },
    { value: "other", label: "Other" },
  ]);

  const handleSelectChange = (newValue: string) => {
    setselectedmeasurementValue(newValue);
    if (newValue === "other") {
      setIsAddNewModalOpen(true);
    }
  };

  const handleAddNewOption = (newOptionValue: string) => {
    // Add the new option to the category options array
    setmeasurementOptions((prevOptions) => [
      ...prevOptions,
      { value: newOptionValue, label: newOptionValue },
    ]);
    // Update the selected category value with the newly added option
    setselectedmeasurementValue(newOptionValue);
    setIsAddNewModalOpen(false);
  };

  return (
    <div
      key={section.id}
      className="bg-neutral-50 lg:col-start-1  rounded-lg mt-2 grid grid-cols-12 pl-8 border-1"
    >
      <div className="bg-main lg:col-span-4 sm:col-span-4 row-span-2 lg:col-start-1 m-0 mt-2">
        <SelectBox
          labelName="measurement"
          id="Product-measurement"
          name="measurement"
          options={measurementOptions}
          autoComplete="measurement"
          value={selectedmeasurementValue}
          onChange={handleSelectChange}
        />
        {isAddNewModalOpen && (
          <AddNewModal
            isOpen={isAddNewModalOpen}
            onClose={() => {
              setIsAddNewModalOpen(false);
              setNewOptionValue(""); // reset the new option value
            }}
            onCollect={(newOptionValue) => {
              handleAddNewOption(newOptionValue);
            }}
          />
        )}
      </div>
      <div className="bg-main lg:col-span-2 sm:col-span-1  row-span-2 ml-3 lg:col-start-5 mt-2">
        <TextBox
          labelName="Min"
          name="min"
          key="min"
          inputType="text"
          defaultValue=""
          placeholder={"0.cm"}
        />
      </div>
      <div className="bg-main lg:col-span-2 sm:col-span-1  row-span-2 ml-3 mt-2">
        <TextBox
          labelName="Max"
          name="max"
          key="max"
          inputType="text"
          defaultValue=""
          placeholder={"0.cm"}
        />
      </div>
      <div className=" mt-4 pl-3 ml-3 w-5">
        {index === measurementSections.length - 1 ? (
          <div className="flex justify-center lg:col-start-10">
            <Button
              type="button"
              className={`bg-main hover:bg-main-hover text-white font-bold py-2  px-4 ml-40 rounded-full`}
              onClick={() => handleRemoveMeasurement(section.id)}
            >
              -
            </Button>
            <Button
              type="button"
              className={`bg-main hover:bg-main-hover text-white font-bold py-2 px-4 rounded-full`}
              onClick={handleAddMeasurement}
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            className={`bg-main hover:bg-main-hover text-white font-bold py-2 px-4 ml-3  rounded-full lg:col-start-9`}
            onClick={() => handleRemoveMeasurement(section.id)}
          >
            -
          </Button>
        )}
      </div>
    </div>
  );
};

export default MeasurementSection;
