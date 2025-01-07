"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordBox({
  labelName,
  inputType,
  name,
  key,
  defaultValue,
  placeholder,
  showEyeIcon = true,
}: {
  labelName: string;
  inputType: React.HTMLInputTypeAttribute;
  name: string;
  key: React.Key;
  defaultValue: React.HTMLInputTypeAttribute;
  placeholder?: boolean;
  showEyeIcon?: boolean;
}) {
  const [visible, setVisible] = useState(false);
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
          type={visible ? "text" : inputType}
          name={name}
          key={key}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-800 ring-1  bg-main-lighter ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
          placeholder={placeholder ? "" : undefined}
        />
        {showEyeIcon && ( // conditionally render the icon
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            onClick={() => setVisible(!visible)}
          >
            <FontAwesomeIcon
              icon={visible ? faEye : faEyeSlash}
              style={{ color: "var(--main-dark)" }}
            />
          </span>
        )}
      </div>
    </div>
  );
}