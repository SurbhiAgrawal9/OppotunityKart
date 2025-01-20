import React, { useState } from 'react';

const JobSeekerRegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skills: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Seeker Registration:', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Job Seeker Registration</h2>
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
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
        <input
          type="file"
          name="resume"
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

export default JobSeekerRegisterForm;
