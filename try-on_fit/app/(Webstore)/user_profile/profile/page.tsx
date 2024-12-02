"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import TextBde_Dsble from "@/app/components/TextBde_Dsble";
import { customFetch } from "@/app/utils/auth";

interface UserProfileProps {
  first_name: string;
  last_name: string;
  email: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  district: string;
  postal_code: string;
}

const UserProfilePage: React.FC = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserProfileProps>({
    first_name: "",
    last_name: "",
    email: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    district: "",
    postal_code: "",
  });

  const [customer_id, setCustomer_id] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the logged-in user's customer ID and user information
    const fetchUserData = async () => {
      try {
        const user = await customFetch("/auth/getUserById", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (user && user.customer_id) {
          setCustomer_id(user.customer_id);

          // Fetch user data using the retrieved customer_id
          const userData = await customFetch(
            "http://localhost:8080/customer/getCustomerByCustomer_id?customer_id=${user.customer_id}",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (userData) {
            setUserInfo(userData);
          } else {
            console.error("Failed to fetch user data");
          }
        } else {
          console.error("Failed to retrieve customer ID");
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
              <TextBde_Dsble
                labelName="First Name"
                name="first_name"
                inputType="text"
                defaultValue={userInfo.first_name}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextBde_Dsble
                labelName="Last Name"
                name="last_name"
                inputType="text"
                defaultValue={userInfo.last_name}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextBde_Dsble
                labelName="Email"
                name="email"
                inputType="text"
                defaultValue={userInfo.email}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextBde_Dsble
                labelName="Address Line 1"
                name="address_line_1"
                inputType="text"
                defaultValue={userInfo.address_line_1}
                disabled={true}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextBde_Dsble
                labelName="Address Line 2"
                name="address_line_2"
                inputType="text"
                defaultValue={userInfo.address_line_2}
                disabled={true}
              />
            </div>
          </div>

          <div className="border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6">
              Address Information
            </h2>
            <div className="my-4 mx-6">
              <TextBde_Dsble
                labelName="City"
                name="city"
                inputType="text"
                defaultValue={userInfo.city}
                disabled={true}
              />
            </div>
            <div className="my-4 mx-6">
              <TextBde_Dsble
                labelName="District"
                name="district"
                inputType="text"
                defaultValue={userInfo.district}
                disabled={true}
              />
            </div>
          </div>

          <div className="border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6">Postal Code</h2>
            <div className="my-4 mx-6">
              <TextBde_Dsble
                labelName="Postal Code"
                name="postal_code"
                inputType="text"
                defaultValue={userInfo.postal_code}
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
