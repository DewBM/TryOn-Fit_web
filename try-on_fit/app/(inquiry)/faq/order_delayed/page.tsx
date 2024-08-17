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
          topic="How do I request a refund?"
          description="Steps to request a refund."
          content={
            <div>
              <p>
                If your order has not arrived by the estimated delivery date, we
                recommend taking the following steps:
              </p>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  {" "}
                  Check Your Order Status:
                  <ul>
                    First, visit the Orders section in your account to verify
                    the current status of your order. Sometimes, there might be
                    updates or notifications regarding delays.
                  </ul>
                </li>
                <li>
                  Allow Extra Time:
                  <ul>
                    In some cases, there might be unexpected delays due to
                    factors like weather conditions, logistical issues, or other
                    unforeseen circumstances. Please allow an additional 1-2
                    business days for your order to arrive.
                  </ul>
                </li>
                <li>
                  Report a Delayed Order:
                  <ul>
                    If your order is still delayed after allowing extra time,
                    you can report the issue directly to our customer support
                    team. Go to the Orders section in your account, find the
                    delayed order, and click on the Report an Issue or Inquire
                    About Order button.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/inquiry.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
