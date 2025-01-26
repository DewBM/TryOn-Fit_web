import React from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`${props.className} bg-main-dark text-white mb-2 mt-4 p-2 rounded-lg hover:bg-main-light`}
    >
      {props.children}
    </button>
  );
}
