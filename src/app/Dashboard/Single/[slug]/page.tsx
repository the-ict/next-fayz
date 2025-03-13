"use client";

import { getProductById } from "@/lib/getData";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProductItem } from "@/lib/data";
import Image from "next/image";


export default function Page() {
    const [product, setProduct] = useState<ProductItem | null>(null);

    const pathname = usePathname();


    useEffect(() => {
        const fetchProduct = async () => {
            const productId = Number(pathname.split("/")[3]);
            if (!isNaN(productId)) {
                const productData = await getProductById(productId);
                setProduct(productData ?? null);
            }
        };

        fetchProduct();
    }, [pathname]);


    return (
        <div className="min-h-[50vh] flex-5 p-6">
            <div className="flex items-start gap-5 mt-10 max-sm:flex-col">
                <div className="flex-3 h-[348px] max-sm:w-full flex justify-center relative bg-[#F8F4F4] dark:bg-[#222] p-3">
                    <Image
                        src={product?.image || "/category1.jpg"}
                        className="h-full object-contain cursor-pointer"
                        alt={product?.name || "Product Image"}
                        width={400}
                        height={400}
                    />
                </div>

                <div className="flex-3">
                    <p>{product?.name}</p>
                </div>

                <div className="flex-2 flex flex-col gap-2 font-bold text-[14px] max-sm:w-full dark:text-black">
                    <p className="dark:text-white">12 oy uchun</p>
                    <input type="text" className="h-[48px] text-center bg-[#D9D9D9] outline-none rounded" value={10000} />
                    <p className="dark:text-white">6 oy uchun</p>
                    <input type="text" className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded" value={10000} />

                    <p className="dark:text-white">3 oy uchun</p>
                    <input type="text" className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded" value={10000} />

                    <p className="dark:text-white">Maxsulot narxi</p>
                    <input type="text" className="h-[48px] flex justify-center items-center text-center bg-[#D9D9D9] outline-none rounded" value={10000} />
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
        </div>
    );
}
