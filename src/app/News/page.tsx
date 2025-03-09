import React from 'react'
import NewsCard from '@/components/NewsCard'

export default function page() {
  return (
    <div className='min-h-[50vh] mt-10'>
      <h1 className='text-3xl font-bold'>Yangiliklar</h1>
      <div className='flex flex-wrap gap-5'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}