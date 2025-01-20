import React from 'react';
import { Building2, MapPin, BriefcaseIcon, DollarSign, Clock } from 'lucide-react';

export default function JobCard({ title, company, location, salary, type, posted, logo, salary2}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-g-gray-200 hover:border-g-blue-light">
      <div className="flex items-start gap-4">
        {/* <img src={logo} alt={company} className="w-16 h-16 rounded-lg object-cover ring-2 ring-g-gray-200" /> */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-g-gray-800 hover:text-g-blue transition-colors">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Building2 className="w-4 h-4 text-g-purple" />
            <span className="text-g-gray-600">{company}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4 text-g-green" />
            <span className="text-g-gray-600">{location}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="w-4 h-4 text-g-blue" />
              <span className="text-sm text-g-gray-600">{type}</span>
            </div>
            <div className="flex items-center gap-1">
              {/* <DollarSign className="w-4 h-4 text-g-green" /> */}
              <span className="text-sm text-g-gray-600">INR {salary}K-{salary2}K</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-g-purple" />
              <span className="text-sm text-g-gray-600">{posted}</span>
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-g-blue to-g-blue-gradient text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
          Apply Now
        </button>
      </div>
    </div>
  );
}