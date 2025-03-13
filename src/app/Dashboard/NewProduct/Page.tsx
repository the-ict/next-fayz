"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { faCheck, faDownload, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import format from "@/lib/format"
import { categories } from "@/lib/data"
import { IProduct } from "@/lib/models/Product"
import Image from "next/image"

export interface IProperty {
    name: string
    value: string
}

export interface IResponse {
    filePath: string,
    success: boolean
}

export interface iNewProduct {
    name: string,
    images?: string[],
    categories: string[],
    price: number,
    properties: IProperty[],
    credit: object
}

export interface INewProductResponse {
    message: string,
    product: IProduct
}

export default function Page() {
    const [images, setImages] = useState<File[]>([])
    const [name, setName] = useState<string>("")
    const [properties, setProperties] = useState<IProperty[]>([])
    const [propertyName, setPropertyName] = useState<string>("")
    const [propertyValue, setPropertyValue] = useState<string>("")
    const [propertyMenu, setPropertyMenu] = useState<boolean>(false)
    const [price, setPrice] = useState<number>(0)
    const [newMonth, setNewMonth] = useState<string>("");
    const [newValue, setNewValue] = useState<string>("");

    const [searchCategories, setSearchCategories] = useState<string[]>([])

    const [installments, setInstallments] = useState<{ [key: string]: number }>({
        "12 oy": 0,
        "6 oy": 0,
        "3 oy": 0
    });

    const updateInstallment = (key: string, value: number) => {
        setInstallments(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const addInstallment = () => {
        if (newMonth && newValue) {
            setInstallments(prev => ({
                ...prev,
                [`${newMonth} oy`]: Number(newValue)
            }));
            setNewMonth("");
            setNewValue("");
        }
    };


    const handleCategories = (category: string): void => {
        if (searchCategories.includes(category)) {
            setSearchCategories(() => searchCategories.filter(item => item !== category))
        } else {
            setSearchCategories(prev => ([...prev, category]))
        }
    }


    const handleProperty = (): void => {
        if (propertyName.trim() && propertyValue.trim()) {
            setProperties(prev => [...prev, { name: propertyName, value: propertyValue }])
            setPropertyName("")
            setPropertyValue("")
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files))
        }
    }

    const handleSubmit = async () => {
        if (images.length > 0 && searchCategories && name && price && installments) {
            try {
                const newProuduct: iNewProduct = {
                    name,
                    price,
                    properties,
                    categories: searchCategories,
                    credit: installments,
                    images: []
                }
                for (const image of images) {
                    const data = new FormData()
                    data.append("file", image)

                    const res = await fetch("/api/upload", {
                        method: "POST",
                        body: data
                    })


                    const response: IResponse = await res.json()
                    console.log(response.filePath)

                    newProuduct.images?.push(response.filePath)
                }

                const data = await fetch("/api/product", {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(newProuduct)
                })

                const response: INewProductResponse = await data.json()
                if (response.product._id) {
                    console.log("response : ", response)
                    toast("Yangi maxsulot qo'shildi")
                    setProperties([])
                    setSearchCategories([])
                    setPropertyMenu(false)
                    setImages([])
                    setPrice(0)
                    setName("")
                    setInstallments({})
                }

            } catch (error) {
                console.log(error)
                toast.error("Yuklashda xatolik yuz berdi!")
            }
        }
    }

    return (
        <div className="flex-5 flex dark:text-black py-10 dark:bg-[#222]">
            {/* Content */}
            <div className="w-full max-h-[86vh] overflow-y-auto custom-scroll py-5 px-10">
                <ToastContainer />
                <Card className="p-10 text-white w-full relative">
                    <div className="flex items-center justify-between">
                        <label>Maxsulot rasmlari</label>

                        {/* Rasmlar preview qilish qismi */}
                        {images.length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {images.map((file, index) => (
                                    <Image
                                        key={index}
                                        src={URL.createObjectURL(file)}
                                        alt="Muqova"
                                        className="w-20 h-20 object-contain bg-[#efeffe] p-2 rounded"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 my-2">
                        <label htmlFor="coverImage" className="cursor-pointer flex items-center gap-2">
                            <FontAwesomeIcon icon={faDownload} width={20} height={20} />
                            <span>Rasm yuklash</span>
                        </label>
                        <input type="file" id="coverImage" multiple style={{ display: "none" }} onChange={handleFileChange} />
                    </div>

                    <label>Nomi</label>
                    <Input placeholder="Nomi" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />

                    {/* Price Calculator */}

                    <div className="w-full mx-auto space-y-4 rounded-lg dark:text-black">
                        <h2 className="text-xl font-bold dark:text-white">To'lov Kalkulyatori</h2>

                        <label className="block dark:text-white">
                            <span className="text-gray-700 dark:text-white">Mahsulot narxi (so'm)</span>
                            <div className="flex mt-2 items-center gap-2">
                                <Input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="mt-1 block w-full"
                                />
                                <p>{format(price, "UZS")}</p>
                            </div>
                        </label>

                        <div className="space-y-3 dark:text-black">
                            {Object.entries(installments).map(([key, value]) => (
                                <div key={key} className="flex justify-between p-2 bg-gray-100 rounded-md">
                                    <span className="font-medium">{key} uchun:</span>
                                    <Input
                                        type="number"
                                        value={value}
                                        onChange={(e) => updateInstallment(key, Number(e.target.value))}
                                        className="w-24"
                                    />
                                    <span>{format(installments[key], "UZS")}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 dark:text-white">
                            <Input
                                type="number"
                                placeholder="Oylar soni (masalan, 18)"
                                value={newMonth}
                                onChange={(e) => setNewMonth(e.target.value)}
                            />
                            <Input
                                type="number"
                                placeholder="Oylik to'lov (so'm)"
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                            />
                            <Button onClick={addInstallment} className="bg-blue-500 text-white font-bold">
                                Qo‘shish
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="font-bold text-[16px]">Xususiyatlari:</label>
                        <Button onClick={() => setPropertyMenu(!propertyMenu)} className="bg-[#222] text-white font-bold cursor-pointer">
                            {propertyMenu ? "Yopish" : "Ochish"}
                        </Button>
                    </div>

                    {propertyMenu && (
                        <div className="flex gap-2">
                            <Input placeholder="Nomi" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />
                            <Input placeholder="Qiymati" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} />
                            <Button onClick={handleProperty} className="bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer">
                                Qo'shish
                            </Button>
                        </div>
                    )}



                    {/* Content */}
                    <div className="flex flex-wrap gap-2">
                        {
                            categories.map(item => {
                                return (
                                    <div
                                        onClick={() => handleCategories(item)}
                                        key={item} className='bg-black-100 px-2 py-1 cursor-pointer hover:bg-gray-900 flex items-center gap-2 rounded'>
                                        <b>
                                            {item}
                                        </b>
                                        {
                                            searchCategories.includes(item) ? (
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

                    {/* Properties List */}
                    <div className="mt-3 space-y-2">
                        {properties.map((item, index) => (
                            <div key={index} className="flex items-center justify-between border-b pb-1">
                                <b>{item.name}</b>
                                <p>{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold mt-1 cursor-pointer">
                        Yaratish
                    </Button>
                </Card>
            </div>
        </div>
    )
}
