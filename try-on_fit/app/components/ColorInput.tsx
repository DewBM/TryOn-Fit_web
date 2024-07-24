import Head from "next/head";
import { useState } from "react";
import css from "styled-jsx/css";

export default function ColorInput() {
  const [color, setColor] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <div
      className="md:relative h-14 fixed left-4 right-4 bottom-6 z-40 md:inset-0 rounded-full overflow-hidden max-w-md mx-auto ring-main-light focus:ring-main-dark"
      style={{
        boxShadow: "rgb(0 0 0 / 8%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 4px 12px",
      }}
    >
      <input
        type="text"
        value={color}
        placeholder="Hexcode"
        className="px-6 pl-14 w-full font-medium h-full rounded-full bg-transparent"
        onChange={handleInputChange}
      />
      <input
        type="color"
        value={color}
        className="absolute top-1/2 transform -translate-y-1/2 w-7 h-7 border-none left-4 cursor-pointer rounded-lg"
        style={{
          WebkitAppearance: "none",
        }}
      />
      {color && (
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full border-none left-4"
          style={{
            backgroundColor: color,
          }}
        />
      )}
    </div>
  );
}
