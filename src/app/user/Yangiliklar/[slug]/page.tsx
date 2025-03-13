"use client"


import NewsCard from '@/components/NewsCard'
import { IDiscount } from '@/lib/models/Discount'
import { faFacebook, faInstagram, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ISingleDiscount {
    message: string,
    discount: IDiscount
}

interface IDiscounts {
    message: string,
    discount: IDiscount[]
}

export default function Page() {
    const [newDiscount, setNewDiscount] = useState<IDiscount | null>(null)
    const [discounts, setDiscounts] = useState<IDiscount[] | null>(null)


    const pathname = usePathname()

    useEffect(() => {
        const handleGetNew = async () => {
            try {
                console.log(pathname.split("/")[3])
                const res = await fetch(`/api/discount?id=${pathname.split("/")[3]}`)
                const response: ISingleDiscount = await res.json()

                console.log("response: ", response)
                setNewDiscount(response.discount)

            } catch (error) {
                console.log(error)
            }
        }

        const handleGetAll = async () => {
            try {
                const res = await fetch("/api/discount")
                const response: IDiscounts = await res.json()

                setDiscounts(response.discount)
            } catch (error) {
                console.log(error)
            }
        }

        handleGetAll()
        handleGetNew()
    }, [pathname])

    return (
        <div className='min-h-[70vh] flex gap-10 max-sm:flex-col'>
            <div className='flex-3 mt-10'>
                <div className='relative w-full h-[400px] bg-[#efefef]'>
                    <Image fill src={newDiscount?.interfaceImage ? newDiscount.interfaceImage : newDiscount?.image || "/news.jpg"} className='object-contain' alt='news-page' priority />
                </div>
                <h3 className='mt-3 font-bold text-2xl tracking-tighter'>{newDiscount?.name}</h3>
                <span className='text-[14px] text-gray-600 dark:text-gray-300'>
                    {newDiscount?.description}
                </span>

                <div className='flex items-center gap-8 max-sm:gap-2 mt-5'>
                    <FontAwesomeIcon icon={faInstagram} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faFacebook} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faTiktok} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faTelegram} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                </div>
            </div>
            <div className='flex-1 mt-5'>
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