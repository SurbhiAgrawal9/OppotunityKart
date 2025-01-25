import React from "react";

const Select = React.forwardRef(({ options, error, placeholder, ...props }, ref) => (
  <div className="w-full">
    <select
      ref={ref}
      className={`w-full h-[48px] px-4 py-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`}
      {...props}
    >
      {/* Set the placeholder as the default selected, and disable it */}
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
));

export default Select;
