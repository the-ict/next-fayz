"use client"

import { IDiscount } from '@/lib/models/Discount'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    item: IDiscount,
}

export default function NewsCard({ item }: Props) {

    return (
        <div
            className='w-[350px] max-sm:w-[vw] max-sm:h-[400px] p-5 rounded dark:bg-gray-200 bg-[#fdfdfd] h-max cursor-pointer mt-5 hover:bg-blue-100 transition-all'>
            <Link href={`/user/Yangiliklar/${String(item._id)}`}>
                <div className='relative h-[400px] max-sm:h-[320px]'>
                    <Image
                        src={item.image}
                        alt="news image"
                        className='object-cover hover:scale-105 transition-all'
                        fill
                        sizes='300px'
                        priority
                    />
                </div>
                <div className='mt-3 flex items-center gap-2 justify-between'>
                    <p className='font-bold text-[14px] line-clamp-2 dark:text-black'>{item.name}</p>
                    <button className='bg-[#000] px-2'>
                        <FontAwesomeIcon icon={faArrowRight} className='text-white' />
                    </button>
                </div>
            </Link>
        </div>
    )
}
