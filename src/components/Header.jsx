// // Header.jsx
// import React from 'react';
// import { BriefcaseIcon } from 'lucide-react';

// const Header = () => (
//   <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
//     <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="bg-gradient-to-r from-g-blue to-g-purple p-2 rounded-lg">
//             <BriefcaseIcon className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-g-blue to-g-purple bg-clip-text text-transparent">
//             OppotunityKart
//           </h1>
//         </div>
//         <nav className="flex space-x-8">
//           <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Find Jobs</a>
//           <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Companies</a>
//           <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Skills</a>
//         </nav>
//         <button className="bg-gradient-to-r from-g-blue to-g-purple text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
//           Login 
//         </button>
//       </div>
//     </div>
//   </header>
// );

// export default Header;

// Header.jsx
// import React, { useState } from 'react';
// import { BriefcaseIcon } from 'lucide-react';

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <div className="bg-gradient-to-r from-g-blue to-g-purple p-2 rounded-lg">
//               <BriefcaseIcon className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-g-blue to-g-purple bg-clip-text text-transparent">
//               OppotunityKart
//             </h1>
//           </div>
//           <nav className="flex space-x-8">
//             <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Find Jobs</a>
//             <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Companies</a>
//             <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Skills</a>
//           </nav>
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="bg-gradient-to-r from-g-blue to-g-purple text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//             >
//               Login
//             </button>
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login as Job Seeker</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login as Job Giver</a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { BriefcaseIcon } from 'lucide-react';
import JobSeekerLogin from './JobSeekerLogin';
import JobGiverLogin from './JobGiverLogin';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginType, setLoginType] = useState(null); // "seeker" or "giver"

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
              <BriefcaseIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-g-blue to-g-purple bg-clip-text text-transparent">
              OppotunityKart
            </h1>
          </div>
          <nav className="flex space-x-8">
            <a href="/" className="text-g-gray-600 hover:text-g-blue transition-colors">Home</a>
            <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Find Jobs</a>
            <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Companies</a>
            <a href="#" className="text-g-gray-600 hover:text-g-blue transition-colors">Skills</a>
          </nav>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-gradient-to-r from-g-blue to-g-purple text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
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
