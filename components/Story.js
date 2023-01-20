import Image from 'next/image'
import React from 'react'

const Story = ({img,userName}) => {
  return (
    <div>
      <Image className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt="Story" width={50} height={50} />
        <p className='text-xs w-14 truncate text-center' >{userName}</p>
    </div>
  )
}

export default Story
