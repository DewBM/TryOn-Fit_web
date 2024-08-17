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
          topic="How do I use the Virtual Fit-On feature?"
          description="Our Virtual Fit-On feature allows you to see how clothes will look on you before making a purchase. Follow these simple steps to get started:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  <b> Verify Your Image:</b>{" "}
                  <ul>
                    Begin by uploading a clear and full-body image of yourself.
                  </ul>
                  <ul>
                    Ensure the image meets our guidelines for proper lighting,
                    posture, and background.
                  </ul>
                  <ul>
                    Once your image is uploaded, we will verify it according to
                    our constraints. This step is essential to ensure accurate
                    virtual fitting.
                  </ul>
                </li>
                <li>
                  <b>Add Items to Fit-On:</b>

                  <ul>
                    Select up to 5 items that you’d like to try on virtually.{" "}
                  </ul>
                  <ul>
                    Add these items to your Fit-On room by clicking the "Add to
                    Fit-On" button.
                  </ul>
                </li>
                <li>
                  <b> Visit the Fit-On Room:</b>

                  <ul>
                    Once you’ve added your items, go to the Fit-On room. Adjust
                    the items as needed to see different angles and fits.
                  </ul>
                  <ul>
                    Here, you’ll be able to see how each of the selected items
                    fits on the image you uploaded earlier.
                  </ul>
                  <li>
                    <b> Finalize Your Choices:</b>
                  </li>

                  <ul>
                    If you’re happy with how the items look, you can proceed to
                    add them to your cart and complete your purchase.
                  </ul>

                  <ul>
                    If not, feel free to go back to the catalog and explore more
                    options.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={["/images/faq/add_fiton.png", "/images/faq/fiton.png"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
