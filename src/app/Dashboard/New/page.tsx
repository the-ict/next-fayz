"use client";

import React, { useEffect, useState } from 'react';
// import { ToastContainer } from "react-toastify";
// import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IProperty } from "@/lib/types/index"
import { categories } from "@/lib/data"
import Image from 'next/image';
import format from "@/lib/format"


export default function Page() {
    const [name, setName] = useState<string>("998");
    const [price, setPrice] = useState<number>(0);
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false)
    const [properties, setProperties] = useState<IProperty[]>([])
    const [propertyMenu, setPropertyMenu] = useState<boolean>(false)
    const [properyName, setPropertyName] = useState<string>("")
    const [properyValue, setPropertyValue] = useState<string>("")
    const [postCategories, setPostCategories] = useState<string[]>([])
    const [images, setImages] = useState<FileList | null>(null)

    useEffect(() => {
        if (name && price && properties.length > 0 && postCategories.length > 0 && images) {
            setIsActiveButton(true)
        } else {
            setIsActiveButton(false)
        }
    }, [name, price, properties, postCategories, images])


    useEffect(() => {
        console.log(images, "images")
    }, [images])


    const handleAdd = () => {
        if (properyName && properyValue) {
            setProperties(prev => [...prev, { name: properyName, value: properyValue }])
            setPropertyName('');
            setPropertyValue('');
        }
    };


    const handleAddCategory = (categoryName: string) => {
        if (postCategories.includes(categoryName)) {
            setPostCategories(() => postCategories.filter(item => item !== categoryName))
        } else {
            setPostCategories(prev => [...prev, categoryName])
        }
    }

    const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(e.target.files)
        }
    };


    return (
        <div>
            <Card className='p-10 '>
                <div className='flex items-center gap-5 flex-wrap'>
                    {images && (
                        Array.from(images).map((image, index) => (
                            <div key={index} className='relative w-32 h-32 bg-gray-100 rounded'>
                                <p className='absolute top-2 left-2'>{index + 1}</p>
                                <Image src={URL.createObjectURL(image)} alt='Image' fill className='object-contain' />
                            </div>
                        ))
                    )}
                </div>


                <div className='flex items-center gap-2'>
                    <label htmlFor="newFile">
                        <FontAwesomeIcon icon={faDownload} />
                    </label>
                    <span>Rasm yuklash</span>

                    <input type="file" id='newFile' multiple name='newFile' style={{ display: "none" }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImages(e)} />
                </div>
                <label>Nomi</label>
                <Input value={name} type="text" placeholder='Nomi' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <label>Narxi</label>
                <div className='flex items-center gap-2'>
                    <Input value={price} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))} />
                    <span>
                        {format(price, "UZS")}
                    </span>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <span>Xususiyatlari:</span>
                        <Button onClick={() => setPropertyMenu(!propertyMenu)}>{
                            propertyMenu ? "Yopish" : "Ochish"}</Button>
                    </div>
                </div>
                {
                    propertyMenu && (
                        <div className='flex items-center justify-between gap-2 h-[50px]'>
                            <div className='flex items-center gap-2'>
                                <input type="text" value={properyName} placeholder='Nomi' className='w-[150px] h-[40px] px-2 rounded border-2 ' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyName(e.target.value)} />
                                <input type="text" value={properyValue} placeholder='Qiymati' className='flex-1 h-[40px] px-2 rounded border-2 ' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyValue(e.target.value)} />
                            </div>
                            <Button className='bg-blue-600' onClick={handleAdd}>Qo'shish</Button>
                        </div>
                    )
                }


                {
                    properties.map(item => (
                        <div className='flex justify-between items-center' key={item.value}>
                            <b>{item.name}:</b>
                            <p>{item.value}</p>
                        </div>
                    ))
                }
                <div className='flex flex-wrap gap-2'>
                    {
                        categories.map(item => (
                            <div className='bg-gray-100 cursor-pointer flex items-center gap-1 px-2 py-1 rounded' onClick={() => handleAddCategory(item)} key={item}>
                                <b>{item}</b>
                                {
                                    postCategories.includes(item) ? (
                                        <FontAwesomeIcon icon={faCheck} />
                                    ) : (
                                        <FontAwesomeIcon icon={faPlus} />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>


                {
                    isActiveButton && (
                        <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold'>So‘rov yuborish!</Button>
                    )
                }
            </Card>
        </div>
    );
}
