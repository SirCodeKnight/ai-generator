"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'


function SideNav() {

    const MenuList=[
        {
            name:'Home 🤖',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History 🙅‍♂️',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing  💶',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting  ⚙️',
            icon:Settings,
            path:'/dashboard/settings'
        },

    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-blue-100 hover:bg-blue-200'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={130} height={200} />
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-pink-900 hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path==menu.path&&'bg-primary hover:bg-pink-900 hover:bg-transparent text-white'}
                    `}>
                        <menu.icon className='h-7 w-7'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div >
           
        </div>
    </div>
  )
}

export default SideNav