import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../components/authentication/LoginForm'
import LoginVector from '../assets/cambitas-login-vector.png'

function Login() {
  return (
    <>
      <Helmet><title>Login</title></Helmet>
      <div className='flex h-screen'>
        <div className='w-7/12 flex justify-center items-center bg-slate-100'>
          <div className='flex flex-col gap-y-6 items-center w-[540px] text-center'>
            <h1 className='text-2xl'>Welcome back to <span className='font-semibold'>Cambitas!</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi consequuntur ea a accusamus doloribus. Perspiciatis architecto eum atque consequatur voluptatibus?</p>
            <img className='w-64' src={LoginVector} alt='Login Vector' />
          </div>
        </div>
        <div className='w-5/12 '>
          <div className='my-48'>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login