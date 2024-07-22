'use server'

import { redirect } from 'next/navigation'
import { customFetch } from "../utils/auth";
import { parseWithZod } from '@conform-to/zod';
import { LoginSchema } from '../utils/schema';

export default async function signin(prevState: unknown, formData: FormData) {

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
   console.log(resp);
   if (resp) {
      if (resp.isSuccess) {
         switch (resp.role) {
            case "ADMIN":
               redirect('/store-manager');
            
            case "SK":
               redirect('/stock-keeper');
               
            case "CS":
               redirect('/customer-support')
   
            case 'DB':
               redirect('/distribution-coordinator');
         
            default:
               redirect('/');
         }
      }
      else {
         // return {msg: resp.msg}
      }
   }
   // else
      // return {msg: "Server Error"};
}