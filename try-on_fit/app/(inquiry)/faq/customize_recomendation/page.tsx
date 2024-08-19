"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const CustomizeRecommendationFAQPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="Can I customize my recommendation settings?"
          description="Yes, you can customize your recommendation settings based on your body measurements. Here's how it works:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Login and Review:
                  <ul>
                    Each time you log in, we'll prompt you to review your
                    recommendation settings. You can choose whether to receive
                    recommendations based on your current body measurements.
                  </ul>
                </li>
                <li>
                  Update or Proceed:
                  <ul>
                    If you wish to update your body measurements, you can do so
                    at this stage. If not, you can proceed with the existing
                    measurements for recommendations.
                  </ul>
                </li>
                <li>
                  Regular Updates:
                  <ul>
                    For accuracy, we recommend updating your body measurements
                    every 6 months. However, you can choose to keep your
                    existing measurements if they haven't changed.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={[
            "/images/customize_settings.png",
            "/images/update_measurements.png",
            "/images/proceed_existing.png",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CustomizeRecommendationFAQPage;
