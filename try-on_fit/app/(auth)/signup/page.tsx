"use client";

import React, { useState } from "react";
import Button_ from "@/app/components/Button_";
import Link from "next/link";
import PasswordBox from "@/app/components/PasswordBox";
import Text__ from "@/app/components/Text__";
import Layout from "../layout";
import Image from "next/image";
import Sign_Img from "../../../public/images/Sign_Img.png";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { SignUpSchema } from "@/app/utils/schema";
import { useRouter } from "next/navigation";


export default function Signup() {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      const result = parseWithZod(formData, { schema: SignUpSchema });
      return result;
    },
    shouldValidate: "onSubmit",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlesigning = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('signin');
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const parsedData = parseWithZod(formData, { schema: SignUpSchema });

    if (parsedData.status === "error") {
      console.error("Validation errors:", parsedData.error);
      setLoading(false);
      return;
    }

    const formDataObj = parsedData.payload as Record<string, any>;

    // Assign default values if not provided
    formDataObj.gender = formDataObj.gender || "Null";
    formDataObj.phoneNumber = formDataObj.phoneNumber || "Null";

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataObj),
      });

      if (!response.ok) {
        throw new Error((await response.json()).message || "Signup failed");
      }

      alert("Signup successful!");
      handlesigning; // Trigger redirect to signin after successful registration
    } catch (error) {
      alert(error instanceof Error ? error.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${Sign_Img.src})` }}
      >
        <div className="flex justify-center items-center h-full ml-24">
          <div className="w-96 mr-24">
            <form
              id={form.id}
              onSubmit={handleSubmit}
              className="p-4"
              noValidate
            >
              <div className="sm:col-span-4 text-4xl font-extrabold mb-4 text-center w-full mt-4 text-main-dark text-opacity-60 ml-2 mr-4	">
                <h1>Create Account</h1>
              </div>

              <div className="sm:col-span-4">
                <Text__
                  labelName="First Name"
                  name={fields.firstName.name}
                  key={fields.firstName.key as React.Key}
                  inputType="text"
                  defaultValue={fields.firstName.initialValue as React.HTMLInputTypeAttribute}
                />
              </div>

              <div className="sm:col-span-4">
                <Text__
                  labelName="Last Name"
                  name={fields.lastName.name}
                  key={fields.lastName.key as React.Key}
                  inputType="text"
                  defaultValue={fields.lastName.initialValue as React.HTMLInputTypeAttribute}
                />
              </div>

              <div className="sm:col-span-4">
                <Text__
                  labelName="Email"
                  name={fields.email.name}
                  key={fields.email.key as React.Key}
                  inputType="text"
                  defaultValue={fields.email.initialValue as React.HTMLInputTypeAttribute}
                />
              </div>

              <div className="sm:col-span-4">
                <Text__
                  labelName="Username"
                  name={fields.username.name}
                  key={fields.username.key as React.Key}
                  inputType="text"
                  defaultValue={fields.username.initialValue as React.HTMLInputTypeAttribute}
                />
              </div>

              <div className="sm:col-span-2">
                <PasswordBox
                  labelName="Password"
                  inputType="password"
                  name={fields.password.name}
                  key={fields.password.key as React.Key}
                  defaultValue={fields.password.initialValue as React.HTMLInputTypeAttribute}
                  showEyeIcon={true}
                />
              </div>

              <div className="sm:col-span-2">
                <PasswordBox
                  labelName="Confirm Password"
                  inputType="password"
                  name={fields.passwordConfirm.name}
                  key={fields.passwordConfirm.key as React.Key}
                  defaultValue={fields.passwordConfirm.initialValue as React.HTMLInputTypeAttribute}
                  showEyeIcon={true}
                />
              </div>

              <div className="sm:col-span-4 text-center">
                <Button_ type="submit" className=" px-20" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </Button_>
              </div>

              <div className="sm:col-span-4 text-center text-sm ">
                <p>
                  Do you have an account?&nbsp;
                  <Link className="underline text-main-dark" href="http://localhost:3000/signin">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
