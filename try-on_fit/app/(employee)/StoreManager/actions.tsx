import { customFetch } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import {EmployeeRegistrationSchema} from "../StoreManager/stockManagerSchema"
import { parseWithZod } from "@conform-to/zod";

export async function createEmployee(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: EmployeeRegistrationSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const signupData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    employeeRole: formData.get('employeeRole'),
    gender: formData.get('gender'),
    streetAddress: formData.get('streetAddress'),
    city: formData.get('city'),
    state: formData.get('state'),
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
