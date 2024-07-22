"use server";

import { redirect } from "next/navigation";
import { customFetch } from "../utils/auth";
import { parseWithZod } from "@conform-to/zod";
import { LoginSchema } from "../utils/schema";

export default async function signin(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: LoginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const signupData = {
    firstName: formData.get("First Name"),
    lastName: formData.get("Last Name"),
    gender: formData.get("Gender"),
    email: formData.get("Email"),
    phoneNumber: formData.get("Phone Number"),
    address: formData.get("Address"),
    password: formData.get("Password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  };

  const resp = await customFetch("/auth/signup", params, true);
  if (resp) {
    if (resp.isSuccess) {
      redirect("/auth/signin");
    } else {
      // return {msg: resp.msg}
    }
  }
}
