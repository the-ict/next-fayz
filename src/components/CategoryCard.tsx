"use client"

import Link from 'next/link'
import React from 'react'

type Props = {
  item: {
    img: string,
    category: string
  },
}

export default function Card({ item }: Props) {
  return (
    <Link href={`/Search/${item.category}`}>
      <div className="bg-[#01A3D4] relative w-full flex flex-col items-center justify-center cursor-pointer flex-1 min-w-[250px] min-h-[200px] 
    group transition-all duration-300 ease-in-out hover:bg-[#222222] animation-block">

        {/* Image container */}
        <div className="relative flex items-center justify-center">
          <img src={item.img} alt="category1" className='w-full h-full object-contain' />
        </div>

        {/* Button */}
        <button className="absolute bottom-5 bg-black uppercase font-bold text-white cursor-pointer px-5 py-2 opacity-0 translate-y-3 
      transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
          Ko'rish
          <img src="/buttonIcon.png" alt="button icon" className="inline-block ml-2 w-5 h-5" />
        </button>

      </div>
    </Link>
  )
}
