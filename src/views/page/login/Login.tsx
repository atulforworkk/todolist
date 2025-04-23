import LoginForm from '@/composites/loginForm/LoginForm'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
    console.log("hello world ")
  return (
    <div className='flex h-screen'>

        {/* better task managment and redressal  */}
        <div className='flex-1 flex justify-center h-screen items-center `'>
         <LoginForm/>
        </div>
        <div className='flex-1 bg-black h-screen flex  justify-center items-center'>
            <h1 className='text-4xl font-semibold text-white'>
            Organize.  <br /> Track. <br /> Achieve.
            </h1>
        </div>
    </div>
  )
}

export default Login;