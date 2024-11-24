import { customFetch } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import {EmployeeRegistrationSchema,supplierRegistrationSchema} from "../StoreManager/stockManagerSchema"
import { parseWithZod } from "@conform-to/zod";
import { date } from "zod";

export async function createEmployee(prevState: unknown, formData: FormData) {
  const currentDate = new Date().toISOString();
  console.log(currentDate);
  const submission = parseWithZod(formData, {
    schema: EmployeeRegistrationSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const signupData = {
    first_name: formData.get('firstName'),
    last_name: formData.get('lastName'),
    email: formData.get('email'),
    contact_number: formData.get('phone'),
    role: formData.get('employeeRole'),
    // gender: formData.get('gender'),
    // streetAddress: formData.get('streetAddress'),
    // city: formData.get('city'),
    // state: formData.get('stateProvince'),
    enrolled_date  : currentDate,
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  };

  const resp = await customFetch("/employee", params);
  if (resp) {
    if (resp.isSuccess) {
      redirect("/StoreManager/employee");
    } else {
      // handle failure
    }
  }
}
 





export async function creatSupplier(prevState: unknown, formData: FormData) {
  console.log("formData");
  const currentDate = new Date().toISOString().split('T')[0];

  const submission = parseWithZod(formData, {
    schema: supplierRegistrationSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
    const streetAddress = formData.get('streetAddress');
    const city = formData.get('city');
    const state = formData.get('stateProvince');

    const Address = `${streetAddress} ${city} ${state}`;
  const supData = {
    supplier_id: formData.get('supid'),
    first_name: formData.get('firstName'),
    last_name: formData.get('lastName'),
    email: formData.get('email'),
    contact_no: formData.get('phone'),
    address : Address,
    brand_name : formData.get('brandName'),
    status : formData.get('availability'),
    register_date : currentDate,
    // gender: formData.get('gender'),
    // streetAddress: formData.get('streetAddress'),
    // city: formData.get('city'),
    // state: formData.get('stateProvince'),
  };
  console.log(supData);

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supData),
  };

  const resp = await customFetch("/supplier", params);
  if (resp) {
    if (resp.isSuccess) {
      redirect("/StoreManager/supplier");
    } else {
      // handle failure
    }
  }
}
