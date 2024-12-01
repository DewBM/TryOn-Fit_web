"use client";

import React, { useState } from "react";
import Layout from "./layout";
import TextBox from "@/app/components/TextBox";
import SelectBox from "@/app/components/SelectBox";
import Button from "@/app/components/Button";
import { inquiryform } from "@/app/(employee)/CustomerSupport/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { InquiryFormSchema } from "@/app/(employee)/CustomerSupport/schema";
import { useFormState } from "react-dom";



export default function Inquiry() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
  };
  
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const [lastResult, action] = useFormState(inquiryform, undefined);
  const [form, fields] = useForm({
    //lastResult,

    onValidate({ formData }) {
      const result = parseWithZod(formData, { schema: InquiryFormSchema });
      console.log(result);
      return result;
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <Layout>
      <div className="grid  lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-6 lg:col-start-4 rounded mx-8 bg-main shadow-2xl rounded-r-lg px-8 pt-6 pb-8 mt-10 mb-10 ">
          <form
            // action={}
            className="sm:col-span-1 lg:col-span-4 "
            action={action}
            id={form.id}
            onSubmit={form.onSubmit}

          >
            <div className=" sm:col-span-1 lg:col-span-5 text-3xl font-bold  lg:col-start-2 mb-3">
              <h1>Submit a Request Assistance</h1>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-5 text-base text-red-600 font-semibold mb-3">
              <p>
                Please complete the form below detailing your request and our
                support staff will respond as soon as possible
              </p>
            </div>
            

            <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-11">
              <p>Order Information</p>
              <hr className="border-b border-#cbd5e1"></hr>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg font-semibold mb-3">

              <TextBox
                labelName={"Order ID"}
                name={fields.orderId.name}
                key={fields.orderId.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>
              <div className="text-xs text-red-400">{fields.orderId.errors}</div>

               <TextBox
                labelName={"Product ID"}
                name={fields.productId.name}
                key={fields.productId.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>
              <div className="text-xs text-red-400">{fields.productId.errors}</div>

              <TextBox
                labelName={"Customer ID"}
                name={fields.customerId.name}
                key={fields.customerId.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>
              <div className="text-xs text-red-400">{fields.customerId.errors}</div>

              <TextBox
                labelName={"Customer Name"}
                name={fields.name.name}
                key={fields.name.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>

              <TextBox
                labelName={"Customer Contact Number"}
                name={fields.contactNumber.name}
                key={fields.contactNumber.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>
              <div className="text-xs text-red-400">{fields.contactNumber.errors}</div>

            </div>


            <div className=" sm:col-span- lg:grid-cols-5 text-xl  font-bold mb-10 mt-11">
              <p>Issue Information</p>
              <hr className="border-b border-#cbd5e1"></hr>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg  font-bold  mb-3">

              <SelectBox
                labelName="Select the Issue"
                key="issueType"
                name="issueType"
                options={[
                  { value: "", label: "" },
                  { value: "Awaiting and Arrival", label: "Awaiting and Arrival" },
                  { value: "Ordering and payment", label: "Ordering and payment" },
                  { value: "Virtual FitOn", label: "Virtual FitOn" },
                  { value: "Refund", label: "Refund" },
                  { value: "Account Managment", label: "Account Managment" },
                ]}
                autoComplete="Other"
                value={selectedValue}
                onChange={(newValue) => handleChange(newValue)}
                defaultValue=""
              />

                <TextBox
                labelName={"Issue Description"}
                name={fields.issuedescription.name}
                key={fields.issuedescription.key as React.Key}
                defaultValue=""
                inputType="text"
                placeholder=""
                disabled={false}
              ></TextBox>
              
            </div>
            <div className="sm:col-span-1 lg:grid-cols-5 text-lg font-semibold mb-8 mt-8">
              <p className="mb-3">Upload an image (optional)</p>
              <div className="">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  title="Upload an image"
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
                labelName={"Describe Your Issue"}
                name={fields.issue.name}
                inputType="text"
                defaultValue={"number"} 
                key={fields.issue.key as React.Key}
              ></TextBox>
            </div>
            {/* <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-16">
              <p>Perfect Solution</p>
              <hr className="border-b border-#cbd5e1"></hr>
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
                onChange={(newValue) => console.log(newValue)}
              />
            </div> */}
            <div className=" sm:col-span-1 lg:grid-cols-5 text-xl  font-bold mb-10 mt-16">
              <p>Additional Comments</p>
              <hr className="border-b border-#cbd5e1"></hr>
            </div>
            <div className=" sm:col-span-1 lg:grid-cols-4 text-lg font-semibold mb-3">
              <TextBox
                labelName={"Any Additional Comments or Requests"}
                name={fields.additionalComments.name}
                inputType="text" defaultValue={"number"} 
                key={fields.additionalComments.key as React.Key} 
                
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
