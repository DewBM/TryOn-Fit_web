import React, { HTMLInputTypeAttribute } from "react";

export default function Text_({
  labelName,
  name,
  inputType,
  key,
  defaultValue,
  placeholder = null,
  disabled = false,
}: {
  labelName: String;
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
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={inputType}
          name={name}
          key={key}
          defaultValue={defaultValue}
          placeholder={placeholder ?? ""}
          disabled={disabled} bg-main-lighter
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-800 ring-1  bg-main-lighter ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
