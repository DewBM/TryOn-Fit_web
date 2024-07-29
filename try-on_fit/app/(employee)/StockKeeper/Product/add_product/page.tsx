"use client";
import React from "react";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import RadioButton from "@/app/components/RadioButton";
import ColorInput from "@/app/components/ColorInput";
import { useState } from "react";
import NumberBox from "@/app/components/NumberBox";
import FlipBox from "@/app/components/FlipBox";
import ColorList from "@/app/components/PasswordBox";
import Modal from "@/app/components/modal";
import TextBoxB from "@/app/components/TextBox_B";
import MeasurementSection from "@/app/components/MeasurementSection";

export default function AddProduct() {
  //model section
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  // model submision
  const handleHideModal = (collect = false) => {
    if (collect) {
      setColors([...colors, newColor]); // Add the new color to the colors array
      setNewColor(""); // Reset the new color input field
    }
    setShowModal(false);
  };

  //model section
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [size, setSize] = useState<string>(""); // add this state variable

  const [activeSize, setActiveSize] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState("");

  ////////////////////////////color shwow section

  const [inputColor, setInputColor] = useState("");
  const [colors, setColors] = useState<string[]>([]); // Initialize an empty array of strings
  const [newColor, setNewColor] = useState<string>(""); // Initialize a string variable

  const handleAddColor = () => {
    setColors([...colors, newColor]); // Add the new color to the colors array
    setNewColor(""); // Reset the new color input field
  };

  const handleColorSubmit = (color: string) => {
    console.log("Color submitted:", color);
  };
  ////////////////////////////color shwow section

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };
  // const [isOpen, setIsOpen] = React.useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showColorSection, setShowColorSection] = useState(false);

  const [buttonTexts, setButtonTexts] = useState(["+"]);

  const handleCloserSubmitButtonClickColor = () => {
    setShowColorSection(false);
  };

  const [buttonClickme, setButtonClickme] = useState("primary"); // add this line
  //measurmenet section
  type SizeKey = "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

  const [activeSizes, setActiveSizes] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
    XXXL: false,
  });

  const [inputValues, setInputValues] = useState({
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
  });

  const handleSizeClick = (size: SizeKey) => {
    setActiveSizes((prevActiveSizes) => ({
      ...prevActiveSizes,
      [size]: !prevActiveSizes[size],
    }));

    if (!activeSizes[size]) {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [size]: "",
      }));
    } else {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [size]: "", // Clear the input value when disabling the input field
      }));
    }
  };

  // const [activeButton, setActiveButton] = useState<{
  //   [key in SizeKey]: boolean;
  // }>({});

  ////////////////////////////////////////////////////////////////////////////////////////////
  const [color, setColor] = useState("primary"); // Initial color

  const handleClick = () => {
    color === "primary" ? setColor("secondary") : setColor("primary");
  };

  ///////////////////////////////////////////////////////////////////////////////////////////
  const [buttonText, setButtonText] = useState("+ New");

  const handleClickName = () => {
    setButtonText("Remove");
  };

  ///////////////////////////////////////////////////////////////////////measument
  const [measurementSections, setMeasurementSections] = useState([
    { id: 1, name: "", min: "", max: "", value: "" },
  ]);

  const [lastSectionButtonText, setLastSectionButtonText] = useState("+");

  const handleAddMeasurement = () => {
    const newSection = {
      id: measurementSections.length + 1,
      name: "",
      min: "",
      max: "",
      value: "",
    };
    setMeasurementSections([...measurementSections, newSection]);
  };

  const handleRemoveMeasurement = (id: number) => {
    const section = measurementSections.find((section) => section.id === id);
    if (section) {
      if (measurementSections.length > 1) {
        // Remove card
        const newSections = measurementSections.filter(
          (section) => section.id !== id
        );
        setMeasurementSections(newSections);
      } else {
        // Clear input values of the last card
        const newSection = {
          id: 0, // or some other default id value
          name: "Empty",
          min: "0.cm",
          max: "0.cm",
          value: "", // or some other default value
        };
        setMeasurementSections([newSection]);
        setLastSectionButtonText(
          ` ${newSection.name} ${newSection.min} ${newSection.max}`
        );
      }
    }
  };
  return (
    <div className="grid grid-cols-12 ">
      <form
        action="{AddProduct}"
        className="bg-main lg:col-span-9 shadow-xl rounded-r-lg pt-3 "
        noValidate
      >
        <div className="grid grid-cols-10 px-14 pt-2 ">
          <div className="bg-main lg:col-span-10 sm:col-span-6 mb-6 ">
            <h1 className="font-bold text-4xl text-amber-950">
              New Product Entry Form
            </h1>
          </div>
          <div className="bg-main col-span-4 lg:col-span-4 sm:col-span-2 mb-4 ">
            <TextBox
              labelName="Product ID"
              name="pid"
              key="pid"
              inputType="text"
              defaultValue=""
            />
          </div>
          <div className="bg-main col-span-4 lg:col-span-4 sm:col-span-2 lg:col-start-7 mb-4 ">
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
          <div className="bg-main lg:col-span-8 sm:col-span-4 mb-4 row-span-2 ">
            <TextBoxB
              labelName="Design"
              name="design"
              key="design"
              inputType="text"
              defaultValue=""
              placeholder=""
              height="h-14"
            />
          </div>
          <div className="bg-main lg:col-span-8 sm:col-span-4 mb-4 row-span-2 ">
            <TextBoxB
              labelName="Description"
              name="description"
              key="description"
              inputType="text"
              defaultValue=""
              placeholder=""
              height="h-20"
            />
          </div>

          <div className="bg-main  lg:col-span-12 sm:col-span-2  mb-4 ">
            <div className="grid  lg:grid-cols-12">
              <div className="lg:col-start-1 lg:col-span-8  ">
                <p className="block text-sm font-medium leading-6 mt-4 text-gray-900 ">
                  Selected Colors
                </p>

                <div className="lg:col-start-1 lg:col-span-8 rounded-md border-4 border-white border-b-slate-300 mt-5 h-16">
                  {colors.length === 0 ? (
                    <p className="text-sm text-slate-400 mt-3 ml-2">
                      No colors selected
                    </p>
                  ) : (
                    <ColorList colors={colors} />
                  )}
                </div>
              </div>
              <div className="lg:col-start-8 lg:col-span-5 mt-1 ml-11">
                <Button
                  type="button"
                  className="py-1.5 ml-6  m-0 bg-orange-900"
                  onClick={handleShowModal}
                >
                  Add color +
                </Button>
              </div>
            </div>
          </div>
          {/* //popup section */}
          <div className="grid  lg:grid-cols-12">
            <Modal
              title="Additional Information"
              show={showModal}
              onClose={handleHideModal}
            >
              <div className="bg-main  mt-1 text-sm font-normal leading-6 text-gray-900 ">
                <div className="bg-main  lg:col-span-12 sm:col-span-2 mb-20  ">
                  <p className="mb-3 mt-4 block text-sm font-medium leading-6 text-gray-900">
                    Preview and Confirm Your Color Choice
                  </p>
                  <ColorInput
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    onColorSubmit={handleColorSubmit}
                  />
                </div>
              </div>
              <div className="bg-main  lg:col-span-12 sm:col-span-2 mb-20  ">
                <p className="mb-3 mt-4 block text-sm font-medium leading-6 text-gray-900">
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
              <div className="bg-main lg:col-span-12 sm:col-span-4 mb-4">
                <p className="mb-3 mt-4 text-sm font-medium leading-6 text-gray-900">
                  Select sizes and Enter the desired quantities
                </p>
                <p className="mb-3 mt-1 block ml-1 text-sm font-medium leading-6 text-red-500">
                  (Please click the appropriate button to enter desired
                  quantity)
                </p>
                <div className="flex flex-wrap px-2">
                  <Button
                    className={`px-3 py-1 ${
                      activeSizes.S ? "bg-emerald-700" : "bg-yellow-800"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("S")}
                  >
                    S
                  </Button>
                  <Button
                    className={`px-3 py-1 ${
                      activeSizes.M ? "bg-emerald-700" : "bg-yellow-800"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("M")}
                  >
                    M
                  </Button>
                  <Button
                    className={`px-3 py-1 ${
                      activeSizes.L ? "bg-emerald-700" : "bg-yellow-800"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("L")}
                  >
                    L
                  </Button>
                  <Button
                    className={`px-3 py-1 border-2 bo ${
                      activeSizes.XL ? "bg-emerald-700" : "bg-yellow-800"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("XL")}
                  >
                    XL
                  </Button>

                  <Button
                    className={`px-3 py-1 ${
                      activeSizes.XXL ? "bg-emerald-700" : "bg-yellow-800"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("XXL")}
                  >
                    2XL
                  </Button>
                  <Button
                    className={`px-3 py-1 ${
                      activeSizes.XXXL ? "bg-emerald-700" : "bg-yellow-800	"
                    }`}
                    type="button"
                    onClick={() => handleSizeClick("XXXL")}
                  >
                    3XL
                  </Button>
                </div>
                {/* {showSection && ( */}
                <div className=" pt-3 mb-1 mr-6 grid grid-cols-12 pl-3">
                  <p className="mt-4 lg:col-start-1 lg:col-span-1">Small</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4 lg:col-start-2 mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.S}
                    />
                  </div>

                  <p className="mt-4 lg:col-start-1 lg:col-span-1 ">Medium</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4  lg:col-start-2  mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.M}
                    />
                  </div>
                  <p className="mt-4 lg:col-start-1 lg:col-span-1">Large</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4  lg:col-start-2  mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.L}
                    />
                  </div>
                  <p className="mt-4 lg:col-start-1 lg:col-span-1">XL</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4  lg:col-start-2  mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.XL}
                    />
                  </div>
                  <p className="mt-4 lg:col-start-1 lg:col-span-1">XXL</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4  lg:col-start-2  mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.XXL}
                    />
                  </div>
                  <p className="mt-4 lg:col-start-1 lg:col-span-1">XXXL</p>
                  <div
                    className="bg-main lg:col-span-2
                     sm:col-span-4  lg:col-start-2  mb-4 ml-5 "
                  >
                    <NumberBox
                      labelName=""
                      name="quantity"
                      key="quantity"
                      inputType="number"
                      defaultValue=""
                      className="min=1"
                      disabled={!activeSizes.XXXL}
                    />
                  </div>
                </div>
                <p className=" mt-4 block text-sm font-medium leading-6 text-gray-900">
                  Please enter the measurements for this clothing item
                </p>
                <p className="mb-3 mt-1 block text-sm font-medium leading-6 text-red-500	">
                  *Be sure to enter the correct measurements
                </p>
                {measurementSections.map((section, index) => (
                  <MeasurementSection
                    key={section.id}
                    section={section}
                    index={index}
                    measurementSections={measurementSections}
                    handleRemoveMeasurement={handleRemoveMeasurement}
                    handleAddMeasurement={handleAddMeasurement}
                    lastSectionButtonText={lastSectionButtonText}
                  />
                ))}
                <div slot="footer">
                  <div
                    className="bg-main lg:col-span-3 sm:col-span-1 row-span-2 ml-72
                   mt-8"
                  >
                    <Button
                      type="button"
                      className="py-1 px-4 ml-24 m-0"
                      onClick={() => handleHideModal()}
                    >
                      Cancle
                    </Button>
                    <Button
                      type="button"
                      className="py-1 px-4 m-0"
                      onClick={() => handleHideModal(true)}
                    >
                      Collect
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          {/* //popup section  ^ */}
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
