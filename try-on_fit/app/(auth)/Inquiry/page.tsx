"use client";

import React, { useState } from "react";
import Layout from "../layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";

export default function Inquiry() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };
  return (
    <Layout>
      <div className="grid  lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-6 lg:col-start-4 rounded mx-8 bg-main-lighter shadow-xl rounded-r-lg px-8 pt-6 pb-8 mt-10 mb-10 ">
          <form
            // action={}
            className="sm:col-span-1 lg:col-span-4 "
          >
            <div className=" sm:col-span-1 lg:col-span-5 text-3xl font-bold  lg:col-start-2 mb-3">
              <h1>Submit a request assistance</h1>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-5 text-base text-red-400	  font-semibold mb-3">
              <p>
                Please complete the form below detailing your request and our
                support staff will respond as soon as possible
              </p>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-11">
              <p>Order Information</p>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg font-semibold mb-3">
              <TextBox
                labelName={"Order Number"}
                id={"lg-ordernum"}
                inputType="text"
              ></TextBox>
            </div>
            <div className=" sm:col-span- lg:grid-cols-5 text-xl  font-bold mb-10 mt-11">
              <p>Issue Information</p>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg  font-bold mb-3">
              <SelectBox
                labelName="Select the Issue"
                id="inquery-issueType"
                name="issueType"
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
            <div className="sm:col-span-1 lg:grid-cols-5 text-lg font-semibold mb-8 mt-8">
              <p className="mb-3">Upload an image (optional)</p>
              <div className="">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {selectedImage && (
                <span className="text-teal-500	">
                  Image uploaded successfully!
                </span>
              )}
            </div>
            <div className=" sm:col-span-1 sm:row-span-2 lg:grid-cols-4 text-lg py-4 font-semibold mb-3">
              <TextBox
                labelName={"Describe Your Issues"}
                id={"lg-ordernum"}
                inputType="text"
              ></TextBox>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-16">
              <p>Perfect Solution</p>
              <hr className="border-b border-main-light"></hr>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg font-semibold mb-3">
              <SelectBox
                labelName="What Resolution are you seeking?"
                id="inquery-issueType"
                name="issueType"
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
            <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-16">
              <p>Additional Comments</p>
              <hr className="border-b border-main-light"></hr>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg font-semibold mb-3">
              <TextBox
                labelName={"Any Additional COmments or request"}
                id={"lg-ordernum"}
                inputType="text"
              ></TextBox>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-base font-semibold mb-3">
              <Button type="submit" className="  m-1 mt-4 px-10">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
