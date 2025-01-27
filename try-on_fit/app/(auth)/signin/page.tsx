//singinn UI change new correct
"use client";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import Text__ from "@/app/components/Text__";
import Image from "next/image";
import signin_img from "../../../public/images/signin_img.png";
import { useFormState } from "react-dom";
import { signin } from "../actions";
import { LoginSchema } from "@/app/utils/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React from "react";
import Form from "@/app/components/Form";
import Layout from "../layout";


export default function Signin() {
  const [lastResult, action] = useFormState(signin, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: LoginSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <Layout>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${signin_img.src})` }}
      >
        <div className="flex justify-center items-center h-full">
        <div className="w-96 ml-2">
        <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="  px-8 pt-3 pb-8 "
        noValidate
      >
        <div className="sm:col-span-4 text-5xl font-extrabold mb-6 mt-3 ml-20">
          <h1>Login</h1>
        </div>
  
        <div className="sm:col-span-4 px-0 mt-10 ">
          <Text__
            labelName={"Username"}
            name={fields.username.name}
            key={fields.username.key as React.Key}
            inputType="text"
            defaultValue={
              fields.username.initialValue as React.HTMLInputTypeAttribute
            }
          />
          <div className="text-xs text-red-500 min-h-[1.25rem]">
            {fields.username.errors}
          </div>
        </div>
  
        <div className="sm:col-span-4 mb-0 px-0">
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
          <div className="text-xs text-red-500 min-h-[1.25rem]">
            {fields.password.errors}
          </div>
        </div>
  
        <div className="sm:col-span-4 font-medium leading-6 text-sm">
          <Link
           className="text-main-dark"
            href="http://localhost:8081/signup"
          >
            Forget password?
          </Link>
        </div>
  
        <div className="sm:col-span-4 px-0 ml-4">
          <Button type="submit" className="py-1.5 ml-8 px-20 m-2 ml-8">
            Sign In
          </Button>
        </div>
  
        <div className="sm:col-span-4 mt-0  ml-8 text-stone-500 ml-8 leading-6 text-sm mb-0">
          <p className="text-xs ml-4 mt-0">
            Don't have an account?
            <Link className="underline text-main-dark" href="http://localhost:8081/signup">
              Register here
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
 