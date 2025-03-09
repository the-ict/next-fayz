"use client";

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from './Search';
import CategoryCard from "./CategoryCard";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="mt-10">
            {/* Carousel */}
            <Carousel autoPlay={true} autoFocus emulateTouch infiniteLoop showThumbs={false}>
                {/* First Slide */}
                <div className="relative h-[50vh] max-sm:h-[25vh]">
                    <Image src="/slider1.png" alt="slider1" fill sizes="1124px" priority />
                </div>
                {/* Second Slide */}
                <div className="relative h-[50vh] max-sm:h-[25vh]">
                    <Image src="/slider1.png" alt="slider2" fill sizes="1124px" priority />
                </div>
            </Carousel>

            {/* Category Header */}
            <h3 className='text-[30px] font-semibold w-[300px] max-sm:text-[30px] mt-6'>
                Kategoriya & Qidirish
            </h3>
            <Search />

            {/* Categories */}
            <div className="flex items-center flex-wrap gap-2 mt-6 justify-center">
                {[
                    { img: "/category1.png", category: "Kirmashina" },
                    { img: "/category2.png", category: "Noutbook" },
                    { img: "/category3.png", category: "Televizor" },
                    { img: "/category4.png", category: "Telefon" }
                ].map(item => (
                    <CategoryCard key={item.img} item={item} />
                ))}
            </div>

            {/* Info Cards */}
            <div className="flex items-center gap-2 mt-10 max-sm:flex-col">
                <div className="flex-1 max-sm:w-full flex items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block dark:hover:scale-105 dark:bg-gray-200">
                    <Image src="/location.png" alt="Location" width={37} height={37} />
                    <p className="text-[14px] dark:text-black ">
                        <b>3 - </b> ta do'kon
                    </p>
                </div>
                <div className="flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block dark:hover:scale-105 dark:bg-gray-200">
                    <Image src="/magazine.png" alt="Magazine" width={37} height={37} />
                    <p className="text-[14px] dark:text-black ">
                        <b>6000 - </b> dan ortiq muddatli to‘lov asosida mahsulotlar
                    </p>
                </div>
                <div className="flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block dark:hover:scale-105 dark:bg-gray-200">
                    <Image src="/percent.png" alt="Percent" width={37} height={37} />
                    <p className="text-[14px] dark:text-black ">
                        <b>3oygacha foizsiz - </b> Muddatli to’lov
                    </p>
                </div>
            </div>
        </div>
    );
}
