import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsCard() {
    return (
        <Link href="/user/Yangiliklar/123">
            <div className='w-[350px] max-sm:w-[vw] max-sm:h-[400px] p-5 rounded dark:bg-gray-200 bg-[#fdfdfd] h-max cursor-pointer mt-5 hover:bg-blue-100 transition-all'>
                <div className='relative h-[400px] max-sm:h-[320px]'>
                    <Image
                        src="/new1.jpg" alt="" className='object-cover hover:scale-105 transition-all' fill sizes='300px' />
                </div>
                <div className='mt-3 flex items-center gap-2 justify-between'>
                    <p className='font-bold text-[14px] line-clamp-2 dark:text-black'>Ramazon oyi uchun</p>
                    <button className='bg-[#000] px-2'>
                        <FontAwesomeIcon icon={faArrowRight} className='text-white' />
                    </button>
                </div>
            </div>
        </Link>
    )
}