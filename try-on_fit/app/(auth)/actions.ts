'use client'

import { redirect } from 'next/navigation'
import { customFetch } from "../utils/auth";
import { parseWithZod } from '@conform-to/zod';
import { LoginSchema } from '../utils/schema';
import { SignUpSchema } from "../utils/schema";

export async function signin(prevState: unknown, formData: FormData) {

   const submission = parseWithZod(formData, {
      schema: LoginSchema,
   });

   if (submission.status !== 'success') {
      return submission.reply();
   }

   const signinData = {
     username: formData.get("username"),
     password: formData.get("password"),
   };

   const params = {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(signinData),
   };

    const resp = await customFetch("/auth/signin", params);
    console.log('New Response: ', resp);
   
   if (resp) {
      if (resp.isSuccess) {

        if (resp.user_id) {
          localStorage.setItem("user_id", resp.user_id.toString());
          console.log("User ID saved to localStorage:", resp.user_id);
       } else{
        console.log("not saved userid")
       }


         switch (resp.role) {
            case "ADMIN":
               redirect('/StoreManager');
            
            case "SK":
               redirect('/StockKeeper');
               
            case "CS":
               redirect('/CustomerSupport')
   
            case 'DC':
               redirect('/DistributionCoordinator');
         
            default:
               redirect('/');
         }
      }
      else {
         // return {msg: resp.msg}
      }
      const userId = localStorage.getItem('user_id');
   }
   // else
      // return {msg: "Server Error"};
}

export async function signup(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: SignUpSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const signupData = {
    username: formData.get('username'),
    firstName: formData.get("First Name"),
    lastName: formData.get("Last Name"),
    gender: formData.get("Gender"),
    email: formData.get("Email"),
    phoneNumber: formData.get("Phone Number"),
    address: formData.get("Address"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  };

  const resp = await customFetch("/auth/signup", params);
  if (resp) {
    if (resp.isSuccess) {
      redirect("/signin");
    } else {
      // return {msg: resp.msg}
    }
  }
}
