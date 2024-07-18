import { HTMLInputTypeAttribute } from "react";

export default function TextBox({
  labelName,
  id,
  inputType,
  placeholder = null,
}: {
  labelName: String;
  id: String;
  inputType: React.HTMLInputTypeAttribute;
  placeholder?: string | null;
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
          name={labelName.toLowerCase()}
          id={labelName.toLowerCase()}
          placeholder={placeholder ?? ""}
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
