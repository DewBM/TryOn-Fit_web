"use client";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TextB_Dsble from "@/app/components/TextB_Dsble";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { customFetch } from "@/app/utils/auth";

interface UserProfileProps {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  shippingAddress_1: string;
  shippingAddress_2: string;
  creditCard: string;
}

const UserProfilePage: React.FC = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserProfileProps>({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    shippingAddress_1: "",
    shippingAddress_2: "",
    creditCard: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const customer_id = "customer_id_here"; 

        const response = await fetch(
          `http://localhost:8080/customer/${customer_id}`, 
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data); 
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

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
      <div className="grid bg-main lg:grid-cols-12 my-4 w-auto mb-0 sm:grid-cols-6 rounded mx-8">
        <div className="lg:col-span-3 mt-6 mb-12 border rounded-md flex flex-col justify-center items-center h-[400px]">
          <Image
            src="/images/Profile_Photo.webp"
            alt="Profile Photo"
            width={200}
            height={200}
            className="border-1 rounded-full shadow-2xl"
          />
          <div className="mt-4 text-lg font-bold">{userInfo.email}</div>
        </div>

        <div className="lg:col-span-9 p-2 lg:col-start-4 mx-4 my-4">
          <div className="grid lg:grid-cols-12 border rounded p-4">
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
                defaultValue={userInfo.fullName}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextB_Dsble
                labelName="Email"
                name="email"
                inputType="text"
                key="email"
                defaultValue={userInfo.email}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextB_Dsble
                labelName="Mobile"
                name="mobile"
                inputType="text"
                key="mobile"
                defaultValue={userInfo.mobile}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextB_Dsble
                labelName="Gender"
                name="gender"
                inputType="text"
                key="gender"
                defaultValue={userInfo.gender}
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
                defaultValue={userInfo.shippingAddress_1}
                disabled={true}
              />
            </div>
            <div className="my-4 mx-6">
              <TextB_Dsble
                labelName="Billing Address"
                name="billingAddress"
                inputType="text"
                key="billingAddress"
                defaultValue={userInfo.shippingAddress_2}
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
                defaultValue={userInfo.creditCard}
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

export default UserProfilePage;
