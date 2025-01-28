import React, { useState } from 'react';
import { BriefcaseIcon } from 'lucide-react';
import JobSeekerLogin from './JobSeekerLogin';
import JobGiverLogin from './JobGiverLogin';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../global/routes';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginType, setLoginType] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLoginClick = (type) => {
    setLoginType(type);
    setShowDropdown(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-g-blue to-g-purple p-2 rounded-lg">
              <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="ml-2 text-2xl md:text-xl sm:text-lg font-bold bg-gradient-to-r from-g-blue to-g-purple bg-clip-text text-transparent">
            <span class="lg:text-lg text-xs">Opportunity</span>
            <span class="lg:text-lg text-xs">Kart</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to={ROUTES.HOME} className="text-g-gray-600 hover:text-g-blue transition-colors">Home</Link>
            <Link to="/" className="text-g-gray-600 hover:text-g-blue transition-colors">Find Jobs</Link>
            <Link to="/" className="text-g-gray-600 hover:text-g-blue transition-colors">Companies</Link>
            <Link to="/" className="text-g-gray-600 hover:text-g-blue transition-colors">Skills</Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDropdown} className="text-g-gray-600 hover:text-g-blue transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => navigate(ROUTES.LOGIN)}
              className="bg-gradient-to-r from-g-blue to-g-purple text-white px-6 py-2 rounded-lg sm:px-4 sm:py-2 sm:text-sm lg:text-base hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Login
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <button onClick={() => handleLoginClick('seeker')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">Login as Job Seeker</button>
                <button onClick={() => handleLoginClick('giver')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">Login as Job Giver</button>
              </div>
            )}
          </div>
        </div>
        {showDropdown && (
          <nav className="md:hidden mt-4">
            <Link to={ROUTES.HOME} className="block text-g-gray-600 hover:text-g-blue transition-colors py-1">Home</Link>
            <Link to="/" className="block text-g-gray-600 hover:text-g-blue transition-colors py-1">Find Jobs</Link>
            <Link to="/" className="block text-g-gray-600 hover:text-g-blue transition-colors py-1">Companies</Link>
            <Link to="/" className="block text-g-gray-600 hover:text-g-blue transition-colors py-1">Skills</Link>
          </nav>
        )}
      </div>

      {loginType && (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
          {loginType === 'seeker' ? <JobSeekerLogin /> : <JobGiverLogin />}
        </div>
      )}
    </header>
  );
};

export default Header;
