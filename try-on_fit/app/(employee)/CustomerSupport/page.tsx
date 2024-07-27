import { useState } from "react";
import Header from "@/app/components/Header/index";
import CardDataStats from "@/app/components/DashboardCard";
import { FiMessageSquare, FiCheckSquare } from "react-icons/fi";
import Ratings from "@/app/components/CustomerRatings";
import InquiriesLineChart from "@/app/components/charts/InquiriesLineChart";
import FeedbackCard from "@/app/components/CustomerFeedbacks";
export default function Home() {
  

  return (
    <>
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-2 2xl:gap-8">
              <CardDataStats title="Total Inquiries Today" total="80">
                <div
                  className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
                  style={{
                    padding: "10px",
                    backgroundColor: "var(--main-background)",
                    boxShadow: "var(--main-drop-shadow)",
                  }}
                >
                  <FiMessageSquare
                    size={25}
                    style={{ stroke: "var(--main-dark)" }}
                  />
                </div>
              </CardDataStats>
              <CardDataStats title="Responded Inquiries" total="26">
                <div
                  className="rounded-full p-2 inline-block border-[0.5px] border-stroke"
                  style={{
                    padding: "10px",
                    backgroundColor: "var(--main-background)",
                    boxShadow: "var(--main-drop-shadow)",
                  }}
                >
                  <FiCheckSquare
                    size={25}
                    style={{ stroke: "var(--main-dark)" }}
                  />
                </div>
              </CardDataStats>
            </div>
            <div className="col-span-8">
              <div className="pt-6  font-bold text-lg">
              
                <InquiriesLineChart />
              </div>
            </div>
          </div>

          <div className="col-span-12  md:col-span-4 pl-2">
          <FeedbackCard /> 
          </div>
        </div>
      </div>
    </>
  );
}
