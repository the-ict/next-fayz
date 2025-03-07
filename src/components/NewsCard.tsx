import Image from 'next/image'
import React from 'react'

export default function NewsCard() {
    return (
        <div className='w-[300px] max-sm:w-full max-sm:h-[400px] p-5 rounded bg-[#fdfdfd] h-max cursor-pointer mt-10 hover:bg-blue-400 hover:text-white transition-all'>
            <div className='h-[400px] max-sm:h-[320px]'>
                <Image
                    src="/new1.jpg" alt="" className='object-cover' fill />
            </div>
            <div className='mt-3 flex items-center gap-2'>
                <p className='font-bold text-[14px]'>Ramazon oyi uchun chegirma</p>
                <button className='bg-[#000] p-2'>
                    <Image src='/buttonIcon.png' width={1000} height={500} layout='responsive' alt='' />
                </button>
            </div>
        </div>
    )
}