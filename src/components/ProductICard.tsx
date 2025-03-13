import { IProduct } from '@/lib/models/Product'
import Link from 'next/link'
import format from "@/lib/format"
import React from 'react'
import Image from 'next/image'

type Props = {
    product: IProduct
}

export default function ProductICard({ product }: Props) {

    return (
        <>
            <Link href={`/user/Single/${product?._id}`}>
                <div className='w-[265px] max-sm:w-full text-center hover:shadow-2xl dark:hover:bg-gray-400 dark:hover:text-black p-2 cursor-pointer transition'>
                    <div className='relative h-[300px] max-sm:w-full object-contain hover:scale-105 transition-all'>
                        <Image src={product?.images[0] || "/product.png"} alt="Products"
                            className='object-contain' fill />
                    </div>
                    <h3 className='text-[20px] font-bold'>{product?.name}</h3>
                    <span className='text-[14px] text-gray-500 '>{format(product?.price, "UZS")}</span>
                </div>
            </Link>
        </>
    )
}