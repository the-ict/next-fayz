"use client"

import React from 'react'

type Props = {}

export default function AboutUs({ }: Props) {
    return (
        <div className='w-full text-center mt-12'>
            <h1 className='text-2xl font-bold'>Biz haqimizda</h1>
            <div className='flex items-center gap-2 mt-10 max-sm:flex-col'>
                <img className='w-[50%] h-[50%] max-sm:w-full rounded animation-img' src="/shop.jpg" alt="Hozircha shopning rasmi" />
                <p className='w-[50%] max-sm:w-[100vw] max-sm:text-[18px] max-sm:text-left max-sm:px-5 text-2xl font-bold tracking-wide border-spacing-0.5'>FAYZ - muddatli to‘lovga maishiy texnika, elektronika va uy jihozlarini xarid qilish imkoniyatini taqdim etuvchi O'zbekistondagi eng yirik savdo do'konlar tarmog'i. Tarmoqning ilk do‘koni 2010-yilda Farg‘ona viloyatida o‘z faoliyatini boshladi. Hozirda respublika bo‘ylab 120 dan ortiq do‘kon aholiga sifatli xizmat ko‘rsatib kelmoqda.</p>
            </div>
        </div>
    )
}