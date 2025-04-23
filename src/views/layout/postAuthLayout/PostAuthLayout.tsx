import Header from '@/components/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const PostAuthLayout = (props: Props) => {
  return (
    <div>
      <div className="h-[7vh] bg-gray-400 ">
        <Header />
      </div>
      <div className="h-[88vh] bg-[#E3E5E6]">
        <Outlet />
      </div>
    </div>
  )
}

export default PostAuthLayout


