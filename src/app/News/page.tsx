"use client"


import React from 'react'
import NewsCard from '@/components/NewsCard'

export default function page() {
  return (
    <div className='min-h-[50vh] mt-10'
      style={{
        backgroundColor: window.Telegram.WebApp.themeParams.bg_color,
        color: window.Telegram.WebApp.themeParams.text_color
      }}
    >
      <h1 className='text-3xl font-bold'>Yangiliklar</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}