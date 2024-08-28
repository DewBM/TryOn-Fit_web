"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const MeasurementRecommendationFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How can I get product recommendations according to body measurements?"
          description="We offer personalized clothing recommendations based on your body measurements. Here's how it works:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Provide Your Body Measurements:
                  <ul>
                    Start by entering your body measurements such as height,
                    chest, waist, and hips. You can do this by navigating to the
                    'Body Measurements' section in your profile.
                  </ul>
                </li>
                <li>
                  System Analysis:
                  <ul>
                    Our system will analyze your measurements and match them
                    with our clothing inventory to find the best-fitting items
                    for you.
                  </ul>
                </li>
                <li>
                  Receive Recommendations:
                  <ul>
                    After analyzing your measurements, the system will provide a
                    list of recommended clothing items tailored to your body
                    size and shape.
                  </ul>
                </li>
                <li>
                  Shop with Confidence:
                  <ul>
                    Browse through the recommended items, add your favorites to
                    your cart, and proceed with the purchase knowing they are a
                    great fit for your body type.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/body_measurement.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MeasurementRecommendationFAQPage;
