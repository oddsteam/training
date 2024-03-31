"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formDataErrorMsg, setFormDataErrorMsg] = useState({
    fullName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    validateOnSubmit(formData.fullName, formData.email);
    // Here you can add your form submission logic
  };

  const validateOnSubmit = (fullName: string, email: string) => {
    let fullNameErrorMsg = fullName ? '' : 'Missing firstname';
    let emailErrorMsg = email ? '' : 'Missing email';
    setFormDataErrorMsg({
      fullName: fullNameErrorMsg,
      email: emailErrorMsg,
    });
    if (fullNameErrorMsg || emailErrorMsg) throw new Error('Validate form failed');
  }

  return (
    <div className="h-screen flex justify-center bg-gray-100">
      <div className="container mx-auto p-4 m-6">
        <h1 className="text-2xl mb-4">Register Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 border rounded-md">
          <div className="flex flex-col m-6">
            <label htmlFor="fullName" className="mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="mb-1 text-red-500">
              {formDataErrorMsg.fullName}
            </label>
          </div>
          <div className="flex flex-col m-6">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="mb-1 text-red-500">
              {formDataErrorMsg.email}
            </label>
          </div>
          <div className="flex flex-col m-6">
            <label htmlFor="company" className="mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col m-6">
            <label htmlFor="phone" className="mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 m-6 justify-self-end"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
