"use client";

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Textarea } from '@/components/ui/textarea';

export interface InewPromotion {
    name: string,
    description: string,
    image: string,
    interfaceImage?: string
}


export default function Page() {
    const [desc, setDesc] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);
    const [interfaceImg, setInterfaceImg] = useState<File | null>(null);

    useEffect(() => {
        setIsActiveButton(Boolean(desc && name && (image || interfaceImg)));
    }, [desc, name, image, interfaceImg]);

    const handleSubmit = async () => {
        console.log("Yangi promo qo'shildi:", { name, desc, image, interfaceImg });
        const newPromotion: InewPromotion = {
            name,
            description: desc,
            image: "",
            interfaceImage: ""
        }
        try {
            if (image) {
                const data = new FormData()
                data.append("file", image)
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: data
                })

                const response = await res.json()
                console.log("response: ", response)
                newPromotion.image = response.filePath
            }

            if (interfaceImg) {
                const data = new FormData()
                data.append("file", interfaceImg)
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: data
                })

                const response = await res.json()
                console.log("response: ", response)
                newPromotion.interfaceImage = response.filePath
            }

            const res = await fetch("/api/discount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPromotion)
            })

            const response = await res.json()

            if (response) {
                toast("Yaratildi...")
                setImage(null)
                setInterfaceImg(null)
                setName("")
                setDesc("")
            }
        } catch (error) {
            console.log(error)
            toast("Xatolik yuz berdi")
        }
    };


    return (
        <div className='flex-5 dark:text-black dark:bg-[#222] p-5'>
            <ToastContainer />
            <Card className='text-white p-10 max-h-[90vh]'>
                {/* Muqova rasmi */}
                <label>Muqova rasm</label>

                <div className='flex items-center gap-2 my-2 justify-between'>
                    <div>
                        <label htmlFor="coverImage" className="cursor-pointer flex items-center gap-2">
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Muqova yuklash</span>
                        </label>
                        <input
                            type="file"
                            id='coverImage'
                            name='coverImage'
                            style={{ display: "none" }}
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setImage(e.target.files[0]);
                                }
                            }}
                        />
                    </div>
                    {image && (
                        <div className="relative w-20 h-20 rounded p-5 bg-[#efefef]">
                            <Image src={URL.createObjectURL(image)} alt="Muqova rasm" fill className="object-contain" />
                        </div>
                    )}
                </div>

                {/* Post rasmi */}
                <label>Post rasmi</label>

                <div className='flex items-center gap-2 my-2 justify-between'>
                    <div>
                        <label htmlFor="postImage" className="cursor-pointer flex items-center gap-2">
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Post rasm yuklash</span>
                        </label>
                        <input
                            type="file"
                            id='postImage'
                            name='postImage'
                            style={{ display: "none" }}
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setInterfaceImg(e.target.files[0]);
                                }
                            }}
                        />
                    </div>
                    {interfaceImg && (
                        <div className="relative w-20 h-20 rounded p-5 bg-[#efefef]">
                            <Image src={URL.createObjectURL(interfaceImg)} alt="Post rasmi" fill className="object-contain rounded-lg" />
                        </div>
                    )}
                </div>

                <label>Nomi</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />

                <label>Malumot</label>
                <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

                {isActiveButton && (
                    <Button onClick={handleSubmit} className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold'>
                        So‘rov yuborish!
                    </Button>
                )}
            </Card>
        </div>
    );
}
