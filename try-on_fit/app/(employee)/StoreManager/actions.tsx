import { customFetch } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import {EmployeeRegistrationSchema} from "../StoreManager/stockManagerSchema"
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
