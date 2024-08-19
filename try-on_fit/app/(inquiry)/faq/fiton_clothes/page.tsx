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
          topic=" Can I save my Virtual Fit-On images?"
          description=" Due to privacy concerns, we do not allow the download of Virtual Fit-On images. These images will be automatically discarded once your session ends.
                  "
          content={
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
