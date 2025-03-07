import Image from 'next/image'
import React from 'react'


export default function Footer() {
    return (
        <div className='mt-10 bg-[#000000] text-white flex items-center justify-between max-sm:justify-around px-30 py-30 max-sm:px-0 max-sm:py-5 max-lg:p-10'>
            <div className='flex flex-col items-center gap-2'>
                <Image src="/logo.png" alt="" className='max-sm:w-10 max-sm:h-10 object-contain' width={40} height={40} />
                <div className='flex items-center gap-8 max-sm:gap-2'>
                    <Image src="/instagram.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={20} height={20} />
                    <Image src="/telegram.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={20} height={20} />
                    <Image src="/facebook.png" alt="" className='cursor-pointer hover:scale-110 transition-all max-sm:w-5 max-sm:h-5 object-contain max-lg:w-8 max-lg:h-8' width={20} height={20} />
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
                    <div className="relative w-5 h-5 max-sm:w-5 max-sm:h-5 max-lg:h-8">
                        <Image src="/phone.png" alt="Phone" fill objectFit="contain" />
                    </div>
                    <span className='text-gray-300 max-sm:text-[10px] '>+998 91 689 52 25</span>
                </div>
                <div className='flex items-center gap-4 mt-3 max-sm:gap-2'>
                    <div className="relative w-5 h-5 max-sm:w-5 max-sm:h-5 max-lg:h-8">
                        <Image
                            src="/email.png"
                            alt="Phone"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <span className='text-gray-300 max-sm:text-[10px]'>info@gmail.com</span>
                </div>
            </div>
        </div>
    )
}