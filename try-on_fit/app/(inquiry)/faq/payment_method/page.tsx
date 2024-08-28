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
          topic=" What payment methods are accepted?"
          description="We offer a variety of secure payment options to make your shopping experience as convenient as possible. You can choose from the following methods:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  {" "}
                  Credit/Debit Cards:
                  <ul>
                    We accept all major credit and debit cards, including Visa,
                    MasterCard.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/payment.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
