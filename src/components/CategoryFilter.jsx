import React, { useState } from 'react';

const categories = [
  'All Jobs',
  'Technology',
  'Marketing',
  'Design',
  'Sales',
  'Finance',
  'Healthcare',
];

export default function CategoryFilter({ onSelect }) {
  const [selected, setSelected] = useState('All Jobs');

  const handleSelect = (category) => {
    setSelected(category);
    onSelect(category);
  };

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleSelect(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selected === category
              ? 'bg-g-blue text-white'
              : 'bg-g-gray-100 text-g-gray-600 hover:bg-g-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}