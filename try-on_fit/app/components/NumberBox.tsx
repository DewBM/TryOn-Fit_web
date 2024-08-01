import React, { HTMLInputTypeAttribute } from "react";
type SizeKey = "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export default function NumberBox({
  labelName,
  name,
  inputType,
  key,
  defaultValue,
  value, // Add this property
  placeholder = null,
  className,
  disabled = false,
  size,
}: {
  labelName: string;
  name: string;
  inputType: HTMLInputTypeAttribute;
  key: React.Key;
  defaultValue: HTMLInputTypeAttribute;
  value?: string; // Add this property
  placeholder?: string | null;
  className?: string;
  disabled?: boolean;
  size?: SizeKey;
}) {
  return (
    <div>
      <label
        htmlFor={labelName.toLowerCase()}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelName}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={inputType}
          name={name}
          key={key}
          defaultValue={defaultValue}
          value={disabled ? "" : value}
          placeholder={placeholder ?? "00"}
          min={1}
          className={[
            "block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6",
            className,
          ].join(" ")}
          style={{
            // Add some padding to the input field to make room for the spin buttons
            paddingRight: "10px",
            pointerEvents: disabled ? "none" : "auto", // Adjust this value to move the spin buttons left
            color: disabled ? "#ccc" : "black",
          }}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
