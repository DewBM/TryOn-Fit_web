import React from "react";

interface ColorListProps {
  colors: string[];
}

export default function ColorList({ colors }: ColorListProps) {
  if (colors.length === 0) {
    return (
      <div
        style={{
          border: "2px solid #ccc",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p>No colors selected. Please select a color to add to the list.</p>
      </div>
    );
  }
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexWrap: "wrap",
        border: "2px #000001", // add border to ul element
      }}
    >
      <li
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          border: "none",
        }}
      >
        <strong>Colors added: {colors.length}</strong>
      </li>
      {colors.map((color, index) => (
        <li
          key={index}
          style={{
            margin: "5px",
            border: "2px  #000001", // add border to li element
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: color,
              boxSizing: "border-box",
            }}
          />
        </li>
      ))}
    </ul>
  );
}
