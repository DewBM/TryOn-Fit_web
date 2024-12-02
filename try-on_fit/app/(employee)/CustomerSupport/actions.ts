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
      order_id: formData.get("order_id"),
      product_id: formData.get("product_id"),
      customer_id: formData.get("customer_id"),
      name: formData.get("name"),
      contact_num: formData.get("contact_num"),
      issue_type: formData.get("issue_type"),
      issue_description: formData.get("issue_description"),
      //image: formData.get("image"),
      additional_comments: formData.get("additional_comments"),
   };
   console.log("hii");
   console.log(inquiryData);
   const params = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryData),
   };

   const resp = await customFetch("/inquiryForm", params);
   //console.log('New Response: ', resp);
   //console.log(params);

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