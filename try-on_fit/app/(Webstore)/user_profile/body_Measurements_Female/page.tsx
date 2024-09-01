"use client";
import React, { useState } from "react";
import font from "../../../../public/images/FF.png";
import back from "../../../../public/images/FB.png";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";

import Image from "next/image";

interface MeasurementState {
  frontImage: string;
  backImage: string;
  measurements: string[];
}

const MaleBodyMeasurementPage = () => {
  const [measurements, setMeasurements] = useState<MeasurementState>({
    frontImage: "",
    backImage: "",
    measurements: [],
  });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "frontImage" | "backImage"
  ) => {
    const files = e.target.files;
    if (files === null) {
      return; // or throw an error, depending on your requirements
    }
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setMeasurements((prevState) => ({ ...prevState, [side]: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    measurementType: string
  ) => {
    const isChecked = e.target.checked;
    setMeasurements((prevState) => {
      if (isChecked) {
        return {
          ...prevState,
          measurements: [...prevState.measurements, measurementType],
        };
      } else {
        return {
          ...prevState,
          measurements: prevState.measurements.filter(
            (m) => m !== measurementType
          ),
        };
      }
    });
  };

  const renderMeasurementInput = (measurementType: string) => {
    if (measurements.measurements.includes(measurementType)) {
      return (
        <input
          type="text"
          name={measurementType}
          placeholder={`0.0`}
          style={{ width: "100%", margin: "7px" }}
          className="border-slate-400" // Add this line
        />
      );
    }
    return null;
  };

  return (
    <div>
      <NavBar />
      <div className="w-1/2 mx-auto mt-10">
        <div className="container bg-main ">
          <p className=" ml-6 text-3xl font-semibold text-amber-950">
            Body Measurements
          </p>

          <div className="row">
            <div className="grid  lg:grid-cols-12 mb-0  rounded mx-8 ">
              <div className="lg:col-start-1 lg:col-span-3 ">
                <Image
                  src={font}
                  alt="Auth Image"
                  width={200}
                  height={100}
                  className="rounded-l-lg  lg:col-span-3 h-full object-cover"
                />
              </div>
              <div className="lg:col-span-3">
                <Image
                  src={back}
                  alt="Auth Image"
                  width={200}
                  height={100}
                  className="rounded-l-lg lg:col-span-3 h-full object-cover"
                />
                <div>
                  {measurements.measurements.includes("chest") && (
                    <hr
                      className={`absolute top-44 mt-7 ml-9 border-1 left-16 w-16 border-red-700 bg-red-700 ${
                        measurements.measurements.includes("chest")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "45.6%", left: "28.3%" }}
                    />
                  )}
                  {measurements.measurements.includes("underbust") && (
                    <hr
                      className={`absolute top-44 mt-7 ml-9 border-1 left-20 w-12 border-red-700 bg-red-700 ${
                        measurements.measurements.includes("underbust")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "48.7%", left: "28.78%" }}
                    />
                  )}
                  {measurements.measurements.includes("neck") && (
                    <hr
                      className={`absolute ml-7 top-32 mt-4  border-1 left-20 w-8 border-red-700 bg-red-700 ${
                        measurements.measurements.includes("neck")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "41.7%", left: "29.9%" }}
                    />
                  )}
                  {measurements.measurements.includes("west") && (
                    <hr
                      className={`absolute ml-5 top-60 mt-7 border-1 left-20 w-14 border-red-700 bg-red-700${
                        measurements.measurements.includes("west")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "53.2%", left: "29.6%" }}
                    />
                  )}
                  {measurements.measurements.includes("hip") && (
                    <hr
                      className={`absolute ml-3 top-64 mt-12 border-1 left-20 w-20 border-red-700 bg-red-700${
                        measurements.measurements.includes("hip")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "55%", left: "29.4%" }}
                    />
                  )}
                  {measurements.measurements.includes("Arm_Length") && (
                    <hr
                      className={`absolute ml-7 top-32 mt-7 border-1 left-40 h-28 border-red-700 bg-red-700 -rotate-12${
                        measurements.measurements.includes("Arm_Length")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "41%", left: "33.8%" }}
                    />
                  )}
                  {measurements.measurements.includes(
                    "Thigh_Circumference"
                  ) && (
                    <hr
                      className={`absolute ml-6 top-80 mt-6 border-1 left-28 w-9 border-red-700 bg-red-700${
                        measurements.measurements.includes(
                          "Thigh_Circumference"
                        )
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "63.5%", left: "31.3%" }}
                    />
                  )}
                  {measurements.measurements.includes("torso") && (
                    <hr
                      className={`absolute ml-5 top-32 mt-4 border-1 left-24 h-32 border-red-700 bg-red-700${
                        measurements.measurements.includes("torso")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "42%", left: "33%" }}
                    />
                  )}
                  {measurements.measurements.includes("nseam") && (
                    <hr
                      className={`absolute ml-12 top-64 mt-4 border-1 left-80 h-60 border-red-700 bg-red-700${
                        measurements.measurements.includes("nseam")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "57.6%", left: "41%" }}
                    />
                  )}
                  {measurements.measurements.includes("Calf_Circumference") && (
                    <hr
                      className={`absolute  top-96 mt-14 border-1 left-32 w-5 border-red-700 bg-red-700${
                        measurements.measurements.includes("Calf_Circumference")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "75%", left: "33%" }}
                    />
                  )}
                  {measurements.measurements.includes("sholder") && (
                    <hr
                      className={`absolute  ml-24 top-40 border-1 left-56 w-20 border-red-700 bg-red-700${
                        measurements.measurements.includes("sholder")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "45.6%", left: "35.3%" }}
                    />
                  )}
                  {measurements.measurements.includes("bicep") && (
                    <hr
                      className={`absolute top-44 mt-7 border-1 left-16 w-4 border-red-700 bg-red-700 ${
                        measurements.measurements.includes("bicep")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "47.5%", left: "29.6%" }}
                    />
                  )}
                  {/* {measurements.measurements.includes("underbust") && (
                    <hr
                      className={`absolute mb-20 border-1 left-16 w-20 border-red-700 bg-red-700 ${
                        measurements.measurements.includes("underbust")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ top: "51.5%", left: "28.5%" }}
                    />
                  )} */}
                </div>
              </div>
              <div className="lg:col-start-8 mt-10 lg:col-span-4 lg:grid lg:grid-rows-12">
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>Chest</label>
                    {renderMeasurementInput("chest")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white w-6 h-6 ml-7 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("chest")
                            ? prevState.measurements.filter(
                                (m) => m !== "chest"
                              )
                            : [...prevState.measurements, "chest"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("chest") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Neck</label>
                    {renderMeasurementInput("neck")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("neck")
                            ? prevState.measurements.filter((m) => m !== "neck")
                            : [...prevState.measurements, "neck"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("neck") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>West</label>
                    {renderMeasurementInput("west")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("west")
                            ? prevState.measurements.filter((m) => m !== "west")
                            : [...prevState.measurements, "west"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("west") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Hip</label>
                    {renderMeasurementInput("hip")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("hip")
                            ? prevState.measurements.filter((m) => m !== "hip")
                            : [...prevState.measurements, "hip"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("hip") ? "-" : "+"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>Arm</label>
                    {renderMeasurementInput("Arm_Length")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "Arm_Length"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "Arm_Length"
                              )
                            : [...prevState.measurements, "Arm_Length"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("Arm_Length")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Thigh</label>
                    {renderMeasurementInput("Thigh_Circumference")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "Thigh_Circumference"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "Thigh_Circumference"
                              )
                            : [
                                ...prevState.measurements,
                                "Thigh_Circumference",
                              ],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("Thigh_Circumference")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>Torso</label>
                    {renderMeasurementInput("torso")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("torso")
                            ? prevState.measurements.filter(
                                (m) => m !== "torso"
                              )
                            : [...prevState.measurements, "torso"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("torso") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Nseam</label>
                    {renderMeasurementInput("nseam")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("nseam")
                            ? prevState.measurements.filter(
                                (m) => m !== "nseam"
                              )
                            : [...prevState.measurements, "nseam"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("nseam") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>Sholder</label>
                    {renderMeasurementInput("sholder")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "sholder"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "sholder"
                              )
                            : [...prevState.measurements, "sholder"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("sholder")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Bicep</label>
                    {renderMeasurementInput("bicep")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-light text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes("bicep")
                            ? prevState.measurements.filter(
                                (m) => m !== "bicep"
                              )
                            : [...prevState.measurements, "bicep"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("bicep") ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-1">
                  <div className="lg:col-span-2">
                    <label>Band</label>
                    {renderMeasurementInput("underbust")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "underbust"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "underbust"
                              )
                            : [...prevState.measurements, "underbust"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("underbust")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 lg:row-span-2 lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Calf</label>
                    {renderMeasurementInput("Calf_Circumference")}
                  </div>
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-light text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "Calf_Circumference"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "Calf_Circumference"
                              )
                            : [...prevState.measurements, "Calf_Circumference"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("Calf_Circumference")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div>
                {/* <div className="grid grid-cols-6  lg:col-start-6">
                  <div className="lg:col-span-2">
                    <label>Calf</label>
                    {renderMeasurementInput("Calf_Circumference")}
                  </div>

                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-7 w-6 h-6 font-normal py-1 px-2 rounded flex justify-center items-center"
                      onClick={() => {
                        setMeasurements((prevState) => ({
                          ...prevState,
                          measurements: prevState.measurements.includes(
                            "Calf_Circumference"
                          )
                            ? prevState.measurements.filter(
                                (m) => m !== "Calf_Circumference"
                              )
                            : [...prevState.measurements, "Calf_Circumference"],
                        }));
                      }}
                    >
                      {measurements.measurements.includes("Calf_Circumference")
                        ? "-"
                        : "+"}
                    </button>
                  </div>
                </div> */}
                <div className="grid grid-cols-6  lg:col-start-1">
                  <div>
                    <button
                      className="bg-main-dark hover:bg-main-li text-white ml-3 w-6 h-6 px-8 font-normal py-1 mb-1 rounded flex justify-center items-center"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaleBodyMeasurementPage;
