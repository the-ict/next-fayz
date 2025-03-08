"use client";

import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '@/redux/actions/productSlice';
import { toast, ToastContainer } from "react-toastify";
import format from '@/lib/format';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";


type Props = {
    setInfoMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const WebApp = window.Telegram.WebApp;

export default function Informations({ setInfoMenu }: Props) {
    const [phone, setPhone] = useState<string>("+998");
    const [desc, setDesc] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [last_name, setLastName] = useState<string>("");

    useEffect(() => {
        if (WebApp.isActive) {
            WebApp.ready();
        }
    }, []);

    const handleBought = async () => {
        try {
            const data = { phone, desc, name, last_name, products: products.products };
            window.Telegram.WebApp.sendData(JSON.stringify(data));

            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, desc, subject: "Sotib olish", name, last_name }),
            });

            toast("Xabaringiz yuborildi!")
            setPhone("+998");
            setDesc("");
            setInfoMenu(false);
        } catch (error) {
            console.error("Server xatosi:", error);
            toast("Server bilan bog'lanishda xatolik yuz berdi!");
        }
    };

    const dispatch = useDispatch();
    const products = useSelector((store: RootState) => store.products);

    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <ToastContainer />
            <Card className='p-10 rounded-lg z-20 shadow-2xl w-[90%] max-w-lg bg-white relative'>
                <Image src="/x.png" onClick={() => setInfoMenu(false)} className='absolute right-2 top-2 cursor-pointer' width={16} height={16} alt="Close" />
                {
                    products.products.map(item => (
                        <div className="flex items-center gap-2 border-b pb-2 mb-2" key={item?.id}>
                            <Image src="/product1.png" alt="Book img" width={40} height={40} />
                            <b className='flex-1 line-clamp-2'>{item?.name}</b>
                            <span className='font-bold'>{item.overNumber}</span>
                            <b>{format(item?.price, "UZS")}</b>
                            <Image width={20} height={20} className='cursor-pointer' src="/trash.png" alt="Delete" onClick={() => dispatch(removeProduct(item?.id))} />
                        </div>
                    ))
                }
                <Input value={phone} type="text" placeholder='91 111 11 11' onChange={(e) => setPhone(e.target.value)} className='mb-3' />
                <Input value={name} type="text" placeholder='Ismingiz' onChange={(e) => setName(e.target.value)} className='mb-3' />
                <Input value={last_name} type="text" placeholder='Familiyangiz' onChange={(e) => setLastName(e.target.value)} className='mb-3' />
                <Input value={desc} type="text" placeholder='Izoh qoldiring' onChange={(e) => setDesc(e.target.value)} className='mb-3' />
                <Button onClick={handleBought} className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold'>So‘rov yuborish!</Button>
            </Card>
        </div>
    );
}
