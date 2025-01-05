import React from "react";

export default function TextBde_Dsble({
  labelName,
  name,
  inputType,
  defaultValue,
  placeholder = null,
  disabled = false,
}: {
  labelName: string;
  name: string;
  inputType: React.HTMLInputTypeAttribute;
  defaultValue: string;
  placeholder?: string | null;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={labelName.toLowerCase().replace(" ", "_")}
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        {labelName}
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          type={inputType}
          name={name}
          id={labelName.toLowerCase().replace(" ", "_")}
          defaultValue={defaultValue}
          placeholder={placeholder ?? ""}
          disabled={disabled}
          className="block w-full h-9 rounded-md focus:outline-none mt py-1.5 pl-4 text-gray-900 sm:text-medium font-medium sm:leading-6"
        />
      </div>
    </div>
  );
}
