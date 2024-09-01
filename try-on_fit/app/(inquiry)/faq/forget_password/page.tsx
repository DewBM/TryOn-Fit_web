"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const ForgotPasswordFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="What do I do if I forget my password?"
          description="If you've forgotten your password, don't worry. You can easily reset it by following these steps:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Go to the Login Page:
                  <ul>
                    Navigate to the login page of our platform. You can find the
                    login link on the homepage or in the top-right corner.
                  </ul>
                </li>
                <li>
                  Click on "Forgot Password?":
                  <ul>
                    Under the login fields, click on the "Forgot Password?"
                    link. This will take you to the password recovery page.
                  </ul>
                </li>
                <li>
                  Enter Your Email Address:
                  <ul>
                    On the password recovery page, enter the email address
                    associated with your account and click "Submit."
                  </ul>
                </li>
                <li>
                  Check Your Email:
                  <ul>
                    You'll receive an email with instructions on how to reset
                    your password. Follow the link in the email to create a new
                    password.
                  </ul>
                </li>
                <li>
                  Reset Your Password:
                  <ul>
                    Enter your new password in the provided fields and confirm
                    it. Make sure it's something secure yet memorable.
                  </ul>
                </li>
                <li>
                  Log in with Your New Password:
                  <ul>
                    After resetting your password, return to the login page and
                    sign in with your new credentials.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={[
            "/images/faq/login.png",
            "/images/forgot_password.png",
            "/images/email_recovery.png",
            "/images/reset_password.png",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordFAQPage;
