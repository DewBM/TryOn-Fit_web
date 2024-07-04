import React from "react";
import Button from "@/app/components/Button";
import Link from "next/link";
import PasswordBox from "@/app/components/PasswordBox";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Layout from "../layout";
import Image from "next/image";
import signupimg from "../../../public/imgSignup1.jpg";
import { useState } from "react";

function page() {
  return (
    <Layout>
      <div className="grid  lg:grid-cols-12 mb-0  rounded mx-8 ">
        <div className="lg:col-span-3 lg:col-start-3">
          <Image
            src={signupimg}
            alt="Auth Image"
            className=" rounded-l-lg  my-auto lg:col-span-3"
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-6">
          <form
            action=""
            className="bg-main-lighter shadow-md  px-4  pb-2 grid  gap-x-2.5 gap-y-1 sm:grid-cols-4 rounded-r-lg 

  "
          >
            <div className=" sm:col-span-4 text-4xl font-extrabold mt-4 	">
              <h1>Sign Up</h1>
            </div>

            {/* mb-4  mt-10 */}
            <div className="sm:col-span-2 mt-4">
              <TextBox
                labelName={"First Name"}
                id={"signup-Fname"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-2 mt-4">
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
            <div className="sm:col-span-4 px-0 mt-0">
              <Button type="submit" className="py-1.5 mr-0 mt-1 px-40">
                Sign Up
              </Button>
            </div>

            <div className="sm:col-span-4 font-medium leading-6 text-sm	mb-0">
              <p>
                Do you have an account ?{" "}
                <Link className="underline text-main-dark" href="">
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
