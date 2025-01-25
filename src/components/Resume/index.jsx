import React, { forwardRef } from "react";
import { avatar } from "../../global/global";
import { useAuth } from "../../contexts/AuthContext";

const ResumePage = forwardRef((props, ref) => {
  const { user } = useAuth();

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return `${age} years old`;
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-100 py-10 flex justify-center"
    >
      <div className="w-full bg-white p-10 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex items-center space-x-6 border-b pb-6 mb-6">
          <img
            src={user?.avatar || avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border border-gray-300 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-700">
              {user?.fullname}
            </h1>
            <p className="text-xl text-gray-500">{user?.role}</p>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Gender:</p>
              <p className="text-gray-700">{user?.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Age:</p>
              <p className="text-gray-700">
                {calculateAge(user?.birthDate)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Legal ID:</p>
              <p className="text-gray-700">{user?.legalId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Primary Number:</p>
              <p className="text-gray-700">{user?.primaryNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Alternative Number:</p>
              <p className="text-gray-700">{user?.alternativeNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Qualification:</p>
              <p className="text-gray-700">{user?.qualification}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Experience:</p>
              <p className="text-gray-700">{user?.experience}</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {user?.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumePage;
