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
import TextB_Dsble from "@/app/components/TextB_Dsble";

function page() {
  return (
    <div className="grid bg-main lg:grid-cols-12 mt-4 w-auto mb-0 sm:grid-cols-6 rounded mx-8 ">
      <div className="lg:col-span-3 mt-6 grid-row-1">
        <Image
          src="/images/Profile_Photo.webp"
          alt=""
          width={200}
          height={200}
          className="  border-1  rounded-full shadow-2xl"
        />
      </div>
      <div className="lg:col-span-9 p-2 lg:col-start-4">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-12 lg:col-start-1  text-orange-900 font-bold text-3xl mt-3 mb-5">
            My Profile
          </div>

          <div className="lg:col-span-5 lg:col-start-1 my-4">
            <TextB_Dsble
              labelName="Full Name"
              name="Full_name"
              inputType="text"
              key="F_name"
              defaultValue="Matheesha Pathirana"
              disabled={true}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-7  my-4 ">
            <TextB_Dsble
              labelName="Email"
              name="email"
              inputType="text"
              key="email"
              defaultValue="matheeshapathirana@gmail.com"
              disabled={true}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-1  my-4 ">
            <TextB_Dsble
              labelName="Mobile"
              name="mobile"
              inputType="text"
              key="mobile"
              defaultValue="0776677890"
              disabled={true}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-7  my-4">
            <TextB_Dsble
              labelName="Gender"
              name="gender"
              inputType="text"
              key="gender"
              defaultValue="Male"
              disabled={true}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-7  my-4">
            <Button type="submit" className=" bg-slate-400 m-1 mt-4 px-3 py-1">
              Update Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
