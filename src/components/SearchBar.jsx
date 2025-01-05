import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex gap-4 max-w-4xl w-full mx-auto bg-white/10 backdrop-blur-md p-4 rounded-2xl">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-g-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for jobs..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 bg-white/80 focus:ring-2 focus:ring-g-purple transition-all duration-300 placeholder:text-g-gray-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="relative w-72">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-g-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Location"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 bg-white/80 focus:ring-2 focus:ring-g-purple transition-all duration-300 placeholder:text-g-gray-500"
        />
      </div>
      <button className="bg-gradient-to-r from-g-purple to-g-purple-light text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        Search
      </button>
    </div>
  );
}