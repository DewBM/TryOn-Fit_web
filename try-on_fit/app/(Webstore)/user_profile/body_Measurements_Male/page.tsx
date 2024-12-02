"use client";
import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import { IoArrowForward } from "react-icons/io5"; 
import { IoArrowBack } from "react-icons/io5"; 

type MeasurementType =
  ""
  | "chest"
  | "underbust"
  | "neck"
  | "waist"
  | "hip"
  | "Arm_Length"
  | "Thigh_Circumference"
  | "torso"
  | "inseam"
  | "Calf_Circumference"
  | "sholder"
  | "bicep";

interface MeasurementState {
  measurements: Record<string, number | undefined>;
}

const MaleBodyMeasurementPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [measurements, setMeasurements] = useState<MeasurementState>({
    measurements: {
      chest: undefined,
      underbust: undefined,
      neck: undefined,
      waist: undefined,
      hip: undefined,
      Arm_Length: undefined,
      Thigh_Circumference: undefined,
      torso: undefined,
      inseam: undefined,
      Calf_Circumference: undefined,
      sholder: undefined,
      bicep: undefined,
    },
  });

  const handleMeasurementChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    measurementType: MeasurementType
  ) => {
    const value = parseFloat(e.target.value);
    setMeasurements((prevState) => ({
      ...prevState,
      measurements: { ...prevState.measurements, [measurementType]: value },
    }));
  };

  const handleNext = () => {
    if (currentStep < measurementTypes.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = measurements.measurements;

    try {
      const response = await fetch("http://localhost:8080/customer/measurements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include", // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error("Failed to send measurements");
      }

      const responseData = await response.json();
      console.log("Response from backend:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderMeasurementInput = (measurementType: MeasurementType) => {
    return (
      <input
        type="number"
        name={measurementType}
        placeholder="Enter measurement"
        value={measurements.measurements[measurementType] || ""}
        onChange={(e) => handleMeasurementChange(e, measurementType)}
        style={{
          width: "100%",
          marginBottom: "16px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    );
  };

  // Ensure chest is the first measurement
  const measurementTypes = [
    "",
    "chest",
    "underbust",
    "neck",
    "waist",
    "hip",
    "Arm_Length",
    "Thigh_Circumference",
    "torso",
    "inseam",
    "Calf_Circumference",
    "sholder",
    "bicep",
  ] as MeasurementType[];

  const currentMeasurement = measurementTypes[currentStep];

  return (
    <div>
      <NavBar />
      <div className="w-1/2 mx-auto mt-20 mb-20">
        <div className="container bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-semibold text-center text-amber-950 mb-6">
            Body Measurements
          </h1>

          {currentStep === 0 ? (
            // Start screen
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Add Your Body Measurement Here
              </h2>
              <Button
                onClick={() => setCurrentStep(1)}
                
                className="hover:bg-indigo-500 transition-colors duration-300"
              >
                Get Started <IoArrowForward className="inline-block ml-2" />
              </Button>
            </div>
          ) : (
            // Measurement input screen
            <div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">
                  {currentMeasurement.charAt(0).toUpperCase() + currentMeasurement.slice(1)}
                </label>
                {renderMeasurementInput(currentMeasurement)}
              </div>

              <div className="flex justify-between mt-6">
                {currentStep > 0 && (
                  <Button
                    onClick={handleBack}
                    
                    className="hover:bg-gray-400 transition-colors duration-300 px-6"
                  >
                    <IoArrowBack className="inline-block ml-2" />Back

                  </Button>
                )}

                {currentStep < measurementTypes.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    
                    className="hover:bg-indigo-500 transition-colors duration-300 px-6"
                  >
                    Next<IoArrowForward className="inline-block ml-2" />
                  </Button>
                ) : (
                  <Button
                    
                    className="hover:bg-indigo-500 transition-colors duration-300 px-6"
                  >
                    Submit Measurements
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaleBodyMeasurementPage;
