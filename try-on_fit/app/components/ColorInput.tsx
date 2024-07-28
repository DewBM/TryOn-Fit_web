import Head from "next/head";
import { useState } from "react";
import css from "styled-jsx/css";

interface ColorInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onColorSubmit: (color: string) => void; // This prop is required
}

export default function ColorInput({
  value,
  onChange,
  onColorSubmit,
}: ColorInputProps) {
  const [color, setColor] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setColor(e.target.value);
  };

  const handleSubmit = () => {
    onColorSubmit(color);
  };

  return (
    <div
      className="md:relative h-9 w-64   left-4 right-4 bottom-6  z-40 md:inset-0 rounded-md border-0   overflow-hidden  ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark "
      style={
        {
          // boxShadow: "rgb(0 0 0 / 8%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 4px 12px",
        }
      }
    >
      <input
        type="text"
        value={color}
        placeholder="Enter Hexcode"
        className="px-6 pl-14 pr-6 w-64 mr-6 font-medium h-full bg-transparent ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark"
        onChange={handleInputChange}
      />
      {/* <input
        type="color"
        value={color}
        className="absolute top-1/2 transform -translate-y-1/2 w-7 h-7 border-none left-4 cursor-pointer rounded-lg"
        style={{
          WebkitAppearance: "none",
        }}
      /> */}
      {color && (
        <div
          className="absolute top-1/2  transform -translate-y-1/2 w-7 h-7 rounded-full border-none left-4"
          style={{
            backgroundColor: color,
          }}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
