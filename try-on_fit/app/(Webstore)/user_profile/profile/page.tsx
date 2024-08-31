"use client";
import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Update import statement
import React from "react";
import TextB_Dsble from "@/app/components/TextB_Dsble";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

interface UserProfileProps {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  shippingAddress_1: string;
  shippingAddress_2: string;
  creditCard: string;
}

const userInfo: UserProfileProps = {
  fullName: "Matheesha Pathirana",
  email: "matheeshapathirana@gmail.com",
  mobile: "0776677890",
  gender: "Male",
  shippingAddress_1: "123, Nugegoda.",
  shippingAddress_2: "456, Papiliyana, Nugegoda.",
  creditCard: "**** **** **** 1234",
};

const UserProfilePage: React.FC<UserProfileProps> = ({
  fullName,
  email,
  mobile,
  gender,
  shippingAddress_1,
  shippingAddress_2,
  creditCard,
}) => {
  const router = useRouter();

  const handleProfile = () => {
    router.push("/user_profile/profile/edit_profile");
  };

  return (
    <div>
      <NavBar />
      <div className="relative mt-5 mb-4 mx-3 p-4">
        <button
          onClick={handleProfile}
          className="absolute top-0 right-0 bg-white border-main-dark border-1 text-main-dark px-4 py-2 rounded-md hover:bg-main-dark hover:text-white z-10"
        >
          Edit Profile
        </button>
      </div>
      <div className="grid bg-main lg:grid-cols-12 my-4 w-auto mb-0 sm:grid-cols-6 rounded mx-8 ">
        <div className="lg:col-span-3 mt-6 mb-12 border rounded-md flex flex-col justify-center items-center h-[400px]">
          <Image
            src="/images/Profile_Photo.webp"
            alt=""
            width={200}
            height={200}
            className="border-1 rounded-full shadow-2xl"
          />
          <div className="mt-4 text-lg font-bold">{fullName}</div>
        </div>

        <div className="lg:col-span-9 p-2 lg:col-start-4 mx-4 my-4 ">
          <div className="grid lg:grid-cols-12 border rounded p-4 ">
            <div className="lg:col-span-12">
              <h2 className="text-2xl font-bold mb-6 mx-6">
                Personal Information
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextB_Dsble
                labelName="Full Name"
                name="Full_name"
                inputType="text"
                key="F_name"
                defaultValue={fullName}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextB_Dsble
                labelName="Email"
                name="email"
                inputType="text"
                key="email"
                defaultValue={email}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextB_Dsble
                labelName="Mobile"
                name="mobile"
                inputType="text"
                key="mobile"
                defaultValue={mobile}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextB_Dsble
                labelName="Gender"
                name="gender"
                inputType="text"
                key="gender"
                defaultValue={gender}
                disabled={true}
              />
            </div>
          </div>

          <div className="border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6">
              Address Information
            </h2>
            <div className="my-4 mx-6">
              <TextB_Dsble
                labelName="Shipping Address"
                name="shippingAddress"
                inputType="text"
                key="shippingAddress"
                defaultValue={shippingAddress_1}
                disabled={true}
              />
            </div>
            <div className="my-4 mx-6">
              <TextB_Dsble
                labelName="Billing Address"
                name="billingAddress"
                inputType="text"
                key="billingAddress"
                defaultValue={shippingAddress_2}
                disabled={true}
              />
            </div>
          </div>

          <div className="border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6">Payment Methods</h2>
            <div className="my-4 mx-6">
              <TextB_Dsble
                labelName="Saved Credit Card"
                name="creditCard"
                inputType="text"
                key="creditCard"
                defaultValue={creditCard}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Profile: React.FC = () => (
  <UserProfilePage
    fullName={userInfo.fullName}
    email={userInfo.email}
    mobile={userInfo.mobile}
    gender={userInfo.gender}
    shippingAddress_1={userInfo.shippingAddress_1}
    shippingAddress_2={userInfo.shippingAddress_2}
    creditCard={userInfo.creditCard}
  />
);

export default Profile;
