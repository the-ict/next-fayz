"use client"

import Image from 'next/image'
import React from 'react'


export default function AboutUs() {
    return (
        <div className='w-full text-center mt-12'>
            <h1 className='text-2xl font-bold'>Biz haqimizda</h1>
            <div className='flex items-center gap-2 mt-10 max-sm:flex-col'>
                {/* Image component without width and height, using layout="responsive" */}
                <div className="relative w-[50%] max-sm:w-full h-[50%] max-sm:h-auto">
                    <Image
                        className='rounded animation-img'
                        src="/shop.jpg"
                        alt="Hozircha shopning rasmi"
                        width={500}
                        height={500}
                    />
                </div>
                <p className='w-[50%] max-sm:w-[100vw] max-sm:text-[18px] max-sm:text-left max-sm:px-5 text-2xl font-bold tracking-wide'>
                    FAYZ - muddatli to‘lovga maishiy texnika, elektronika va uy jihozlarini xarid qilish imkoniyatini taqdim etuvchi O'zbekistondagi eng yirik savdo do'konlar tarmog'i. Tarmoqning ilk do‘koni 2010-yilda Farg‘ona viloyatida o‘z faoliyatini boshladi. Hozirda respublika bo‘ylab 120 dan ortiq do‘kon aholiga sifatli xizmat ko‘rsatib kelmoqda.
                </p>
            </div>
        </div>
    )
}
