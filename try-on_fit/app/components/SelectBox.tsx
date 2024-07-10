// "use client";
export default function SelectBox({
  labelName,
  id,
  name,
  autoComplete,
  options,
  value,
  className,
}: {
  labelName: string;
  id: string;
  name: string;
  autoComplete: string;
  options: { value: string; label: string }[];
  value: string;
  className?: string;
}) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={labelName.toLowerCase()}
        className="block  font-medium leading-6 text-gray-900"
      >
        {labelName}
      </label>
      <div className="mt-1">
        <select
          id={id}
          name={name}
          autoComplete={autoComplete}
          value={value}
          className="block w-full rounded-md border-0 focus:outline-none py-2 pl-1 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
