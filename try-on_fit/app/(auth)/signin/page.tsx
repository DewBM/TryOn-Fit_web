"use client";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/images/img_signIn.jpg";
import { useFormState } from "react-dom";
import { signin } from "../actions";
import { LoginSchema } from "@/app/utils/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React from "react";
import Form from "@/app/components/Form";


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
    <div className="grid  lg:grid-cols-8 mb-0  rounded mx-8 ">
      <div className="lg:col-span-2 lg:col-start-3">
        <Image
          src={signupimg}
          alt="Auth Image"
          className=" rounded-l-lg shadow-xl mx-auto my-auto lg:col-span-3"
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-5">
        <form
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
          className="bg-main-lighter shadow-xl rounded-r-lg px-8 pt-3 pb-8 mb-1"
          noValidate
        >
          <div className=" sm:col-span-4 text-4xl font-extrabold 	mb-5">
            <h1>Log In</h1>
          </div>

          <div className="sm:col-span-4 px-0 mt-1.5">
            <TextBox
              labelName={"Username"}
              name={fields.username.name}
              key={fields.username.key as React.Key}
              inputType="text"
              defaultValue={
                fields.username.initialValue as React.HTMLInputTypeAttribute
              }
            />
            <div className="text-xs text-red-400">{fields.username.errors}</div>
          </div>
          <div className="sm:col-span-4 mb-0 px-0 mt-2">
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
            <div className="text-xs text-red-400">{fields.password.errors}</div>
          </div>
          <div className="sm:col-span-4 font-medium leading-6 text-sm ml-44">
            <Link
              className="underline  text-red-400"
              href="http://localhost:8080/signup"
            >
              Froget password ?
            </Link>
          </div>
          <div className="sm:col-span-4 px-0 ">
            <Button type="submit" className="py-1.5 ml-8 px-24 m-4">
              Sign In
            </Button>
          </div>
          <div className="sm:col-span-4 text-stone-500 ml-8 leading-6 text-sm	mb-0">
            <p className="text-xs">
              Don't have an account ?
              <Link
                className="underline text-main-dark"
                href="http://localhost:8080/signup"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
