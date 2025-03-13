"use client"

import React, { useEffect } from "react";
import "../globals.css";

export default function Page() {

    useEffect(() => {
        window.location.replace("/Dashboard/Products")
    }, [])

    return (
        <div className='bg-gray-100 flex-5 dark:bg-[#222] min-h-screen flex flex-col items-center p-10 font-barlow'>
            <h1>Dashboard</h1>
        </div>
    );
}