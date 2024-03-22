import React from 'react'
import CambitasLogo from '../../assets/cambitas-logo.png'
import GreenButton from '../layout/GreenButton'
import { Link } from 'react-router-dom';

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

function LoginForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 flex justify-start">
        <img className="w-48 mb-6" src={CambitasLogo} alt="Cambitas Logo" />
      </div>
      <div className="flex flex-col w-72">
        <h1 className="font-semibold text-lg">Log in to your account</h1>
        <p className="text-sm">Enter your work email and password</p>
      </div>
      <div className="mt-2">
        {shortInput("company_email", "Email")}
        {shortInput("password", "Password")}
      </div>
      <div className="w-72">
        <GreenButton>Submit</GreenButton>
        <p className='text-xs text-center mt-6'>Don't have an account? <Link to='/register' className="font-semibold text-green-800">Apply here.</Link></p>
      </div>
    </div>
  )
}

export default LoginForm