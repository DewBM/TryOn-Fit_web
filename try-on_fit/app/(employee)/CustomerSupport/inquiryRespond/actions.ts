'use client';
import { customFetch } from "../../../utils/auth";
import Swal from 'sweetalert2';

export async function inquiryrespond(prevState: unknown, formData: FormData, inquiry_id?: number) {
   const inquiryRespondData = {
      inquiry_id, // Ensure the inquiry_id is explicitly passed
      solution: formData.get("solution"),
      status: "solved",
   };

   console.log(inquiryRespondData);
   const params = {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryRespondData),
   };

   try {
      const resp = await customFetch("/inquiryForm", params);

      if (resp?.isSuccess) {
         Swal.fire({
            title: 'Success!',
            text: 'Solved Successfully',
            icon: 'success',
            confirmButtonText: 'OK',
         });
         return { msg: "Solved Successfully" };
      } else {
         Swal.fire({
            title: 'Error!',
            text: resp?.msg || 'Failed. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
         });
         return { msg: resp?.msg || "Failed to solve" };
      }
   } catch (error) {
      Swal.fire({
         title: 'Error!',
         text: 'An unexpected error occurred. Please try again later.',
         icon: 'error',
         confirmButtonText: 'OK',
      });
      return { msg: "Unexpected Error" };
   }
}
