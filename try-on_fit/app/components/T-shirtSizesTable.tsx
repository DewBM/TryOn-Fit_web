"use client"
import React from "react";

interface MeasurementRange {
  min: number;
  max: number;
}

interface Measurement {
  label: string;
  ranges: MeasurementRange[];
}

const sizes: string[] = ["Small (S)", "Medium (M)", "Large (L)"];
const measurements: Measurement[] = [
  {
    label: "Chest (in)",
    ranges: [
      { min: 34, max: 36 }, 
      { min: 38, max: 40 }, 
      { min: 42, max: 44 }, 
    ],
  },
  {
    label: "Waist (in)",
    ranges: [
      { min: 28, max: 30 }, 
      { min: 32, max: 34 }, 
      { min: 36, max: 38 }, 
    ],
  },
  {
    label: "Length (in)", 
    ranges: [
      { min: 27, max: 28 }, 
      { min: 28, max: 29 }, 
      { min: 29, max: 30 }, 
    ],
  },
];

const SizeTable: React.FC = () => {
  return (
    <table
      style={{
        width: "80%",
        margin: "2rem",
        borderCollapse: "collapse",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2", color: "#000000" }}>
          <th
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              fontSize: "1.1rem",
              textAlign: "left",
            }}
          >
            Measurement
          </th>
          {sizes.map((size, index) => (
            <th
              key={index}
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
            >
              {size}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {measurements.map((measurement, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
            }}
          >
            <td
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                textAlign: "left",
                
              }}
            >
              {measurement.label}
            </td>
            {measurement.ranges.map((range, i) => (
              <td
                key={i}
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                {range.min}-{range.max}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SizeTable;
