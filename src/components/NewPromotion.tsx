"use client";

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Textarea } from './ui/textarea';
import { IResponse } from '@/app/Dashboard/NewProduct/Page';

type Props = {
    setInfoMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

interface IPromotion {
    name: string,
    description: string,
    image: string,
    interfaceImg?: string
}

export default function NewPromotion({ setInfoMenu }: Props) {
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
        const newPromotion: IPromotion = {
            name: "",
            description: "",
            image: "",
            interfaceImg: ""
        }
        try {

            if (image) {
                const data = new FormData()
                data.append("file", image)
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: data
                })

                const response: IResponse = await res.json()
                console.log("response: ", response)
                if (response) {
                    newPromotion.image = response.filePath
                }
            }

            if (interfaceImg) {
                const data = new FormData()
                data.append("file", interfaceImg)
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: data
                })

                const response: IResponse = await res.json()
                console.log("response: ", response)
                if (response) {
                    newPromotion.interfaceImg = response.filePath
                }
            }

            const res = await fetch("/api/discount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPromotion)
            })

            const response = await res.json()
            console.log("response new discount: ", response)
            if (response) {
                toast("Qo'shildi")
                setImage(null)
                setInterfaceImg(null)
                setName("")
                setDesc("")
            }
        } catch (error) {
            console.log(error)
        }

    };


    return (
        <div className=''>
            <ToastContainer />
            <Card className='p-10 rounded-lg z-20 bg-white relative'>
                <Image src="/x.png" onClick={() => setInfoMenu(false)} className='absolute right-2 top-2 cursor-pointer' width={16} height={16} alt="Close" />

                {/* Muqova rasmi */}
                <label>Muqova rasm</label>
                {image && (
                    <div className="relative w-10 h-10 mt-4">
                        <Image src={URL.createObjectURL(image)} alt="Muqova rasm" width={128} height={128} className="object-contain rounded-lg" />
                    </div>
                )}
                <div className='flex items-center gap-2 my-2'>
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

                {/* Post rasmi */}
                <label>Post rasmi</label>
                {interfaceImg && (
                    <div className="relative w-10 h-10 mt-4">
                        <Image src={URL.createObjectURL(interfaceImg)} alt="Post rasmi" width={128} height={128} className="object-contain rounded-lg" />
                    </div>
                )}
                <div className='flex items-center gap-2 my-2'>
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
