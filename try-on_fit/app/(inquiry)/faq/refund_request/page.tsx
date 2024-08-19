"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const RefundRequestFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How do I request a refund?"
          description="To request a refund, you'll need to place an inquiry request with our customer support team. Follow these steps:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Go to the Orders Section:
                  <ul>
                    Log in to your account and navigate to the 'Orders' section
                    to find the order you want to request a refund for.
                  </ul>
                </li>
                <li>
                  Select the Returns:
                  <ul>
                    Click on the specific order for which you want to request a
                    refund. Then give the reason to return that order.
                  </ul>
                </li>
                <li>
                  Click on return Button:
                  <ul>
                    Click on the Return button at the bottom of the page to send
                    a refund request .
                  </ul>
                </li>
                <li>
                  Await Customer Support:
                  <ul>
                    Our customer support team will review your request and get
                    back to you with further instructions or confirmation of
                    your refund.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={[
            "/images/faq/order_deliverd.png",
            "/images/faq/refund_details.png",
            "/images/faq/return.png",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default RefundRequestFAQPage;
