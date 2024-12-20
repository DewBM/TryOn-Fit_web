"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";
import Link from "next/link";
import PasswordBox from "@/app/components/PasswordBox";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Layout from "../layout";
import Image from "next/image";
import signupimg from "../../../public/images/img_signUp.jpg";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { SignUpSchema } from "@/app/utils/schema";
import { useFormState } from "react-dom";
import { signup } from "../actions";
// import PhoneNumber from "@/app/components/PhoneNumber";

export default function Signup() {
  const [lastResult, action] = useFormState(signup, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      const result = parseWithZod(formData, { schema: SignUpSchema });
      console.log(result);
      return result;
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "", label: "" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "UniSex" },
  ];

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
  };

  return (
    <Layout>
      <div className="grid grid-cols-12 mb-0 rounded mx-8">
        <div className="lg:col-span-3 lg:col-start-3">
          <Image
            src={signupimg}
            alt="Auth Image"
            className="rounded-l-lg shadow-2xl my-auto lg:col-span-3"
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-6">
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            className="bg-main-lighter shadow-xl px-4 pb-2 grid gap-x-2.5 gap-y-1 sm:grid-cols-4 rounded-r-lg"
            noValidate
          >
            <div className="sm:col-span-4 text-4xl font-extrabold mt-3 mb-3">
              <h1>Create an account</h1>
            </div>
            <div className="sm:col-span-2 mt-2">
              <TextBox
                labelName="First Name"
                name={fields.firstName.name}
                key={fields.firstName.key as React.Key}
                inputType="text"
                defaultValue={
                  fields.firstName.initialValue as React.HTMLInputTypeAttribute
                }
              />
              <div className="text-xs text-red-400">
                {fields.firstName.errors}
              </div>
            </div>
            <div className="sm:col-span-2 mt-2">
              <TextBox
                labelName="Last Name"
                name={fields.lastName.name}
                key={fields.lastName.key as React.Key}
                inputType="text"
                defaultValue={
                  fields.lastName.initialValue as React.HTMLInputTypeAttribute
                }
              />
              <div className="text-xs text-red-400">
                {fields.lastName.errors}
              </div>
            </div>
            <div className="sm:col-span-4">
              <SelectBox
                labelName="Select an option"
                key={fields.gender.key as React.Key}
                // id="select-box"
                name={fields.gender.name}
                autoComplete="off"
                options={options}
                value={selectedValue}
                defaultValue={fields.gender.initialValue as React.HTMLInputTypeAttribute}
                onChange={handleChange}
                // error={selectedValue === "" ? "" : undefined}
              />
              <div className="text-xs text-red-400">
                {fields.gender.errors}
              </div>
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName="Email"
                name={fields.email.name}
                key={fields.email.key as React.Key}
                inputType="text"
                defaultValue={
                  fields.email.initialValue as React.HTMLInputTypeAttribute
                }
              />
              <div className="text-xs text-red-400">{fields.email.errors}</div>
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName={"Phone Number"}
                inputType={"phoneNumber"}
                name={fields.phoneNumber.name}
                key={fields.phoneNumber.key as React.Key}
                defaultValue={
                  fields.phoneNumber
                    .initialValue as React.HTMLInputTypeAttribute
                }
              />
              <div className="text-xs text-red-400">
                {fields.phoneNumber.errors}
              </div>
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName="Username"
                name={fields.username.name}
                key={fields.username.key as React.Key}
                inputType="text"
                defaultValue={
                  fields.username.initialValue as React.HTMLInputTypeAttribute
                }
              />
              <div className="text-xs text-red-400">
                {fields.username.errors}
              </div>
            </div>
            <div className="sm:col-span-2">
              <PasswordBox
                labelName={"Password"}
                inputType={"password"}
                name={fields.password.name}
                key={fields.password.key as React.Key}
                defaultValue={
                  fields.password.initialValue as React.HTMLInputTypeAttribute
                }
                showEyeIcon={true}
              />
              <div className="text-xs text-red-400">
                {fields.password.errors}
              </div>
            </div>
            {/* passwordConfirm */}
            <div className="sm:col-span-2">
              <PasswordBox
                labelName={"Confirm Password"}
                inputType={"password"}
                name={fields.passwordConfirm.name}
                key={fields.passwordConfirm.key as React.Key}
                defaultValue={
                  fields.passwordConfirm
                    .initialValue as React.HTMLInputTypeAttribute
                }
                showEyeIcon={true}
              />
              <div className="text-xs text-red-400">
                {fields.passwordConfirm.errors}
              </div>
            </div>
            <div className="sm:col-span-4 mb-0 px-0 mt-0 m-0">
              <Button type="submit" className="py-1.5 ml-6 px-44 m-0">
                Register
                <Link
                  className="underline text-main-dark"
                  href="http://localhost:8081/signin"
                ></Link>
              </Button>
            </div>
            <div className="sm:col-span-4 font-medium ml-7 mt-0 m-0 leading-6 text-sm mb-3">
              <p>
                Do you have an account?&nbsp;
                <Link
                  className="underline text-main-dark"
                  href="http://localhost:8081/signin"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
