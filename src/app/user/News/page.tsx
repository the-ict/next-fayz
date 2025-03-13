"use client"

import React, { useEffect, useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { IDiscount } from '@/lib/models/Discount'

interface ISingleNewsResponse {
  message: string,
  discount: IDiscount[]
}

export default function Page() {
  const [discounts, setDiscounts] = useState<IDiscount[] | null>(null)

  useEffect(() => {
    const handleAllDiscount = async () => {
      try {
        const res = await fetch("/api/discount")
        const response: ISingleNewsResponse = await res.json()

        console.log("discount response: ", response)

        setDiscounts(response.discount)
      } catch (error) {
        console.log(error)
      }
    }
    handleAllDiscount()
  }, [])



  return (
    <div className='min-h-[50vh] mt-10'>
      <h1 className='text-3xl font-bold'>Yangiliklar</h1>
      <div className='flex flex-wrap gap-5'>
        {
          discounts?.map((item, index) => {
            return (
              <NewsCard item={item} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}
