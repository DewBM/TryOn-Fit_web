import React, { HTMLInputTypeAttribute } from "react";

export default function NumberBox({
  labelName,
  name,
  inputType,
  key,
  defaultValue,
  placeholder = null,
  className,
}: {
  labelName: string;
  name: string;
  inputType: HTMLInputTypeAttribute;
  key: React.Key;
  defaultValue: HTMLInputTypeAttribute;
  placeholder?: string | null;
  className?: string;
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
          placeholder={placeholder ?? ""}
          min={1}
          className={[
            "block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6",
            className,
          ].join(" ")}
          style={{
            // Add some padding to the input field to make room for the spin buttons
            paddingRight: "10px", // Adjust this value to move the spin buttons left
          }}
        />
      </div>
    </div>
  );
}
