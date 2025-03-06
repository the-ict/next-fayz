import React from 'react'
import NewsCard from '@/components/NewsCard'

type Props = {}

export default function page({ }: Props) {
  return (
    <div className='min-h-[50vh] mt-10'>
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