import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 hover:bg-violet-400 bg-violet-900 flex justify-between items-center'>
      <div className='flex gap-2 items-center
       p-2 border rounded-md max-w-lg hover:bg-green-300 bg-gray-100'>
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-none'
        />
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-gray-800 p-1 rounded-full text-sm hover:bg-gray-500 text-white px-2'>
        🔥 Join My Fucking onlyguddu Membership just for $4.99/Month</h2>
      <UserButton/>
      </div>
    </div>
  )
}

export default Header