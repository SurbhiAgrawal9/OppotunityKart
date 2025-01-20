import React, { useState } from 'react';

const JobGiverRegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    companyAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Giver Registration:', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Job Giver Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
      <button onClick={onClose} className="mt-4 text-sm text-gray-600 hover:underline">
        Cancel
      </button>
    </div>
  );
};

export default JobGiverRegisterForm;
