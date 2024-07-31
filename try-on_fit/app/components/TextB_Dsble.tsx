import React, { HTMLInputTypeAttribute } from "react";

export default function TextB_Dsble({
  labelName,
  // id,
  name,
  inputType,
  key,
  defaultValue,
  placeholder = null,
  disabled = false,
}: {
  labelName: String;
  // id: String;
  name: string;
  inputType: React.HTMLInputTypeAttribute;
  key: React.Key;
  defaultValue: React.HTMLInputTypeAttribute;
  placeholder?: string | null;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={labelName.toLowerCase()}
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        {labelName}
      </label>
      <div className="relative mt-2 rounded-md ">
        <input
          type={inputType}
          name={name}
          // id={labelName.toLowerCase()}
          key={key}
          defaultValue={defaultValue}
          placeholder={placeholder ?? ""}
          disabled={disabled}
          className="block w-full h-9 rounded-md focus:outline-none mt py-1.5 pl-4 text-gray-900 sm:text-medium font-medium sm:leading-6"
        />
      </div>
    </div>
  );
}
