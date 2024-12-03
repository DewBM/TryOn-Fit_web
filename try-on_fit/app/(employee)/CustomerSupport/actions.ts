'use client'
import { customFetch } from "../../utils/auth";
import {InquiryFormSchema} from "../CustomerSupport/schema";
import { parseWithZod } from '@conform-to/zod';
import Swal from 'sweetalert2';

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
     //date: formData.get("date"),
   };
   
   console.log(inquiryData);
   const params = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryData),
   };


   try{
   const resp = await customFetch("/inquiryForm", params);
   //console.log('New Response: ', resp);
   //console.log(params);

   if (resp) {
      if (resp.isSuccess) {
        // Show success SweetAlert
        Swal.fire({
          title: 'Success!',
          text: 'Inquiry Submitted Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        return { msg: "Inquiry Submitted Successfully" };
      } else {
        // Show error SweetAlert for custom response
        Swal.fire({
          title: 'Error!',
          text: resp.msg || 'Submission failed. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return { msg: resp.msg };
      }
    } else {
      // Show error SweetAlert for server error
      Swal.fire({
        title: 'Error!',
        text: 'Server Error. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return { msg: "Server Error" };
    }
  } catch (error) {
    // Show error SweetAlert for exceptions
    Swal.fire({
      title: 'Error!',
      text: 'An unexpected error occurred. Please try again later.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
    return { msg: "Unexpected Error" };
  }
}
