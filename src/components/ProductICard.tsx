import { ProductItem } from '@/lib/data'
import Link from 'next/link'
import format from "@/lib/format"
import React from 'react'
import Image from 'next/image'

type Props = {
    product: ProductItem
}

export default function ProductICard({ product }: Props) {
    return (
        <>
            <Link href={`/Single/${product?.id}`}>
                <div className='w-[265px] max-sm:w-full text-center hover:shadow-2xl p-2 cursor-pointer transition'>
                    <Image width={1000} height={500} layout='responsive' src="/product1.png" alt="Products"
                        className='h-[300px] max-sm:w-full object-contain hover:scale-105 transition-all' />
                    <h3 className='text-[20px] font-bold'>{product?.name}</h3>
                    <span className='text-[14px] text-gray-500'>{format(product?.price, "UZS")}</span>
                </div>
            </Link>
        </>
    )
}