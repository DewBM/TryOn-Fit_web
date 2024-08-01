import React, { HTMLInputTypeAttribute } from "react";

export default function TextBoxB({
  labelName,
  // id,
  name,
  inputType,
  key,
  defaultValue,
  placeholder = null,
  height = "h-10", // add a height prop with a default value
}: {
  labelName: String;
  // id: String;
  name: string;
  inputType: React.HTMLInputTypeAttribute;
  key: React.Key;
  defaultValue: React.HTMLInputTypeAttribute;
  placeholder?: string | null;
  height?: string; // add the height prop to the type definition
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
          // id={labelName.toLowerCase()}
          key={key}
          defaultValue={defaultValue}
          placeholder={placeholder ?? ""}
          className={`block w-full ${height} rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
}
