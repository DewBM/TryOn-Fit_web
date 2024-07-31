import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordBox({
  labelName,
  id,
  showEyeIcon,
}: {
  labelName: string;
  id: string;
  showEyeIcon?: boolean;
}) {
  const [visible, setVisible] = useState(false);

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
          type={visible ? "text" : "password"}
          id={id}
          className="block w-full h-9 rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
        />
        {showEyeIcon && (
          <span
            onClick={() => setVisible(!visible)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
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
