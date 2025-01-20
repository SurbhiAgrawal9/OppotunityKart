// import React, { useState } from 'react';
// import JobGiverRegisterForm from './JobGiverRegisterForm';

// const JobGiverLogin = () => {
//   const [showRegister, setShowRegister] = useState(false);

//   if (showRegister) {
//     return <JobGiverRegisterForm onClose={() => setShowRegister(false)} />;
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-bold">Job Giver Login</h2>
//       <form>
//         <input type="text" placeholder="Email" className="w-full mt-2 p-2 border rounded" />
//         <input type="password" placeholder="Password" className="w-full mt-2 p-2 border rounded" />
//         <button className="w-full mt-4 bg-g-blue text-white p-2 rounded">Login</button>
//       </form>
//       <p className="mt-4 text-sm text-gray-600">
//         Not registered yet?{' '}
//         <a href="#" onClick={() => setShowRegister(true)} className="text-g-blue hover:underline">
//           Register here
//         </a>
//       </p>
//     </div>
//   );
// };

// export default JobGiverLogin;


import React, { useState } from 'react';
import JobGiverRegisterForm from './JobGiverRegisterForm';

const JobGiverLogin = () => {
  const [showRegister, setShowRegister] = useState(false);

  // If the user wants to register, render the registration form
  if (showRegister) {
    return <JobGiverRegisterForm onClose={() => setShowRegister(false)} />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Job Giver Login</h2>
      <form>
        <input type="text" placeholder="Email" className="w-full mt-2 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mt-2 p-2 border rounded" />
        <button className="w-full mt-4 bg-g-blue text-white p-2 rounded">Login</button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Not registered yet?{' '}
        <a href="#" onClick={() => setShowRegister(true)} className="text-g-blue hover:underline">
          Register here
        </a>
      </p>
    </div>
  );
};

export default JobGiverLogin;
