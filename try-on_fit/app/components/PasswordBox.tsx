"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const validatePassword = (password: string) => {
  if (password.length < 8) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[~!@#$%^\*-_=\+[\]{\}\/;:,\.?]/.test(password);
  if (!(hasUpperCase && hasLowerCase && hasDigit && hasSymbol)) {
    return false;
  }
  return true;
};

export default function PasswordBox({
  labelName,
  inputType,
  name,
  key,
  defaultValue,
  placeholder,
  showEyeIcon = true,
  onChange, // add onChange prop
  error, // add error prop
}: {
  labelName: string;
  inputType: React.HTMLInputTypeAttribute;
  name: string;
  key: React.Key;
  defaultValue: React.HTMLInputTypeAttribute;
  placeholder?: boolean;
  showEyeIcon?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // add onChange type
  error?: string; // add error type
}) {
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // add error message state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    const password = e.target.value;
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      );
    } else {
      setErrorMessage("");
    }
  };

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
          type={visible ? "text" : inputType}
          name={name}
          key={key}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
          placeholder={placeholder ? "" : undefined}
          onChange={handleChange}
        />
        {showEyeIcon && (
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
      {errorMessage && (
        <div className="text-xs text-red-400">{errorMessage}</div>
      )}
    </div>
  );
}
