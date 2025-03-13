import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'


export default function Sidebar() {
    return (
        <div className='w-full bg-white h-screen flex-1 p-10 shadow flex flex-col gap-10 justify-between dark:bg-[#111] dark:text-white'>
            <div>
                <a href='/Dashboard'>
                    <h1 className='text-5xl font-bold cursor-pointer'>FAYZ<span className='text-green-500'>.</span></h1>
                </a>
                <p className='opacity-60'>Sizning boshqaruv panelingiz</p>
            </div>
            <div>
                <ul className='flex flex-col gap-5'>
                    <li className={'flex items-center hover:bg-gray-100 p-2 dark:hover:bg-blue-200 dark:hover:text-black rounded'}>
                        <i className="fa-solid fa-circle-dot"></i>
                        <FontAwesomeIcon icon={faProductHunt} width={14} height={14} />
                        <span className='ml-3'>
                            <a href={"/Dashboard/Products"}>Maxsulotlar</a>
                        </span>
                    </li>
                    <li className={'flex items-center hover:bg-gray-100 p-2 dark:hover:bg-blue-200 dark:hover:text-black rounded'}>
                        <FontAwesomeIcon icon={faNewspaper} width={14} height={14} />
                        <span className='ml-3'>
                            <a href={"/Dashboard/Promotions"}>Yangiliklar</a>
                        </span>
                    </li>
                </ul>
            </div>
            <button className='bg-green-500 text-white py-2 hover:bg-green-600 transition rounded'>
                <a href="/Dashboard/Promotions">
                    Aksiya qo'shish
                </a>
            </button>
        </div >
    )
}
