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
          topic="When will my order arrive?"
          description="Information about order delivery times."
          content={
            <div>
              <p>
                Your order will arrive within 3-5 business days. You can track
                the exact status of your order by visiting the Orders section in
                your account.
              </p>
              <ul className="list-disc ml-5 mt-3">
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days</li>
              </ul>
            </div>
          }
          images={["/images/faq/order.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
