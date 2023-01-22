import Image from 'next/image'
import React from 'react'
import { signOut,useSession } from 'next-auth/react'

const MiniProfile = () => {
  const {data:session}=useSession();
  // console.log("sessionupgrade:",session)
  return (
    <div className='flex items-center justify-between mt-14 ml-10  ' > 
      <img src="https://www.bing.com/th?id=OIP.QZNkvSPhiLMPSOgpy2O0MwHaJ0&w=150&h=198&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="rounded-full border p-[2px] w-16 h-16 " />
        <div className='mx-4 flex-1' >
            <h2 className='font-bold' >{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400' >Welcome To Instagram</h3>
        </div>
        <button onClick={signOut} className='text-blue-400 text-sm font-semibold' >Sign Out</button>
    </div>
  )
}

export default MiniProfile
