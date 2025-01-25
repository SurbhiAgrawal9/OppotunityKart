import React, { useState } from "react";
import { Controller } from "react-hook-form";

const MultipleSelect = ({ options, name, control, placeholder = "Select options", error }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  return (
    <div className="relative w-full">
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValues = field.value || []; // Ensure field.value is an array

          return (
            <div>
              {/* Selected Values display */}
              <div
                className="w-full h-[48px] border-gray-300 px-4 py-2 border rounded-md bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
              >
                {selectedValues.length > 0
                  ? selectedValues
                      .map(
                        (val) =>
                          options.find((opt) => opt.value === val)?.label
                      )
                      .join(", ")
                  : placeholder}
              </div>

              {/* Dropdown Options */}
              {isOpen && (
                <div
                  className={`absolute z-[2] mt-2 w-full border rounded-md bg-white max-h-60 overflow-y-auto ${error ? "border-red-500" : "border-gray-300"}`}
                >
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedValues.includes(option.value)}
                        onChange={() => {
                          const newSelectedValues = [...selectedValues];
                          if (newSelectedValues.includes(option.value)) {
                            newSelectedValues.splice(newSelectedValues.indexOf(option.value), 1);
                          } else {
                            newSelectedValues.push(option.value);
                          }
                          field.onChange(newSelectedValues); // Update value with selected values
                        }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default MultipleSelect;
