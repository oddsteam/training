"use client";

import { useState } from "react";
import { useParams } from 'next/navigation'

const RegisterForm = () => {
  const params = useParams<{ id: string;}>()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formDataErrorMsg, setFormDataErrorMsg] = useState({
    fullName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    validateOnSubmit(formData.fullName, formData.email);
    callRegisterService(formData.fullName, formData.email, formData.company, formData.phone);
  };

  const callRegisterService = async (fullName: string, email: string, company: string, phone: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        company,
        phoneNumber: phone,
        classId: params.id,
      }),
    });
  }

  const validateOnSubmit = (fullName: string, email: string) => {
    let fullNameErrorMsg = fullName ? "" : "The full name field is required";
    let emailErrorMsg = email ? "" : "The email field is required";
    setFormDataErrorMsg({
      fullName: fullNameErrorMsg,
      email: emailErrorMsg,
    });
    if (fullNameErrorMsg || emailErrorMsg)
      throw new Error("Validate form failed");
    else {
      toggleModal();
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
      });
    }
  };

  return (
    <div className="h-screen flex justify-center bg-white">
      <div className="container mx-auto p-4 m-6">
        <h1 className="text-2xl mb-4">Register Form</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 border border-slate-200 rounded-md"
        >
          <div className="flex flex-col m-6">
            <label htmlFor="fullName" className="mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {formDataErrorMsg.fullName && <label className="mb-1 text-red-500">
              {formDataErrorMsg.fullName}
            </label>}
          </div>
          <div className="flex flex-col m-6">
            <label htmlFor="email" className="mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {formDataErrorMsg.email && <label className="mb-1 text-red-500">
              {formDataErrorMsg.email}
            </label>}
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

        {isOpen && (
          <div
            id="successModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden "
          >
            <div className="relative p-4 w-full max-w-md bg-white border rounded-md">
              <div className="relative p-4 text-center bg-white rounded-lg shadowsm:p-5">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Success</span>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-900">
                  Please check your email
                </p>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-center rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
