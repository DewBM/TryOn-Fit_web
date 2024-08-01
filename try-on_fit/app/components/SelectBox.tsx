export default function SelectBox({
  labelName,
  id,
  name,
  autoComplete,
  options,
  value,
  // onChange,
  // defaultValue,
  error,
  className,
}: {
  labelName: string;
  id: string;
  name: string;
  autoComplete: string;
  options: { value: string; label: string }[];
  value: string;
  // onChange: (newValue: string) => void;
  // defaultValue: React.HTMLInputTypeAttribute;
  error?: string;
  className?: string;
}) {
  return (
    <div className={`sm:col-span-3 text-xm ${className}`}>
      <label
        htmlFor={labelName.toLowerCase()}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2"
      >
        {labelName}
      </label>
      <div className="mt-1">
        <select
          id={id}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => {}}
          className="block w-full rounded-md border-0 focus:outline-none py-2.5 pl-1 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark text-xs sm:leading-6"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
}
