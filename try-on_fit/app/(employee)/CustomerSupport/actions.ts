'use client'
import { customFetch } from "../../utils/auth";
import {InquiryFormSchema} from "../CustomerSupport/schema";
import { parseWithZod } from '@conform-to/zod';


export async function inquiryform(prevState: unknown, formData : FormData) {

    const submission = parseWithZod(formData, {
        schema: InquiryFormSchema,
      });
    
      if (submission.status !== "success") {
        return submission.reply();
      }

   const inquiryData = {
      orderId: formData.get("orderId"),
      productId: formData.get("productId"),
      customerId: formData.get("customerId"),
      name: formData.get("name"),
      contactNumber: formData.get("contactNumber"),
      issue: formData.get("issue"),
      image: formData.get("image"),
      additionalcomments: formData.get("additionalcomments"),
   };

   const params = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryData),
   };

   const resp = await customFetch("/inquiryForm", params);
   console.log('New Response: ', resp);
   console.log(params);

   if (resp) {
      if (resp.isSuccess) {
         return {msg: "Inquiry Submitted Successfully"};
      }
      else {
         return {msg: resp.msg}
      }
   }
   else
      return {msg: "Server Error"};
}