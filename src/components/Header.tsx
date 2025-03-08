"use client"

import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Search from './Search';
import CategoryCard from "./CategoryCard"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';



export default function Header() {


    return (
        <div className='mt-10 h-min-[calc(100vh-50vh)]'>
            <Carousel autoPlay={true} autoFocus emulateTouch infiniteLoop>
                <div>
                    <Image src="/slider1.png" alt="slider1" width={1000} height={500} layout="responsive" />
                </div>
                <div>
                    <Image src="/slider1.png" alt="slider1" width={1000} height={500} layout="responsive" />
                </div>
            </Carousel>
            <h3 className='text-[30px] font-semibold w-[300px] max-sm:text-[14px]'>Kategoriya & Qidirish</h3>
            <Search />
            <div className="flex items-center flex-wrap gap-2 mt-6 justify-center">
                {
                    [{
                        img: "/category1.png",
                        category: "Noutbook"
                    }, {
                        img: `/category2.png`,
                        category: "Kirmashina"
                    }, {
                        img: "/category3.png",
                        category: "Televizor"
                    }, {
                        img: "/category4.png",
                        category: "Telefon"
                    }].map(item => (
                        <CategoryCard key={item.img} item={item} />
                    ))
                }
            </div>
            <div className="flex items-center gap-2 mt-10 max-sm:flex-col">
                <div className='flex-1 max-sm:w-full flex items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <Image src="/location.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>6 - </b> ta do'kon
                    </p>
                </div>
                <div className='flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <Image src="/magazine.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>6000 - </b> dan ortiq muddatli to‘lov asosida mahsulotlar
                    </p>
                </div>
                <div className='flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <Image src="/percent.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>Foizsiz - </b> Muddatli to’lov
                    </p>
                </div>
            </div>
        </div>
    )
}
