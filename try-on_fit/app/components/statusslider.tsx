import React from "react";
import { Slider } from "@nextui-org/react";

const StatusSlider: React.FC = () => {
  return (
    <div className=" h-[150px] w-[90%] rounded-2xl border border-gray-300 pt-15"> 
       <Slider 
      showTooltip={false}
      step={0.33} 
      color="foreground"
      maxValue={1}
      minValue={0}
      showSteps={true} 
      marks={[
        { value: 0, label: <span className="slider-label">Order Confirmed<br /> 11th Aug</span> },
        { value: 0.33, label: <span className="slider-label">Shipped<br /> 11th Aug</span> },
        { value: 0.66, label: <span className="slider-label">Out for Delivery<br /> 11th Aug</span> },
        { value: 1, label: <span className="slider-label">Delivered<br />16th Aug</span> },
      ]}
      defaultValue={0}
      className="w-[80%] mx-20 my-16" // Center the slider
    />
    </div>
  );
}

export default StatusSlider;
