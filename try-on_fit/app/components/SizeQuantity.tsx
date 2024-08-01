// SizeQuantity.js
import React from "react";
import TextBox from "./TextBox"; // assuming TextBox is a separate component
import Button from "./Button"; // assuming Button is a separate component

interface SizeQuantityProps {
  section: {
    id: number;
    name: string;
    max: string;
  };
  index: number;
  sizeQuantitySections: { id: number; name: string; max: string }[];
  handleRemoveSizeQuantity: (id: number) => void;
  handleAddSizeQuantity: () => void;
  lastSectionButtonText: string;
}

const SizeQuantity: React.FC<SizeQuantityProps> = ({
  section,
  index,
  sizeQuantitySections,
  handleRemoveSizeQuantity,
  handleAddSizeQuantity,
  lastSectionButtonText,
}) => {
  return (
    <div
      key={section.id}
      className="bg-neutral-50 lg:col-start-1  rounded-lg mt-2 grid grid-cols-12 pl-8 border-1"
    >
      <div className="bg-main lg:col-span-4 sm:col-span-4 row-span-2 lg:col-start-1 m-0 mt-2">
        <TextBox
          labelName="Size"
          name="sizeQuantity"
          key="sizeQuantity"
          inputType="text"
          defaultValue=""
          placeholder={"Empty"}
        />
      </div>
      <div className="bg-main lg:col-span-3 sm:col-span-1 row-span-2 ml-7 lg:col-start-5 mt-2">
        <TextBox
          labelName="Quantity"
          name="qty"
          key="qty"
          inputType="text"
          defaultValue=""
          placeholder={"000"}
        />
      </div>
      <div className=" mt-4 pl-3 ml-16 w-5">
        {index === sizeQuantitySections.length - 1 ? (
          <div className="flex justify-center lg:col-start-10">
            <Button
              type="button"
              className={`bg-main hover:bg-main-hover text-white font-bold py-2  px-4 ml-40 rounded-full`}
              onClick={() => handleRemoveSizeQuantity(section.id)}
            >
              -
            </Button>
            <Button
              type="button"
              className={`bg-main hover:bg-main-hover text-white font-bold py-2 px-4 rounded-full`}
              onClick={handleAddSizeQuantity}
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            className={`bg-main hover:bg-main-hover text-white font-bold py-2 px-4 ml-3  rounded-full lg:col-start-9`}
            onClick={() => handleRemoveSizeQuantity(section.id)}
          >
            -
          </Button>
        )}
      </div>
    </div>
  );
};

export default SizeQuantity;
