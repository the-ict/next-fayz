"use client"

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Contacts() {
    const [phone, setPhone] = useState<string>("+998")
    const [desc, setDesc] = useState<string>("")
    const [buttonState, setButtonState] = useState<boolean>(false)

    const handleEmail = async () => {
        if (!phone || !desc) {
            console.warn("Telefon raqam yoki savol yo'q!");
            return;
        }

        setButtonState(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, desc, subject: "Savol" }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Email muvaffaqiyatli yuborildi:", data);
                setPhone("+998")
                setDesc("")
                toast("Xabaringiz muvaffaqiyatli yuborildi")
                setButtonState(false)
            } else {
                setButtonState(false)
                toast("Xatolik yuz ber!")
            }
        } catch (error) {
            setButtonState(false)
            console.error("Server xatosi:", error);
        }
    }

    return (
        <div className='bg-[#fdfdfd] mt-10 flex flex-col items-center justify-center p-10 animation-block'>
            <h1 className="uppercase">Savollaringiz bormi ?</h1>
            <ToastContainer />
            <form className="flex flex-col gap-4 mt-3 w-[400px] max-sm:w-full" onSubmit={(e) => e.preventDefault()}>
                <input value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPhone(e.target.value)
                }} type="text" placeholder='Telefon raqam...' className='bg-[#AB9898] py-3 px-2 rounded text-white outline-none' />
                <textarea
                    value={desc}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setDesc(e.target.value)
                    }}
                    className='h-[200px] p-3 bg-[#EFEFEF] rounded border-none outline-none' placeholder='Savolingizni kiriting!'></textarea>
                <button
                    onClick={handleEmail}
                    className={`bg-[#01A3D4] h-[60px] px-2 text-white uppercase ${buttonState ? "cursor-not-allowed" : "cursor-pointer"} hover:bg-[#6adcff] transition`}>Yuboring</button>
            </form>
        </div>
    )
}