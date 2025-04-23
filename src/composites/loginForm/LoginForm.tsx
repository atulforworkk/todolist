import React from 'react'
import { Button, Input } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
type Props = {}

const LoginForm = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col items-center'>
        <h1 className='text-xl font-semibold underline'>Login</h1>
        <div className='w-9/12 '>
        <div>
            <label htmlFor=""> Email</label>
        <Input  radius="md" placeholder="Email" type='email' />
        </div>
        <div>
            <label htmlFor=""> Password</label>
        <Input  radius="md" placeholder="" type='password'  />
        </div>
        <Button className='w-full mt-4 rounded-md bg-black' onClick={()=>{
         navigate("/home/new-user")
        }}>
            Login
        </Button>
        </div>
    </div>
  )
}

export default LoginForm