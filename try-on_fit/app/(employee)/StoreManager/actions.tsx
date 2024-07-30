'use server'
import { redirect } from 'next/navigation'
import { customFetch } from "@/app/utils/auth";
import { parseWithZod } from '@conform-to/zod';


export async function createEmployee(prevState: unknown, formData: FormData) {
    
  
  const data = {
    firstName: formData.get('EmpAdd-Fnam'),
    lastName: formData.get('EmpAdd-Lname"'),
    email: formData.get('EmpAdd-email'),
    phone: formData.get('EmpAdd-phone'),
    employeeRole: formData.get('signup-gender'),
    gender: formData.get('signup-gender'),
    streetAddress: formData.get('EmpAdd-address1'),
    city: formData.get('EmpAdd-address2'),
    state: formData.get('state'),
  };
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(data);
  
    const resp = await customFetch("/", params);
    if (resp) {
      if (resp.isSuccess) {
        redirect("/auth/employee");
      } else {
        // return {msg: resp.msg}
      }
    }
  }
  