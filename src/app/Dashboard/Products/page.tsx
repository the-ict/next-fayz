"use client"

import { categories, products } from "@/lib/data"
import { faCheck, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import format from "@/lib/format"
import Link from "next/link"


export default function Page() {

    const [searchCategories, setSearchCategories] = useState<string[]>([])
    const [filter, setFilter] = useState<boolean>(false)

    const handleCategories = (category: string): void => {
        if (searchCategories.includes(category)) {
            setSearchCategories(() => searchCategories.filter(item => item !== category))
        } else {
            setSearchCategories(prev => ([...prev, category]))
        }
    }

    return (
        <div className='flex-5 dark:bg-[#222] p-10'>
            {/* Search */}
            <div className='flex w-full justify-between'>
                <h3 className='font-bold text-2xl'>Qidirish</h3>
                <button
                    onClick={() => window.location.replace("/Dashboard/NewProduct")}
                    className='px-5 py-2 text-white rounded bg-blue-400 hover:bg-blue-500 font-bold cursor-pointer'>Yangi Maxsulot</button>
            </div>
            <form className='rounded-[4px] border-2 mt-3 border-solid border-[#01A3D4] p-3 flex items-center justify-between'>
                <FontAwesomeIcon icon={faFilter} width={20} height={20} className='cursor-pointer' onClick={() => setFilter(true)} />
                <input type="text"
                    placeholder='Qidirish...'
                    // onChange={}
                    className="flex-1 border-none bg-transparent outline-none h-full px-2" />
                <FontAwesomeIcon icon={faSearch} width={20} height={20} className='cursor-pointer' />
            </form>

            {/* Products */}
            <div className='flex gap-10 flex-col max-h-[60vh]'>
                {
                    products.map((item, index) => {
                        return (
                            <Link href="/Dashboard/Single/123" key={index}>
                                <div className='w-full px-3 py-1 h-[100px] hover:bg-[#777] mt-3 flex items-center justify-between cursor-pointer' >
                                    <div className='flex items-center'>
                                        <div className='relative w-[100px] h-full py-5'>
                                            <Image src={item.image} alt='' fill className='object-contain' />
                                        </div>
                                        <b className='line-clamp-1'>{item.name}</b>
                                    </div>
                                    <b>{format(item.price, "UZS")}</b>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            {/* Category container */}
            {
                filter && (
                    <>
                        <div className='fixed top-0 left-0 bg-black/70 w-screen h-screen justify-center items-center flex'>

                            {/* Content */}
                            <div className='w-[500px] p-4 h-max dark:bg-[#fdfdfd] dark:text-black flex flex-wrap gap-2'>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        categories.map(item => {
                                            return (
                                                <div
                                                    onClick={() => handleCategories(item)}
                                                    key={item} className='bg-gray-100 px-2 py-1 cursor-pointer hover:bg-gray-200 flex items-center gap-2 rounded'>
                                                    <b>
                                                        {item}
                                                    </b>
                                                    {
                                                        searchCategories.includes(item) ? (
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={faPlus} width={15} height={15} />
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button
                                    onClick={() => { setFilter(false) }}
                                    className='bg-green-500 w-full px-10 py-2 text-white font-bold cursor-pointer hover:bg-green-600'>Filter</button>
                            </div>
                        </div>
                    </>
                )
            }
        </div >
    )
}