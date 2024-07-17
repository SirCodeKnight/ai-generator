import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className='p-5 shadow-md rounded-md border bg-gray-300 hover:bg-pink-900 
      flex flex-col gap-3  cursor-pointer h-full hover:scale-105 transition-all'>
          <Image src={item.icon} alt='icon' 
          width={70} height={80} />
          <h2 className='font-medium text-lg'>{item.name}</h2>
          <p className='text-indigo-900 line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard