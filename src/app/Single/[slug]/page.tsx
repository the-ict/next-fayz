"use client";

import { getProductById } from "@/lib/getData";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProductItem } from "@/lib/data";
import format from "@/lib/format";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "@/redux/actions/productSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";


export default function Page() {
    const [product, setProduct] = useState<ProductItem | null>(null);
    const [counter, setCounter] = useState<number>(1);
    const [credit, setCredit] = useState<number>(3);

    const pathname = usePathname();
    const dispatch = useDispatch();
    const products = useSelector((store: RootState) => store.products);

    useEffect(() => {
        const fetchProduct = async () => {
            const productId = Number(pathname.split("/")[2]);
            if (!isNaN(productId)) {
                const productData = await getProductById(productId);
                setProduct(productData ?? null);
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
                        src={product?.image || "/category1.png"}
                        className="h-full object-cover cursor-pointer"
                        alt={product?.name || "Product Image"}
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/viewProductIcon.png"
                        className="w-[40px] h-[40px] cursor-pointer absolute right-3 bottom-3"
                        alt="View Product"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex-4 max-sm:w-full">
                    <h3 className="font-bold text-2xl">{product?.name}</h3>
                    <span className="text-[14px] font-bold text-[#897E7E]">{product?.description}</span>
                    <p className="mt-10 font-bold text-[16px] text-[#897E7E]">Rangi: oq</p>
                    <div className="flex items-center gap-2 my-3">
                        {product?.colors?.map((item) => (
                            <div
                                className={`w-4 h-4 rounded-full bg-${item}-700 cursor-pointer`}
                                key={item}
                            ></div>
                        ))}
                    </div>
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
                    {products.products.some((item) => item.id === (product?.id ?? 0)) ? (
                        <button
                            onClick={() => dispatch(removeProduct(product?.id ?? 0))}
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
                    <p>Necha oyga olmoqchisiz?</p>
                    <select
                        className="h-[48px] text-center bg-[#D9D9D9] outline-none rounded"
                        onChange={(e) => setCredit(Number(e.target.value))}
                    >
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                    <p>Dastlabki to'lov</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        0 so&apos;m
                    </span>
                    <p>Oylik to'lov</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        {format(((product?.price ?? 0) * counter) / credit, "UZS")}
                    </span>
                    <p>Umumiy to'lov</p>
                    <span className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded">
                        {format((product?.price ?? 0) * counter, "UZS")}
                    </span>
                </div>
            </div>

            <div className="bg-[#F8F4F4] dark:bg-[#222] mt-10 rounded pt-10">
                <h3 className="text-center text-2xl font-bold">Mahsulot haqida ma'lumot</h3>
                <div className="p-20 flex flex-col gap-3 max-sm:p-5">
                    {product?.properties &&
                        typeof product?.properties === "object" &&
                        !Array.isArray(product?.properties) &&
                        Object.entries(product?.properties as Record<string, string>).map(([key, value]) => (
                            <div key={key}>
                                <b>{key}: </b>
                                <span>{value}</span>
                            </div>
                        ))}
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
