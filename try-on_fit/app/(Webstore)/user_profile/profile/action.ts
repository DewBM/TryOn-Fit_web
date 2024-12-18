

import { customFetch } from "@/app/utils/auth";
import { METHODS } from "http";
import { headers } from "next/headers";

// export const fetchCustomer = async () => {
  
//     const resp = await customFetch('/customer', {
//         method: "GET",
//         credentials: "include",
//     });
    
//     console.log("response:", resp);
  
//     if (resp) {
//       if (resp.isSuccess) {
//         return resp;
//       }else
//       return {msg: resp.msg}
//     }
//     else {
//       return {msg: "Server Error"};
//     }
   
//   }


// export const fetchCustomer = async (customerId: number | string) => {
//     // Validate that customerId is a valid number or string
//     if (!customerId || isNaN(Number(customerId))) {
//       console.error("Invalid customer ID:", customerId);
//       return { isSuccess: false, msg: "Invalid customer ID" };
//     }
  
//     const resp = await customFetch(`customer?customer_id=2`, {
//       method: "GET",
//       credentials: "include",
//     });
  
//     console.log("Response from customFetch:", resp);
  
//     if (resp && resp.isSuccess) {
//       return resp;
//     } else {
//       return { msg: resp?.msg || "Could not get customer data", isSuccess: false };
//     }
//   };
  


// actions/customerActions.ts

export const fetchCustomerDetails = async (customerId: number) => {
    const url = `http://localhost:8080/customer?customer_id=${customerId}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // Using your existing custom fetch function
    const response = await fetch(url, options);
    return response.json();
  };
  
  
  

