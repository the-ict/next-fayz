"use client";

import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '@/redux/actions/productSlice';
import { toast, ToastContainer } from "react-toastify";
import format from '@/lib/format';
import Image from 'next/image';


type Props = {
    setInfoMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isWebApp: "false" | "true"
};

const WebApp = window.Telegram.WebApp

export default function Informations({ setInfoMenu, isWebApp }: Props) {
    const [phone, setPhone] = useState<string>("+998");
    const [desc, setDesc] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [last_name, setLastName] = useState<string>("");


    useEffect(() => {
        if (WebApp.isActive) {
            WebApp.ready()
        }
    }, []);

    const handleBought = async () => {
        if (isWebApp === "true") {
            const data: object = {
                phone,
                desc,
                name,
                last_name,
                products: products.products,
            };

            window.Telegram.WebApp.sendData(JSON.stringify(data));

        } else if (isWebApp === "false") {
            try {
                const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone, desc, subject: "Sotib olish", name, last_name }),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log("Email muvaffaqiyatli yuborildi:", data);
                    setPhone("+998");
                    setDesc("");
                    toast("Xabaringiz muvaffaqiyatli yuborildi");
                } else {
                    toast("Xatolik yuz ber!");
                }
            } catch (error) {
                console.error("Server xatosi:", error);
            }
        }
    };

    const dispatch = useDispatch();
    const products = useSelector((store: RootState) => store.products);

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-99 flex justify-center items-center'>
            <ToastContainer />
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => e.preventDefault()} className='p-10 rounded bg-[#fdfdfd] relative shadow-2xl w-max h-max'>
                <Image src="/x.png" onClick={() => setInfoMenu(false)} className='absolute right-2 top-2 cursor-pointer object-contain' width={16} height={16} alt="" />
                {
                    products.products.map(item => (
                        <div className="checkout-details__item" key={item?.id}>
                            <Image src="/product1.png" alt="Book img" width={20} height={20} />
                            <b className='checkout-item__title line-clamp-2'>{item?.name}</b>
                            <span style={{ fontWeight: "bolder" }}>{item.overNumber}</span>
                            <b>{format(item?.price, "UZS")}</b>
                            <Image width={20} height={20} className='object-contain' src="/trash.png" alt="" onClick={() => dispatch(removeProduct(item?.id))} />
                        </div>
                    ))
                }
                <div className='flex relative items-center gap-2 h-[50px] p-2 rounded border-2 border-solid border-gray-500 my-3'>
                    <input value={phone} type="text" placeholder='91 111 11 11' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} className='h-full flex-1 outline-none border-none' />
                    <Image width={10} height={10} src="/down.png" alt="Down" className='w-5 h-5 object-contain cursor-pointer' />
                </div>
                <div className='flex items-center gap-2 h-[50px] p-2 rounded border-2 border-solid border-gray-500 my-3'>
                    <input value={name} type="text" placeholder='Ismingiz !' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className='h-full flex-1 outline-none border-none' />
                    <Image width={10} height={10} src="/down.png" alt="Down" className='w-5 h-5 object-contain cursor-pointer' />
                </div>
                <div className='flex items-center gap-2 h-[50px] p-2 rounded border-2 border-solid border-gray-500 my-3'>
                    <input value={last_name} type="text" placeholder='Familiyangiz !' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} className='h-full flex-1 outline-none border-none' />
                    <Image width={10} height={10} src="/down.png" alt="Down" className='w-5 h-5 object-contain cursor-pointer' />
                </div>
                <div className='flex items-center gap-2 h-[50px] p-2 rounded border-2 border-solid border-gray-500 my-3'>
                    <input value={desc} type="text" placeholder='Izoh qoldiring !' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)} className='h-full flex-1 outline-none border-none' />
                    <Image width={10} height={10} src="/down.png" alt="Down" className='w-5 h-5 object-contain cursor-pointer' />
                </div>
                <button onClick={handleBought} className='bg-[#01A3D4] w-full py-3 rounded text-white uppercase font-bold hover:bg-[#77b1ec]'>So&apos;rov yuborish!</button>
            </form>
        </div>
    );
}
