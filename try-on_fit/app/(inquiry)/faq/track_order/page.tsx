"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const FAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How can I track my order?"
          description="Steps to track your order."
          content={
            <div>
              <p>
                Once your order has been dispatched, you will receive a
                confirmation email with a tracking number. You can use this
                tracking number to monitor the status and location of your
                package. Simply follow these steps:
              </p>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  {" "}
                  Check Your Email:
                  <ul>
                    Look for an email from us with the subject line "Your Order
                    Has Been Shipped" or similar. This email contains your
                    tracking number.
                  </ul>
                </li>
                <li>
                  Track Your Order:
                  <ul>
                    You will be able to see the current status of your package,
                    including any updates on delivery times.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/track.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
