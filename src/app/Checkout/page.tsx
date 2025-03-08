"use client";

import React, { useEffect, useState } from "react";
import "./checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import format from "@/lib/format";
import { removeProduct } from "@/redux/actions/productSlice";
import Informations from "@/components/Informations";
import { ProductItem } from "@/lib/data";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

type ResultType = {
    totalPrice: number;
    overNumber: number;
};

export type ProductsState = {
    products: ProductItem[];
};


export default function Page() {
    const [infoMenu, setInfoMenu] = useState<boolean>(false);
    const dispatch = useDispatch();
    const products = useSelector((store: RootState) => store.products);
    const [isWebApp, setIsWebApp] = useState<"true" | "false">("false")

    const result: ResultType = products.products.reduce(
        (acc, product) => {
            acc.totalPrice += product.price * (product.overNumber ?? 0);
            acc.overNumber += product.overNumber ?? 0;
            return acc;
        },
        { totalPrice: 0, overNumber: 0 } as ResultType
    );

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const webApp = searchParams?.get("web_app")
            if (webApp) {
                setIsWebApp(webApp as "true" | "false")
            } else {
                window.location.replace("/Checkout/?web_app=false")
            }
        }
    }, [pathname, searchParams])


    return (
        <div className="min-h-[50vh] mt-10" >
            {infoMenu && <Informations setInfoMenu={setInfoMenu} isWebApp={isWebApp} />}

            <div className="checkout">
                <div className="checkout-content">
                    <div className="checkout-details">
                        <div className="checkout-details__arrow">
                            <b>Maxsulot ma'lumotlari</b>
                        </div>
                        <hr />
                        <h3>Maxsulotlar</h3>
                        <p>
                            Siz <b>{products.products.length}</b> ta maxsulot sotib olish uchun tanladingiz
                        </p>

                        <div className="checkout-details__items">
                            {products.products.map((item: ProductItem) => (
                                <div className="checkout-details__item" key={item.id}>
                                    <Image src="/product1.png" alt="Book img" width={100} height={100} />
                                    <b className="checkout-item__title line-clamp-2">{item.name}</b>
                                    <span style={{ fontWeight: "bolder" }}>{item.overNumber}</span>
                                    <b>{format(item.price, "UZS")}</b>
                                    <Image
                                        src="/trash.png"
                                        alt=""
                                        onClick={() => dispatch(removeProduct(item.id))}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="checkout-payment">
                        <h3>Buyurtma xulosasi</h3>
                        <div>
                            <b>Soni:</b>
                            <span>{products.products.length}</span>
                        </div>
                        <div>
                            <b>Narxi:</b>
                            <span>{format(result.totalPrice, "UZS")}</span>
                        </div>
                        <button onClick={() => setInfoMenu(true)}>Sotib olish!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
