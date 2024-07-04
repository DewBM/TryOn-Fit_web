"use client";

import React from "react";
import TextBox from "./TextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordBox({
  labelName,
  id,
  showEyeIcon,
}: {
  labelName: string;
  id: string;
  showEyeIcon: boolean;
}) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <TextBox
        labelName={labelName}
        id={id}
        inputType={visible ? "text" : "password"}
      />
      {showEyeIcon && (
        <span onClick={() => setVisible(!visible)}>
          <FontAwesomeIcon
            icon={visible ? faEyeSlash : faEye}
            style={{ color: "var(--main-dark)" }}
          />
        </span>
      )}
    </div>
  );
}
