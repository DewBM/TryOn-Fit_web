import React from 'react';
import { Slider } from "@nextui-org/react";

interface OrderprograssProps {
  setSelectedStatus: (status: string) => void;
}

const Orderprograss: React.FC<OrderprograssProps> = ({ setSelectedStatus }) => {
  // Handler for slider value change
  const handleChange = (value: number) => {
    let status = 'All';
    if (value === 0.5) {
      status = 'Processing';
    
    } else if (value === 1) {
      status = 'Delivered';
    }
    setSelectedStatus(status);
  };

  return (
    <div className="h-[150px] w-[90%] rounded-2xl  border-gray-300 ">
      <Slider 
        showTooltip={false}
        step={0.5} 
        color="foreground"
        maxValue={1}
        minValue={0}
        showSteps={true} 
        marks={[
          { value: 0, label: <span className="slider-label">All</span> },
          { value: 0.5, label: <span className="slider-label">Processing</span> },
        
          { value: 1, label: <span className="slider-label">Delivered</span> },
        ]}
        defaultValue={0}
        className="w-[80%] mx-20 my-16"
        onValueChange={handleChange} // Correct event handler
      />
    </div>
  );
};

export default Orderprograss;
