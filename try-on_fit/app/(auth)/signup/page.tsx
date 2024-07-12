"use client";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next/link";
import PasswordBox from "@/app/components/PasswordBox";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Layout from "../layout";
import Image from "next/image";
import signupimg from "../../../public/img_signUp.jpg";
import { useState } from "react";

function page() {
  async function signup(formData: FormData) {
    const [errors, setErrors] = useState({
      firstName: formData.get("First Name"),
      lastName: formData.get("Last Name"),
      gender: formData.get("Gender"),
      email: formData.get("Email"),
      phoneNumber: formData.get("Phone Number"),
      address: formData.get("Address"),
      password: formData.get("Password"),
      verifyPassword: formData.get("Verification Password"),
    });
    const validateForm = () => {
      const errorsObj = { ...errors };

      if (!errorsObj.firstName) {
        errors.firstName = "First name is required";
      }

      if (!errorsObj.lastName) {
        errors.lastName = "Last name is required";
      }

      if (!errorsObj.email) {
        errors.email = "Email is required";
      } else {
        errors.email = "Invalid email address";
      }

      if (!errorsObj.phoneNumber) {
        errors.phoneNumber = "Phone number is required";
      }

      if (!errorsObj.address) {
        errors.address = "Address is required";
      }

      if (!formData.get("password")) {
        errorsObj.password = "Password is required";
      } else if (String(formData.get("password")).length < 8) {
        errorsObj.password = "Password must be at least 8 characters";
      }

      if (!errorsObj.verifyPassword) {
        errors.verifyPassword = "Verify password is required";
      } else if (errorsObj.verifyPassword !== errorsObj.password) {
        errors.verifyPassword = "Passwords do not match";
      }

      setErrors(errorsObj);
    };

    validateForm();
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    };
    try {
      const response = await fetch("http://localhost:8080/signup", params);
      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <Layout>
      <div className="grid  lg:grid-cols-12 mb-0  rounded mx-8 ">
        <div className="lg:col-span-3 lg:col-start-3">
          <Image
            src={signupimg}
            alt="Auth Image"
            className=" rounded-l-lg shadow-xl my-auto lg:col-span-3"
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-6">
          <form
            action={signup}
            className="bg-main-lighter shadow-xl  px-4  pb-2 grid  gap-x-2.5 gap-y-1 sm:grid-cols-4 rounded-r-lg 

  "
          >
            <div className=" sm:col-span-4 text-4xl font-extrabold mt-4	mb-3.5">
              <h1>Create an account</h1>
            </div>

            {/* mb-4  mt-10 */}
            <div className="sm:col-span-2 mt-3">
              <TextBox
                labelName={"First Name"}
                id={"signup-Fname"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-2 mt-3">
              <TextBox
                labelName={"Last Name"}
                id={"signup-lname"}
                inputType="text"
              />
            </div>
            <div className=" sm:col-span-4">
              <SelectBox
                labelName="Gender"
                id="signup-gender"
                name="gender"
                options={[
                  { value: "", label: "" },
                  { value: "female", label: "Female" },
                  { value: "male", label: "Male" },
                  { value: "other", label: "Other" },
                ]}
                autoComplete="gender"
                value=""
              />
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName={"Email"}
                id={"signup-Email"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName={"Phone Number"}
                id={"signup-phone"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-4">
              <TextBox
                labelName={"Address"}
                id={"signup-address"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-2">
              <PasswordBox
                labelName={"Password"}
                id={"lg-pwd"}
                showEyeIcon={true}
              />
            </div>
            <div className="sm:col-span-2">
              <PasswordBox
                labelName={"Verification Password"}
                id={"lg-pwd-verify"}
                showEyeIcon={false}
              />
            </div>
            <div className="sm:col-span-4 mb-0 px-0 mt-0">
              <Button type="submit" className="py-1.5 ml-6 m-1.5 mt-1 px-44">
                Register
              </Button>
            </div>

            <div className="sm:col-span-4 font-medium ml-7 mt-0 m-0 leading-6 text-sm mb-2">
              <p>
                Do you have an account?&nbsp;
                <Link
                  className="underline text-main-dark"
                  href="http://localhost:8080/signin"
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

export default page;
