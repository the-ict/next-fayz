"use client";

import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div className='w-full text-center mt-12'>
            <h1 className='text-2xl font-bold'>Biz haqimizda</h1>
            <div className='flex items-center gap-2 mt-10 max-sm:flex-col'>
                <div className="relative w-1/2 max-sm:w-full h-96 max-sm:h-64 overflow-hidden">
                    <Image
                        className='rounded animation-img object-cover'
                        src="/fayz.jpg"
                        alt="Hozircha shopning rasmi"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                </div>
                <p className='w-1/2 max-sm:w-full max-sm:text-[18px] max-sm:text-left max-sm:px-5 text-[20px] font-bold text-gray-800 tracking-tighter font-montserrat'>
                    FAYZ - muddatli to‘lovga maishiy texnika, elektronika va uy jihozlarini xarid qilish imkoniyatini taqdim etuvchi O'zbekistondagi eng yirik savdo do'konlar tarmog'i. Tarmoqning ilk do‘koni 2010-yilda Farg‘ona viloyatida o‘z faoliyatini boshladi. Hozirda respublika bo‘ylab 120 dan ortiq do‘kon aholiga sifatli xizmat ko‘rsatib kelmoqda.
                </p>
            </div>
        </div>
    );
}
