"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { categories } from '@/lib/data'


export default function Search() {
    const [filter, setFilter] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [searched, setSearched] = useState<string>("Qidirish...")

    const [searchCategories, setSearchCategories] = useState<string[] | null>(null)

    const handleCategories = (name: string) => {
        setSearchCategories(prev =>
            prev?.includes(name)
                ? prev.filter(item => item !== name)  // Agar bor bo‘lsa, olib tashlash
                : [...(prev ?? []), name]                     // Aks holda, qo‘shish
        );
    };

    const pathname = usePathname()


    useEffect(() => {
        if (pathname.includes("/Search")) {
            const searchedProduct = pathname.split("/")[3]
            setSearched(searchedProduct)
        }
    }, [pathname])

    return (
        <div className='mt-10'>

            <div className='flex items-center gap-2 flex-wrap'>
                {
                    Array.isArray(searchCategories) && (
                        searchCategories.length > 0 && (
                            searchCategories.map((item, index) => (
                                <b key={index} className='text-[12px]'>/{item}</b>
                            ))
                        )
                    )
                }
            </div>


            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    window.location.replace(`/user/Search/${search}`)
                }}
                className='rounded-[4px] border-2 mt-3 border-solid border-[#01A3D4] p-3 flex items-center justify-between'>
                <FontAwesomeIcon icon={faFilter} width={20} height={20} className='cursor-pointer' onClick={() => setFilter(true)} />
                <input type="text"
                    placeholder={searched}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    className="flex-1 border-none bg-transparent outline-none h-full px-2" />
                <FontAwesomeIcon icon={faSearch} width={20} height={20} className='cursor-pointer' />
            </form>

            {
                filter && (
                    <>
                        <div className='fixed top-0 left-0 bg-black/70 w-screen h-screen justify-center items-center flex z-10'>

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
                                                        searchCategories?.includes(item) ? (
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
        </div>
    )
}