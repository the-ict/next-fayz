"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Image from 'next/image'

type Props = {}

export default function Search({ }: Props) {
    const [search, setSearch] = useState<string>("")
    const [searched, setSearched] = useState<string>("Qidirish...")

    const pathname = usePathname()


    useEffect(() => {
        if (pathname.includes("/Search")) {
            const searchedProduct = pathname.split("/")[2]
            setSearched(searchedProduct)
        }
    }, [])

    return (
        <div className='mt-10'>
            <form className='rounded-[4px] border-2 border-solid border-[#01A3D4] p-3 flex items-center justify-between' onSubmit={(e: React.FormEvent<HTMLFormElement>): null | void => {
                e.preventDefault()
                if (search.length === 0) return null
                window.location.replace(`/Search/${search}`)
            }}>
                <input type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value)}
                    placeholder={searched} className="flex-1 border-none bg-transparent outline-none h-full" />
                <Image src="/searchIcon.png" alt="search Icon" className='cursor-pointer' width={25} height={25} />
            </form>
        </div>
    )
}