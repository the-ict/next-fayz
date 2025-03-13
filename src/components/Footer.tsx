"use client"

import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTiktok, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


export default function Footer() {
    return (
        <div className='mt-10 bg-[#000000] text-white flex items-center justify-between max-sm:justify-around px-10 py-10 max-sm:px-0 max-sm:py-5 max-lg:p-10'>
            <div className='flex flex-col items-center gap-2'>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    style={{ height: 'auto', width: 'auto' }}
                />
                <div className='flex items-center gap-8 max-sm:gap-2 mt-5'>
                    <FontAwesomeIcon icon={faInstagram} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faFacebook} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faTiktok} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                    <FontAwesomeIcon icon={faTelegram} className='cursor-pointer text-2xl max-sm:text-[12px] hover:scale-110 transition-all' />
                </div>
            </div>
            <ul>
                <Link href="/">
                    <li className='cursor-pointer mt-3 font-bold max-sm:text-[10px] hover:underline'>Biz haqimizda</li>
                </Link>
                <Link href="/user/Markets">
                    <li className='cursor-pointer mt-3 font-bold max-sm:text-[10px] hover:underline'>Do'kon manzillari</li>
                </Link>
                <Link href="/user/News">
                    <li className='cursor-pointer mt-3 font-bold max-sm:text-[10px] hover:underline'>Yangiliklar</li>
                </Link>
                <Link href="/user/Contacts">
                    <li className='cursor-pointer mt-3 font-bold max-sm:text-[10px] hover:underline'>Bog'lanish</li>
                </Link>
            </ul>
            <div>
                <div className='flex items-center gap-4 max-sm:gap-2 font-bold'>
                    <FontAwesomeIcon icon={faPhone} className='text-2xl max-sm:text-[12px]' />
                    <span className='text-gray-300 max-sm:text-[10px]'>+998 91 689 52 25</span>
                </div>
                <Link href="mailto:info@gmail.com">
                    <div className='flex items-center gap-4 mt-3 max-sm:gap-2 font-bold'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-2xl max-sm:text-[12px]' />
                        <span className='text-gray-300 max-sm:text-[10px]'>info@gmail.com</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
