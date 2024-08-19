"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const ContactCustomerSupportFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How can I contact customer support?"
          description="If you need assistance, you can easily contact our customer support team by following these steps:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Visit the Help Center Page:
                  <ul>
                    Start by navigating to the FAQ section of our platform. You can find this link on the homepage or in the footer menu.
                  </ul>
                </li>
                <li>
                  Find the Relevant Topic:
                  <ul>
                    Browse through the FAQ topics to see if your question is already answered. If not, you can create a request.
                  </ul>
                </li>
                <li>
                  Click on "Request" Button:
                  <ul>
                    If you need further assistance, locate the "Request" button typically found at the bottom of the FAQ page. Click on it to create a support request.
                  </ul>
                </li>
                <li>
                  Fill Out the Request Form:
                  <ul>
                    Provide the necessary details in the request form, including your name, email address, and a description of your issue. Be as detailed as possible to help our support team assist you efficiently.
                  </ul>
                </li>
                <li>
                  Submit Your Request:
                  <ul>
                    Once you've filled out the form, click the "Submit" button. Our customer support team will review your request and get back to you as soon as possible.
                  </ul>
                </li>
                <li>
                  Check Your Email for a Response:
                  <ul>
                    You’ll receive an email confirmation that your request has been received. Our support team will respond to your inquiry through the email you provided.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/inquiry.png", "/images/faq/help_center.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactCustomerSupportFAQPage;
