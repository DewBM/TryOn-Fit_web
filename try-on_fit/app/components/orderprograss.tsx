import React from 'react'
import { Slider } from "@nextui-org/react";

function orderprograss() {
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
        { value: 0, label: <span className="slider-label">All</span> },
        { value: 0.33, label: <span className="slider-label">Topay</span> },
        { value: 0.66, label: <span className="slider-label">To Ship</span> },
        { value: 1, label: <span className="slider-label">To Recieve</span> },
      ]}
      defaultValue={0}
      className="w-[80%] mx-20 my-16" // Center the slider
    />
    </div>
  )
}

export default orderprograss
