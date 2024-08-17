"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const CreateAccountFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How do I create an account?"
          description="Creating an account on our platform is quick and easy. Follow these steps to get started:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Go to the Sign-Up Page:
                  <ul>
                    On the homepage, click on the 'Sign Up' or 'Create Account' button, usually located in the top-right corner.
                  </ul>
                </li>
                <li>
                  Fill in Your Details:
                  <ul>
                    Provide your email address, create a password, and fill in any other required information such as your name and contact details.
                  </ul>
                </li>
                <li>
                  Verify Your Email:
                  <ul>
                    After submitting the sign-up form, you'll receive a verification email. Click on the verification link to confirm your email address.
                  </ul>
                </li>
                <li>
                  Complete Your Profile:
                  <ul>
                    Once your email is verified, you can log in to your account and complete your profile by adding any additional information or preferences.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/signup.png", "/images/fill_details.png", "/images/email_verification.png", "/images/complete_profile.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccountFAQPage;
