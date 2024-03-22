import React from "react";
import GreenButton from "../layout/GreenButton";
import CambitasLogo from "../../assets/cambitas-logo.png";
import { Link } from "react-router-dom";

function shortInput(label, placeholder) {
  return (
    <div className="w-72 my-3">
      <label htmlFor="email" className="sr-only">
        {label}
      </label>
      <input
        type={label}
        name={label}
        id={label}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

function SignupForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 flex justify-start">
        <img className="w-48 mb-6" src={CambitasLogo} alt="Cambitas Logo" />
      </div>
      <div className="flex flex-col w-72">
        <h1 className="font-semibold text-lg">Register your company</h1>
        <p className="text-sm">Apply to have your company use this app</p>
      </div>
      <div className="mt-2">
        {shortInput("company_name", "Company Name")}
        {shortInput("company_email", "Company Email")}
        {shortInput("company_address", "Company Address")}
        {shortInput("full_name", "Full Name")}
        {shortInput("phone_number", "Phone Number")}
        {shortInput("personal_email", "Personal Email")}
      </div>
      <div className="w-72">
        <GreenButton>Submit</GreenButton>
        <p className='text-xs text-center mt-6'>Already have an account? <Link to="/login" className="font-semibold text-green-800">Login here.</Link></p>
      </div>
    </div>
  );
}

export default SignupForm;
