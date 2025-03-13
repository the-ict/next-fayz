"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import format from "@/lib/format";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "@/redux/actions/productSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { IProduct } from "@/lib/models/Product";


export default function Page() {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [counter, setCounter] = useState<number>(1);
    const [credit, setCredit] = useState<number>(3);

    const pathname = usePathname();
    const dispatch = useDispatch();
    const products = useSelector((store: RootState) => store.products);

    useEffect(() => {
        const fetchProduct = async () => {
            const productId = pathname.split("/")[3]

            if (productId) {
                const productData = await fetch(`/api/product?id=${productId}`);

                const response = await productData.json()

                setProduct(response.product)
            }
        };

        fetchProduct();
    }, [pathname]);



    const handleCount = (direction: "minus" | "plus"): void => {
        setCounter((prev) => (direction === "minus" && prev > 1 ? prev - 1 : prev + 1));
    };

    return (
        <div className="min-h-[50vh]" >
            <div className="flex items-start gap-5 mt-10 max-sm:flex-col">
                <div className="flex-3 h-[348px] max-sm:w-full flex justify-center relative bg-[#F8F4F4] dark:bg-[#222] p-3">
                    <Image
                        src={product?.images[0] || "/category1.png"}
                        className="h-full object-cover cursor-pointer"
                        alt={product?.name || "Product Image"}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="flex-4 max-sm:w-full">
                    <h3 className="font-bold text-2xl">{product?.name}</h3>
                    <span className="text-[14px] font-bold text-[#897E7E]">{product?.description}</span>
                    <p className="text-[#897E7E] font-bold">Miqdori</p>
                    <div className="flex max-sm:w-full items-center justify-between bg-[#D9D9D9] dark:bg-[#555] w-[170px] h-[48px] px-4 my-3">
                        <button className="cursor-pointer" onClick={() => handleCount("minus")}>
                            -
                        </button>
                        <p>{counter}</p>
                        <button className="cursor-pointer" onClick={() => handleCount("plus")}>
                            +
                        </button>
                    </div>
                    {products.products.some((item) => item._id === (product?._id ?? 0)) ? (
                        <button
                            onClick={() => dispatch(removeProduct(product?._id ?? 0))}
                            className="rounded bg-red-700 w-[240px] h-[48px] text-center text-white font-bold text-[17px] cursor-pointer mt-3 max-sm:w-full"
                        >
                            Savatchadan o&apos;chirish
                        </button>
                    ) : (
                        <button
                            onClick={() =>
                                dispatch(
                                    addProduct({
                                        ...product,
                                        overNumber: counter,
                                    })
                                )
                            }
                            className="rounded bg-[#01A3D4] w-[240px] h-[48px] text-center text-white font-bold text-[17px] cursor-pointer mt-3 max-sm:w-full"
                        >
                            Savatchaga qo&apos;shish
                        </button>
                    )}
                </div>
                <div className="flex-2 flex flex-col gap-2 font-bold text-[14px] max-sm:w-full dark:text-black">
                    <p className="dark:text-white">Necha oyga olmoqchisiz?</p>
                    <select
                        className="h-[48px] text-center bg-[#D9D9D9] outline-none rounded"
                        onChange={(e) => setCredit(Number(e.target.value))}
                    >
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </select>
                    <p className="dark:text-white">Dastlabki to'lov</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        0 so&apos;m
                    </span>
                    <p className="dark:text-white">Oylik to'lov</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        {format(Number(product?.credit[`${credit} oy`] || 0), "UZS")}
                    </span>
                    <p className="dark:text-white">Maxsulot tan narxi</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        {format((product?.price ?? 0) * counter, "UZS")}
                    </span>
                </div>
            </div>

            <div className="bg-[#F8F4F4] dark:bg-[#222] mt-10 rounded pt-10">
                <h3 className="text-center text-2xl font-bold">Mahsulot haqida ma'lumot</h3>
                <div className="p-20 flex flex-col gap-3 max-sm:p-5">
                    {product?.properties &&
                        product.properties.map(item => (
                            <div key={item.name}>
                                <b>{item.name}: </b>
                                <span>{item.value}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="text-center">
                <h1 className="font-bold text-[35px] uppercase mt-10 max-sm:text-[20px]">
                    Sizga yoqishi mumkin
                </h1>
            </div>
            <div className="flex flex-wrap gap-2"></div>
        </div>
    );
}
