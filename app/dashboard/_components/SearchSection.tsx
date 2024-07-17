import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-300  via-purple-800 
    to-blue-800 flex flex-col justify-center items-center hover:bg-black text-gray-200'>
        <h2 className='text-3xl font-bold'>Browse All 50+👑Templates 🧲</h2>
        <p>What would you like to create today?</p>
        <div className='w-full  flex justify-center'>
            <div className='flex gap-2 items-center
             p-2 border rounded-md bg-violet-200 my-5 w-[60%]'>
                <Search className='text-green-900 hover:bg-black' />
                <input type="text" placeholder='🕵️‍♀️ Search 👀'
                onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent w-full outline-none text-gray-700'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection