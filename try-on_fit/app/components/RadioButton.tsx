import React from "react";

export default function RadioButton({
  label,
  value,
  name,
  onChange,
}: {
  label: string;
  value: string;
  name: string;
  onChange?: (newValue: string) => void;
}) {
  return (
    <div className="mr-2 mt-2.5 text-sm">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-4 h-4 rounded-full border-2  border-gray-300  text-blue-600 bg-white focus:ring-blue-500 appearance-none checked:bg-main-dark"
      />
      <label htmlFor={value} className="text-sm pl-1 mt-0">
        {label}
      </label>
    </div>
  );
}
