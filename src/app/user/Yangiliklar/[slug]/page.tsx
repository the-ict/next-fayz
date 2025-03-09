import NewsCard from '@/components/NewsCard'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='min-h-[70vh] flex gap-10 max-sm:flex-col'>
            <div className='flex-3 mt-10'>
                <div className='relative w-full h-[400px]'>
                    <Image fill src="/new1.jpg" className='object-cover' alt='news-page' />
                </div>
                <h3 className='mt-3 font-bold text-2xl tracking-tighter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem</h3>
                <span className='text-[14px] text-gray-600 dark:text-gray-300'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora perspiciatis quas nisi quisquam obcaecati libero impedit illo beatae ad dignissimos magni dolore porro perferendis recusandae totam distinctio accusantium, at sequi.
                </span>
            </div>
            <div className='flex-1 mt-5'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}