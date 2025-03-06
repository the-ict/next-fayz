import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='mt-10 bg-[#000000] text-white flex items-center justify-between max-sm:justify-around px-30 py-30 max-sm:px-0 max-sm:py-5 max-lg:p-10'>
            <div className='flex flex-col items-center gap-2'>
                <img src="/logo.png" alt="" className='max-sm:w-10 max-sm:h-10 object-contain' />
                <div className='flex items-center gap-8 max-sm:gap-2'>
                    <img src="/instagram.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={37} height={37} />
                    <img src="/telegram.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={37} height={37} />
                    <img src="/facebook.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={37} height={37} />
                </div>
            </div>
            <ul>
                <li className='cursor-pointer  mt-3 font-bold m8-sm:text-[8px]'>Biz haqimizda</li>
                <li className='cursor-pointer  mt-3 font-bold max-sm:text-[10px]'>Do'kon manzillari</li>
                <li className='cursor-pointer  mt-3 font-bold max-sm:text-[10px]'>Yangiliklar</li>
                <li className='cursor-pointer  mt-3 font-bold max-sm:text-[10px]'>Bog'lanish</li>
            </ul>
            <div>
                <div className='flex items-center gap-4 max-sm:gap-2'>
                    <img src="/phone.png" alt="Phone" width={37} height={37} className='max-sm:w-5 max-sm:h-5 object-contain max-lg:h-8' />
                    <span className='text-gray-300 max-sm:text-[10px] '>+998 91 689 52 25</span>
                </div>
                <div className='flex items-center gap-4 mt-3 max-sm:gap-2'>
                    <img src="/email.png" alt="Phone" width={37} height={37} className='max-sm:w-5 max-sm:h-5 object-contain max-lg:h-8' />
                    <span className='text-gray-300 max-sm:text-[10px]'>info@gmail.com</span>
                </div>
            </div>
        </div>
    )
}