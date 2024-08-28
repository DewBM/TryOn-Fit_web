"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const UpdateAccountInfoFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How do I update my account information?"
          description="Keeping your account information up-to-date is important. Follow these steps to update your details:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Log in to Your Account:
                  <ul>
                    Start by logging into your account using your email and password.
                  </ul>
                </li>
                <li>
                  Go to Account Settings:
                  <ul>
                    Once logged in, navigate to the 'Account Settings' or 'Profile' section, usually found in the dropdown menu under your account name.
                  </ul>
                </li>
                <li>
                  Update Your Information:
                  <ul>
                    In the Account Settings section, you can update your personal information, such as your name, email, password, address, and contact details. Make sure to save any changes.
                  </ul>
                </li>
                <li>
                  Verify Changes:
                  <ul>
                    Some changes, like updating your email address, may require verification. 
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/login.png", "/images/account_settings.png", "/images/update_info.png", "/images/verify_changes.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateAccountInfoFAQPage;
