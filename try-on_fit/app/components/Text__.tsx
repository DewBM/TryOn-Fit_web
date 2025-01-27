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
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelName}
      </label>
      <div className="relative rounded-md shadow-sm mb-2">
        <input
          type={inputType}
          name={name}
          key={key}
          defaultValue={defaultValue}
          placeholder={placeholder ?? ""}
          disabled={disabled}
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6 bg-transparent"
        />
      </div>
    </div>
  );
}
