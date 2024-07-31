import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import { useFormState } from "react-dom";
import { LoginSchema } from "@/app/utils/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React from "react";
import Form from "@/app/components/Form";

function page() {
  return (
    <div className="grid bg-main-lighter lg:grid-cols-12 mt-4 max-w-xl mb-0 sm:grid-cols-6 rounded mx-8 ">
      <div className="lg:col-span-4 ">
        <Image
          src="/images/profile_pic.webp"
          alt=""
          width={100}
          height={100}
          className=" rounded-l-lg shadow-xl border-1 lg:col-start-1 "
        />
      </div>
      <div className="lg:col-span-7 lg:col-start-5">
        <div className="lg:col-span-7 ">My Profile</div>
        <TextBox
          labelName="Full Name"
          name="Full_name"
          inputType="text"
          key="F_name"
          defaultValue="Matheesha Pathirana"
          disabled={true}
        />
      </div>
    </div>
  );
}

export default page;
