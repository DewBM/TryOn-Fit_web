"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const RefundProcessingTimeFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How long does it take to process a refund?"
          description="The time it takes to process a refund may vary depending on several factors. Here’s an overview:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Refund Request Confirmation:
                  <ul>
                    Once you submit a refund request through our inquiry system, our customer support team will review your request. This usually takes 1-2 business days.
                  </ul>
                </li>
                <li>
                  Processing the Refund:
                  <ul>
                    After approval, the refund process typically takes an additional 3-5 business days. This time frame depends on your payment method and financial institution.
                  </ul>
                </li>
                <li>
                  Receiving the Refund:
                  <ul>
                    Once processed, the refund will be credited back to your original payment method. Depending on your bank or credit card provider, this may take an additional 2-7 business days.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/refund_confirmation.png", "/images/refund_processing.png", "/images/refund_received.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default RefundProcessingTimeFAQPage;
