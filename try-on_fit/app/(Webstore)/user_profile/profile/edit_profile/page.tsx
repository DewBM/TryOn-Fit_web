"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";

interface UserProfileProps {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  shippingAddress_1: string;
  shippingAddress_2: string;
  creditCard: string;
}

const EditUserProfilePage: React.FC = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<UserProfileProps>({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    shippingAddress_1: "",
    shippingAddress_2: "",
    creditCard: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const userId = params.get("userId");

    if (userId) {
      fetch(`/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
  };

  return (
    <div>
      <NavBar />
      <div className="relative  mt-8 mr-12 p-4">
        <button
          onClick={handleSubmit}
          className="absolute top-0 right-0 bg-main-dark border-main-dark border-1 text-white px-4 py-2 rounded-md hover:bg-white hover:text-main-dark"
        >
          Save Changes
        </button>
      </div>
      <div className="grid bg-main lg:grid-cols-12 my-4 w-auto mb-0 sm:grid-cols-6 rounded mx-8">
        <div className="relative lg:col-span-3 mt-6 mb-12 border rounded-md flex flex-col justify-center items-center h-[400px]">
          <Image
            src="/images/Profile_Photo.webp"
            alt="Profile Photo"
            width={200}
            height={200}
            className="border-1 rounded-full shadow-2xl"
          />
          <button
            className="absolute top-2 right-2 bg-white  text-main-dark rounded-full p-2 hover:bg-main-dark hover:text-white"
            title="Edit Photo"
            onClick={() => console.log("Edit Photo Clicked")}
          >
            <AiOutlineEdit />
          </button>
          <div className="mt-4 text-lg font-bold">{formData.fullName}</div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-9 p-2 lg:col-start-4 mx-4 my-4"
        >
          <div className="relative grid lg:grid-cols-12 border rounded p-4">
            <div className="lg:col-span-12">
              <h2 className="text-2xl font-bold mb-6 mx-6 flex items-center">
                Personal Information
                <button
                  className="absolute top-2 right-2 bg-white  text-main-dark rounded-full p-1 hover:bg-main-dark hover:text-white"
                  title="Edit Personal Information"
                  onClick={() =>
                    console.log("Edit Personal Information Clicked")
                  }
                >
                  <AiOutlineEdit className="text-lg" />
                </button>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextBox
                labelName="Full Name"
                name="fullName"
                inputType="text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextBox
                labelName="Email"
                name="email"
                inputType="text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-1 my-4 mx-6">
              <TextBox
                labelName="Mobile"
                name="mobile"
                inputType="text"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 my-4 mx-6">
              <TextBox
                labelName="Gender"
                name="gender"
                inputType="text"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6 flex items-center">
              Address Information
              <button
                className="absolute top-2 right-2 bg-white text-main-dark rounded-full p-1 hover:bg-main-dark hover:text-white"
                title="Edit Address Information"
                onClick={() => console.log("Edit Address Information Clicked")}
              >
                <AiOutlineEdit className="text-lg" />
              </button>
            </h2>
            <div className="my-4 mx-6">
              <TextBox
                labelName="Shipping Address"
                name="shippingAddress_1"
                inputType="text"
                value={formData.shippingAddress_1}
                onChange={handleChange}
              />
            </div>
            <div className="my-4 mx-6">
              <TextBox
                labelName="Billing Address"
                name="shippingAddress_2"
                inputType="text"
                value={formData.shippingAddress_2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative border rounded p-4 my-6">
            <h2 className="text-2xl font-bold mb-6 mx-6 flex items-center">
              Payment Methods
              <button
                className="absolute top-2 right-2 bg-white text-main-dark rounded-full p-1 hover:bg-main-dark hover:text-white"
                title="Edit Payment Methods"
                onClick={() => console.log("Edit Payment Methods Clicked")}
              >
                <AiOutlineEdit className="text-lg" />
              </button>
            </h2>
            <div className="my-4 mx-6">
              <TextBox
                labelName="Saved Credit Card"
                name="creditCard"
                inputType="text"
                value={formData.creditCard}
                onChange={handleChange}
              />
            </div>
          </div>
          
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default EditUserProfilePage;
