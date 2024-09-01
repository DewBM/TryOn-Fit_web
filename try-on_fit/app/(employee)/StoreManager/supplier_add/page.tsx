"use client";
import React, { useState } from "react";
import Layout from "@/app/(auth)/layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import RadioButton from "@/app/components/RadioButton";
import { EmployeeRegistrationSchema, supplierRegistrationSchema } from "../stockManagerSchema";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { creatSupplier } from "../actions";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastResult, action] = useFormState(creatSupplier, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: supplierRegistrationSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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
        <div className="lg:col-span-6 lg:col-start-4 rounded bg-main shadow-xl rounded-r-lg pt-6 pb-8 mt-10 mb-10">
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            noValidate
            className="lg:col-span-5 sm:col-span-4"
          >
            <div className="grid grid-cols-11">
              <div className="lg:col-span-7 lg:col-start-2 sm:col-span-4 mt-2 text-2xl font-extrabold mb-4">
                <h1>Supplier Registration</h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Supplier ID"}
                  name={fields.supid.name}
                  key={fields.supid.key as React.Key}
                  defaultValue={fields.supid.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.supid.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"First Name"}
                  name={fields.firstName.name}
                  key={fields.firstName.key as React.Key}
                  defaultValue={fields.firstName.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.firstName.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Last Name"}
                  name={fields.lastName.name}
                  key={fields.lastName.key as React.Key}
                  defaultValue={fields.lastName.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.lastName.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Email"}
                  name={fields.email.name}
                  key={fields.email.key as React.Key}
                  defaultValue={fields.email.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.email.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-1 mt-3">
                <TextBox
                  labelName={"Phone"}
                  name={fields.phone.name}
                  key={fields.phone.key as React.Key}
                  defaultValue={fields.phone.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.phone.errors}</div>
              </div>
              <div className="lg:col-span-5 lg:col-start-2 sm:col-span-1 mt-3">
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
                    <RadioButton label="Male" value="male" name={fields.gender.name} />
                    <RadioButton label="Female" value="female" name={fields.gender.name} />
                    <RadioButton label="Other" value="other" name={fields.gender.name} />
                  </div>
                </fieldset>
              </div>
              <div className="lg:col-span-9 lg:col-start-2 sm:col-span-4 mt-3">
                <TextBox
                  labelName={"Street Address"}
                  name={fields.streetAddress.name}
                  key={fields.streetAddress.key as React.Key}
                  defaultValue={fields.streetAddress.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.streetAddress.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-2 sm:col-span-2 mt-3">
                <TextBox
                  labelName={"City"}
                  name={fields.city.name}
                  key={fields.city.key as React.Key}
                  defaultValue={fields.city.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.city.errors}</div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7 sm:col-span-2 mt-3">
                <TextBox
                  labelName={"State/Province"}
                  name={fields.stateProvince.name}
                  key={fields.stateProvince.key as React.Key}
                  defaultValue={fields.stateProvince.initialValue as React.HTMLInputTypeAttribute}
                  inputType="text"
                />
                <div className="text-xs text-red-400">{fields.stateProvince.errors}</div>
              </div>
              <div className="lg:col-span-7 lg:col-start-3 sm:col-span-4 mt-3">
                <Button
                  type="submit"
                  className="py-1.5 px-28 ml-10"
                  // onClick={handleCloseModal}
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

export default Dialog ;
