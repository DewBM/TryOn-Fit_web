"use client";
import React from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";

const Dialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleShowModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="show" onClick={handleShowModal}>
        Show Modal
      </button>

      <dialog id="dialog" open={isOpen}>
        <div className="lg:col-span-6 lg:col-start-4 rounded  bg-main shadow-xl rounded-r-lg  pt-6 pb-8 mt-10 mb-10 ">
          <form className="lg:col-span-5 sm:col-span-4">
            <div className="grid grid-cols-11">
              <div className=" lg:col-span-7 lg:col-start-2 sm:col-span-4 mt-2 text-2xl font-extrabold mb-4 ">
                <h1>Employee Registration</h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"First Name"}
                  id={"EmpAdd-Fname"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Last Name"}
                  id={"EmpAdd-Lname"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Email"}
                  id={"EmpAdd-email"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Phone"}
                  id={"EmpAdd-phone"}
                  inputType="text"
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
                  value=""
                  onChange={(newValue) => console.log(newValue)}
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
                  labelName={"Street Address"}
                  id={"EmpAdd-address1"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-2 mt-3">
                <TextBox
                  labelName={"City"}
                  id={"EmpAdd-address2"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
                <TextBox
                  labelName={"State/Province"}
                  id={"EmpAdd-address2"}
                  inputType="text"
                />
              </div>
              <div className="lg:col-span-7 lg:col-start-3 sm:col-span-4 mt-3">
                <Button
                  type="submit"
                  className=" py-1.5 b px-28 ml-10"
                  onClick={handleCloseModal}
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Dialog;
