import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    const isSelected = selectedOptions.includes(optionValue);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== optionValue));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  return (
    <div className={`sm:col-span-3 text-xm ${className}`}>
      <label
        htmlFor={labelName.toLowerCase()}
        className="block text-sm font-medium leading-6 text-gray-900 "
      >
        {labelName}
      </label>
      <div className="mt-1 relative">
        <button
          className="block w-full rounded-md border-0 focus:outline-none py-2 pl-1 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark text-xs sm:leading-6"
          onClick={handleToggle}
        >
          {labelName}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md">
            <ul className="list-none p-2">
              {options.map((option) => (
                <li key={option.value} className="py-2 pl-4 pr-2">
                  <input
                    type="checkbox"
                    id={option.value}
                    name={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleOptionClick(option.value)}
                  />
                  <label className="ml-2">{option.label}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
