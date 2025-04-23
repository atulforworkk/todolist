import React from 'react'

type Props = {}

const Field = (props: Props) => {
  return (
    <div className='flex flex-row items-stretch justify-end border border-black h-screen '>

<div className="h-[200px] w-[200px] bg-pink-300 border-2 border-yellow-500">1</div>
<div className="h-[200px] w-[200px] bg-pink-300 border-2 border-yellow-500">2</div>
<div className="h-[200px] w-[200px] bg-pink-300 border-2 border-yellow-500">3</div>

    </div>
  )
}

export default Field