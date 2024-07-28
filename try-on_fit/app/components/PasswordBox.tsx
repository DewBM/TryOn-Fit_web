import React from "react";

interface ColorCircleProps {
  color: string;
  title: string;
  selected?: boolean;
}

const ColorCircle = ({ color, title, selected = false }: ColorCircleProps) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        margin: "5px",
        cursor: "pointer",
        backgroundColor: color,
        boxShadow: selected ? "0 0 0 2px #fff" : "none",
      }}
      title={title}
    />
  );
};

interface ColorListProps {
  colors: string[];
}

const ColorList = ({ colors }: ColorListProps) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {colors.map((color: string, index: number) => (
        <li
          key={index}
          style={{
            margin: "5px",
          }}
        >
          <ColorCircle color={color} title={color} />
        </li>
      ))}
    </ul>
  );
};

export default ColorList;
