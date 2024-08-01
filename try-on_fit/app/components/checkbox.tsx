import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
  name,
  value,
}) => {
  return (
    <label
      style={{
        display: "block",
        position: "relative",
        padding: "0 0 0 25px",
        marginBottom: "6px",
        cursor: "pointer",
        fontSize: "22px",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{
          position: "absolute",
          opacity: 0,
          cursor: "pointer",
          height: 0,
          width: 0,
        }}
      />
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          height: "16px",
          width: "16px",
          backgroundColor: checked ? "#3b0000" : "#eee",
          borderRadius: "5px",
          transition: "0.4s",
          border: `2px solid ${checked ? "#3b0000" : "#ccc"}`, // Add border here
        }}
      >
        {checked && (
          <span
            style={{
              position: "absolute",
              left: "5px",
              top: "1px",
              width: "5px",
              height: "8px",
              border: "solid white",
              borderWidth: "0 2px 2px 0",
              transform: "rotate(45deg)",
              WebkitTransform: "rotate(45deg)",
              MozTransform: "rotate(45deg)",
              msTransform: "rotate(45deg)",
            }}
          />
        )}
      </span>
      <span
        style={{
          left: 18,
          fontSize: "14px",
          fontWeight: "semBold",
          color: "#333",
        }}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
